//import Radium from "radium";
import React from "react";
import classNames from "classnames";
import {runInAction} from "mobx";
import {MouseEventHandler} from "react";
import {store} from "./Store.js";
import {BaseComponent} from "./Utils/BaseComponent.js";
import {Vector2, E} from "./Utils/FromJSVE.js";
import {AddGlobalStyle, RunInAction} from "./Utils/General.js";
import {FixHTMLProps, HTMLProps_Fixed} from "./Utils/@Types.js";

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
export type VMenuUIProps = {pos: Vector2, style?, menuID: number} & HTMLProps_Fixed<"div">;
/*export interface VMenuUIProps extends HTMLProps_Fixed<"div"> {
	pos: Vector2i, style?, menuID: number;
}*/
export class VMenuUI extends BaseComponent<VMenuUIProps, {}> {
	render() {
		var {pos, className, style, menuID, children, title, ...rest} = this.props;
		if (children == null) return <div className="VMenu" style={E({display: "none"}, style)}/>;

	    return (
			<div {...rest} title={title ?? undefined} className={classNames("VMenu", className)} style={E(styles.root, {left: pos.x, top: pos.y}, style)}>
				{children}
			</div>
		);
	}
}

// add this menu-closing behavior globally (and persistently), since user may display vmenu manually with ShowVMenu()
let globalListener_onMouseDown: (event: MouseEvent)=>any;
function EnsureGlobalListenersAdded() {
	if (globalListener_onMouseDown != null) return;
	globalListener_onMouseDown = e=> {
		if (e["ignore"]) return;
		if (store.openMenuProps) {
			RunInAction("VMenu.globalListener_onMouseDown", ()=>store.openMenuProps = null);
		}
	};
	document.addEventListener("mousedown", globalListener_onMouseDown);
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

export class VMenuItem extends BaseComponent<{text: string, enabled?: boolean, style?} & HTMLProps_Fixed<"div">, {}> {
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
		EnsureGlobalListenersAdded();
	}
	
	render() {
		let {text, enabled, className, style, onClick, title, ...rest} = this.props;
		return (
			<div {...rest} title={title ?? undefined} className={classNames("VMenuItem", className, !enabled && "disabled")}
					style={E(VMenuItem.styles.root, !enabled && VMenuItem.styles.disabled, style)} onMouseDown={this.OnMouseDown}>
				{this.props.text}
			</div>
		);
	}

	OnMouseDown = e=> {
		let {onClick} = this.props;
		e.stopPropagation();
		if (this.props.enabled) {
			RunInAction("VMenuItem.onMouseDown", ()=>store.openMenuProps = null);
			if (onClick) onClick(e);
		} else {
			e.nativeEvent.ignore = true;
		}
	};
}