import Radium from "radium";
import * as React from "react";
import {Component} from "react";
import {E, GetContentOffset, GetOffset, GetParents, GetScroll, GetSelfAndParents, Vector2i} from "./Helpers/General";
import {BaseComponent} from "./Helpers/BaseComponent";
import * as ReactDOM from "react-dom";
import autoBind from "react-autobind";
import VMenuLayer, {VMenuState, VMenuReducer} from "./VMenuLayer";
import {ACTOpenVMenuSet, voidy} from "./VMenuLayer";
import VMenuStub from "./VMenuStub";

export {VMenuStub, ACTOpenVMenuSet, VMenuState, VMenuReducer, VMenuLayer};

let styles = {
	root: {
		position: "absolute",
		//position: "fixed",
		zIndex: 20, backgroundColor: "rgb(35,35,35)", border: "1px outset #555",
		fontStyle: "initial", whiteSpace: "nowrap",
		//":hover": {backgroundColor: "rgb(25,25,25)"},
	}
};

export default class VMenu {
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
		var {pos, style, menuID, children, ...rest} = this.props;
		if (children == null) return <div className="VMenu" style={E({display: "none"}, style)}/>;

	    return (
			<div {...rest} className="VMenu" style={E(styles.root, {left: pos.x, top: pos.y}, style)}>
				{children}
			</div>
		);
	}
}

/*export interface VMenuItemProps extends React.HTMLProps<HTMLDivElement> {
	text: string, style?;
}*/
@Radium
export class VMenuItem extends BaseComponent<{text: string, style?} & React.HTMLProps<HTMLDivElement>, {}> {
//export class VMenuItem extends BaseComponent<VMenuItemProps, {}> {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	static styles = {
	    root: {
			zIndex: 21, padding: "2 5", backgroundColor: "rgb(35,35,35)", cursor: "pointer",
	        ":hover": {backgroundColor: "rgb(25,25,25)"}
	    }
	}

	render() {
		let {text, style, ...rest} = this.props;
	    return (
			<div {...rest} style={E(VMenuItem.styles.root, style)} onMouseDown={this.OnMouseDown}>
				{this.props.text}
			</div>
		);
	}

	OnMouseDown(e) {
		let {onClick} = this.props;
	    e.stopPropagation();
	    onClick(e);
	}
}