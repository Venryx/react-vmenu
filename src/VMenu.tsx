//import Radium from "radium";
import * as React from "react";
import {Component} from "react";
import {E, GetContentOffset, GetOffset, GetParents, GetScroll, GetSelfAndParents, Vector2i, AddGlobalStyle} from "./Helpers/General";
import {BaseComponent} from "./Helpers/BaseComponent";
import * as ReactDOM from "react-dom";
import autoBind from "react-autobind";
import {VMenuLayer, VMenuState, VMenuReducer} from "./VMenuLayer";
import {ACTOpenVMenuSet, voidy} from "./VMenuLayer";
import {VMenuStub} from "./VMenuStub";
import classNames from "classnames";

export {VMenuStub, ACTOpenVMenuSet, VMenuState, VMenuReducer, VMenuLayer};

let styles = {
	root: {
		position: "absolute",
		//position: "fixed",
		zIndex: 20, backgroundColor: "rgb(35,35,35)", border: "1px outset #555",
		fontStyle: "initial", whiteSpace: "nowrap",
		//":hover": {backgroundColor: "rgb(25,25,25)"},
	},
};

export class VMenu {
	static lastID = -1;
	static menuChildren = {};
}

//onOpen?: (posInPosHoistElement: Vector2i, pagePos: Vector2i)=>void, onClose?: ()=>void, onOK?: ()=>boolean | voidy, onCancel?: ()=>boolean | voidy
export type VMenuUIProps = {pos: Vector2i, style?, menuID: number} & React.HTMLProps<HTMLDivElement>;
/*export interface VMenuUIProps extends React.HTMLProps<HTMLDivElement> {
	pos: Vector2i, style?, menuID: number;
}*/
export class VMenuUI extends BaseComponent<VMenuUIProps, {}> {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	render(forReal = false) {
		var {pos, className, style, menuID, children, ...rest} = this.props;
		if (children == null) return <div className="VMenu" style={E({display: "none"}, style)}/>;

	    return (
			<div {...rest} className={classNames("VMenu", className)} style={E(styles.root, {left: pos.x, top: pos.y}, style)}>
				{children}
			</div>
		);
	}
}

AddGlobalStyle(`
/*.VMenuItem.disabled {
	opacity: .5;
	/#*pointer-events: none;*#/
	cursor: default;
}*/
.VMenuItem:not(.disabled):hover {
	background-color: rgb(25,25,25) !important;
}
`);

export class VMenuItem extends BaseComponent<{text: string, enabled?: boolean, style?} & React.HTMLProps<HTMLDivElement>, {}> {
	static styles = {
	    root: {
			zIndex: 21, padding: "2 5", backgroundColor: "rgb(35,35,35)", cursor: "pointer",
	        //":hover": {backgroundColor: "rgb(25,25,25)"}
	    },
		 disabled: {
			opacity: .5,
			cursor: "default",
		},
	}
	static defaultProps = {enabled: true};

	constructor(props) {
		super(props);
		autoBind(this);
	}

	render() {
		let {text, enabled, className, style, onClick, ...rest} = this.props;
		return (
			<div {...rest} className={classNames("VMenuItem", className, !enabled && "disabled")}
					style={E(VMenuItem.styles.root, !enabled && VMenuItem.styles.disabled, style)} onMouseDown={this.OnMouseDown}>
				{this.props.text}
			</div>
		);
	}

	OnMouseDown(e) {
		let {onClick} = this.props;
		e.stopPropagation();
		if (this.props.enabled) {
			if (onClick) onClick(e);
		} else {
			e.nativeEvent.ignore = true;
		}
	}
}