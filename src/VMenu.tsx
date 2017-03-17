import Radium from "radium";
import * as React from "react";
import {Component} from "react";
import {E, GetContentOffset, GetOffset, GetParents, GetScroll, GetSelfAndParents, Vector2i} from "./Helpers/General";
import {BaseComponent} from "./Helpers/BaseComponent";
import * as ReactDOM from "react-dom";
import autoBind from "react-autobind";

let styles = {
	root: {
		position: "absolute",
		//position: "fixed",
		zIndex: 20, backgroundColor: "rgb(35,35,35)", border: "1px outset #555",
		fontStyle: "initial", whiteSpace: "nowrap",
		//":hover": {backgroundColor: "rgb(25,25,25)"},
	}
};

@Radium
export default class VMenu extends BaseComponent
		<{contextMenu?, for?: ()=>React.Component<any, any>, onBody?: boolean, onOpen?: (posInPosHoistElement: Vector2i, pagePos: Vector2i)=>void, onClose?: ()=>void},
		{open?: boolean, pos?: Vector2i}> {
	static onBodyMenus = [];
	static justOpened: VMenu = null;
	// close all on-body menus
	static CloseAll() {
	    for (let menu of VMenu.onBodyMenus)
			menu.Close();
		VMenu.onBodyMenus = [];
	}

	constructor(props) {
		super(props);
		autoBind(this);
	}

	render() {
		this.PreRender();

		var {open, pos} = this.state;

	    return open && this.props.children
			? <div className="VMenu" style={[styles.root, {left: pos.x, top: pos.y}]}>
				{this.props.children}
			</div>
			: <div className="VMenu" style={{display: "none"}}/>;
	}

	forDom: HTMLElement;
	Open(pagePos: Vector2i) {
		var {onOpen} = this.props;
		
		var posHoistElement = GetSelfAndParents(this.forDom).find(a=>a.style.position != "static");
		//var posFromPosHoistElement = pos.Minus(posHoistElement.position_Vector2i()).Plus(posHoistElement.contentOffset());
	    var posInPosHoistElement = pagePos.Minus(GetOffset(posHoistElement))
			.Minus(GetContentOffset(posHoistElement, true)).Plus(GetScroll(posHoistElement));
	    /*if (this.props.posOffset)
	        posFromPosHoistElement = posFromPosHoistElement.Plus(this.props.posOffset);*/

	    //this.setState({open: true, pos: posFromPosHoistElement});
		this.setState({open: true, pos: pagePos});
	    if (onOpen) onOpen(posInPosHoistElement, pagePos);
	}
	Close() {
	    let {onClose} = this.props;
	    this.setState({open: false});
	    if (onClose) onClose();
	}

	ComponentDidMount() {
		if (!this.props.contextMenu) return;

	    var {for: forFunc} = this.props;
	    this.forDom = forFunc ? ReactDOM.findDOMNode(forFunc()) : ReactDOM.findDOMNode(this).parentElement;
		
		this.forDom.addEventListener("contextmenu", this.OnContextMenu);
		// early handler, so parent's hover isn't considered to be lost from mouse-down
		this.forDom.addEventListener("mousedown", this.OnMouseDown);

	    document.addEventListener("mousedown", this.OnGlobalMouseDown);

		this.PostRender();
	}
	OnContextMenu(e) {
		//if (e.button != 2) return;
		//this.Open(new Vector2i(e.pageX, e.pageY));
		//e.preventDefault();
	    //e.stopPropagation();
		return false;
	}
	OnMouseDown(e) {
		if (e.button != 2) return;
	    if (VMenu.justOpened) return; // if higher-z-index control opened menu, don't open another one

		this.Open(new Vector2i(e.pageX, e.pageY));

	    VMenu.justOpened = this;
	    setTimeout(()=>VMenu.justOpened = null);
	}
	OnGlobalMouseDown(e) {
	    //if (s.justOpened == this) { s.justOpened = null; return; }
		if (VMenu.justOpened == this) return;
		if (this.state.open)
			this.Close();
	}

	PreRender() {
		this.PopBackIn();
	}
	PostRender() {
		if (this.props.onBody)
			this.PopOut();
	}
	ComponentWillUnmount() {
		var {contextMenu, onBody} = this.props;
	    if (!contextMenu) return;
		
	    this.forDom.removeEventListener("contextmenu", this.OnContextMenu);
		this.forDom.removeEventListener("mousedown", this.OnMouseDown);
	    document.removeEventListener("mousedown", this.OnGlobalMouseDown);

		//this.domCopy[0].remove();
		// add it back, so react destroys the dom itself (fixes that error sometimes happens with the simple-remove approach above)
		this.PopBackIn();
	}

	dom: HTMLElement = null;
	domParent: HTMLElement = null;
	poppedOut = false;
	PopOut() {
		//if (!this.Mounted) return;
		if (this.poppedOut) return;
		
		this.dom = ReactDOM.findDOMNode(this);
		this.domParent = this.dom.parentElement;
		this.dom.addEventListener("contextmenu", e=>e.preventDefault()); // cancel context-menu-opening events on menu itself
		document.body.appendChild(this.dom);

		this.poppedOut = true;
		VMenu.onBodyMenus.push(this);
	}
	PopBackIn() {
		if (!this.poppedOut) return;
		//this.dom.removeEventListener("contextmenu");
		this.domParent.appendChild(this.dom);

		this.poppedOut = false;
		VMenu.onBodyMenus.splice(VMenu.onBodyMenus.indexOf(this), 1);
	}
}

@Radium
export class VMenuItem extends BaseComponent<{text: string, style?, onClick: (e)=>void}, {}> {
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
		let {text, style} = this.props;
	    return (
			<div style={E(VMenuItem.styles.root, style)} onMouseDown={this.OnMouseDown}>
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