import {Component} from "react";
import {BaseComponent} from "./Utils/BaseComponent";
import {VMenu, VMenuUIProps} from "./VMenu";
import * as ReactDOM from "react-dom";
import {GetSelfAndParents, GetOffset, GetScroll, GetContentOffset} from "./Utils/General";
import {VMenuUI} from "./VMenu";
import {store} from "./Store";
import {runInAction} from "mobx";
import {E, Vector2} from "./Utils/FromJSVE";

declare var require;
var React = require("react");

//let setImmediate = window["setImmediate"] || window.setTimeout;

export function ShowVMenu(menuProps: Omit<VMenuUIProps, "menuID"> & Partial<Pick<VMenuUIProps, "menuID">>, children: React.ReactChild, menuID?: number) {
	const menuProps_final = E(menuProps, {menuID: menuProps.menuID ?? ++VMenu.lastID});
	VMenu.menuChildren[menuProps_final.menuID] = children; // store ui/children on static, since breaks in store
	//store.dispatch(new ACTOpenVMenuSet(uiProps_final));
	// wait a tiny bit, so OnGlobalMouseDown runs first
	setTimeout(()=> {
		runInAction("ShowVMenu", ()=>store.openMenuProps = menuProps_final);
	});
}

export class VMenuStub extends BaseComponent<
	{onBody?: boolean, for?: ()=>Component<any, any>, preOpen?: (e)=>boolean, preventDefault?: boolean, delayEventHandler?: boolean, uiProps?: VMenuUIProps},
	{localOpenUIProps?: VMenuUIProps}
> {
	static defaultProps = {onBody: true, preventDefault: true};

	constructor(props) {
		super(props);
		this.menuID = ++VMenu.lastID;
	}
	menuID: number;

	forDom: HTMLElement;
	ComponentDidMount() {
	    var {for: forFunc, delayEventHandler} = this.props;
	    this.forDom = forFunc ? ReactDOM.findDOMNode(forFunc()) : ReactDOM.findDOMNode(this).parentElement;
		
		//this.forDom.addEventListener("contextmenu", e=>this.OnContextMenu(e));
		this.forDom.addEventListener("contextmenu", e=>{
			if (delayEventHandler) {
				// wait a tiny bit, so user's onContextMenu can set "e.ignore = true;"
				(window["setImmediate"] || setTimeout)(()=>this.OnContextMenu(e), 0);
			} else {
				this.OnContextMenu(e);
			}
		});
		// early handler, so parent's hover isn't considered to be lost from mouse-down
		//this.forDom.addEventListener("mousedown", this.OnMouseDown);

		document.addEventListener("mousedown", this.OnGlobalMouseDown);

		//this.PostRender();
	}
	/*OnContextMenu(e) {
		//if (e.button != 2) return;
		//this.Open(new Vector2i(e.pageX, e.pageY));
		//e.preventDefault();
	    //e.stopPropagation();
		debugger;
		return false;
	}
	OnMouseDown(e) {
		if (e.button != 2) return;*/
	OnContextMenu = e=> {
		var pagePos = new Vector2(e.pageX, e.pageY);
		
		var {onBody, uiProps, preOpen, preventDefault, children} = this.props;
		//e.persist();
		if (e.handledByVMenu) return; // already handled by deeper menu-stub
		// if user's preOpen returns "false" for "do not continue", return true (pass event on without action)
		if (preOpen && preOpen(e) == false) return; //true;

		if (preventDefault) {
			e.preventDefault();
		}
		
		var posHoistElement = GetSelfAndParents(this.forDom).find(a=>a.style.position != "static");
		//var posFromPosHoistElement = pos.Minus(posHoistElement.position_Vector2i()).Plus(posHoistElement.contentOffset());
		var posInPosHoistElement = pagePos.Minus(GetOffset(posHoistElement))
			.Minus(GetContentOffset(posHoistElement, true)).Plus(GetScroll(posHoistElement));
		/*if (this.props.posOffset)
			posFromPosHoistElement = posFromPosHoistElement.Plus(this.props.posOffset);*/

		//this.setState({open: true, pos: posFromPosHoistElement});
		//let uiProps = {...this.props, pos: pagePos} as VMenuUIProps;
		let uiProps_final: VMenuUIProps = {
			...uiProps,
			pos: pagePos,
			menuID: this.menuID, // add menu id to ui-props (in case user wants to access from react-comp instance)
		};
		VMenu.menuChildren[this.menuID] = children; // store ui/children on static, since breaks in store
		if (onBody) {
			//store.dispatch(new ACTOpenVMenuSet(uiProps_final));
			// wait a tiny bit, so OnGlobalMouseDown runs first
			setTimeout(()=> {
				runInAction("VMenuStub.OnContextMenu", ()=>store.openMenuProps = uiProps_final);
			});
		} else {
			this.setState({localOpenUIProps: uiProps_final});
		}

		//e.preventDefault();
		e.handledByVMenu = true;
		return; //false;
	};
	OnGlobalMouseDown = e=> {
		if (e.ignore) return;
		let {onBody} = this.props;
		if (!onBody) {
			if (this.state.localOpenUIProps) {
				this.setState({localOpenUIProps: null});
			}
		}
	};

	ComponentWillUnmount() {
		this.forDom.removeEventListener("contextmenu", this.OnContextMenu);
		//this.forDom.removeEventListener("mousedown", this.OnMouseDown);
		document.removeEventListener("mousedown", this.OnGlobalMouseDown);
	}

	render() {
		let {localOpenUIProps} = this.state;
		// if opening locally (usually not the case)
		if (localOpenUIProps != null) {
			return <VMenuUI {...localOpenUIProps as any}/>;
		}
		return <div/>;
	}
}