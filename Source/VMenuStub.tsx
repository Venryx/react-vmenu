import {Component, PropsWithChildren} from "react";
import {BaseComponent} from "./Utils/BaseComponent.js";
import {VMenu, VMenuUIProps, VMenuUIProps_WithPosInfo} from "./VMenu.js";
import * as ReactDOM from "react-dom";
import {GetSelfAndParents, GetOffset, GetScroll, GetContentOffset, RunInAction} from "./Utils/General.js";
import {VMenuUI} from "./VMenu.js";
import {store} from "./Store.js";
import {runInAction} from "mobx";
import {E, Vector2} from "./Utils/FromJSVE.js";
import React from "react";
import {n, RequiredBy} from "./Utils/@Types.js";

//let setImmediate = window["setImmediate"] || window.setTimeout;

export function ShowVMenu(menuProps: RequiredBy<VMenuUIProps, "pos">, children: React.ReactNode) {
	const menuProps_final = E(menuProps, {menuID: menuProps.menuID ?? ++VMenu.lastID});
	VMenu.menuChildren[menuProps_final.menuID] = children; // store ui/children on static, since breaks in store
	//store.dispatch(new ACTOpenVMenuSet(uiProps_final));
	// wait a tiny bit, so OnGlobalMouseDown runs first
	setTimeout(()=> {
		RunInAction("ShowVMenu", ()=>store.openMenuProps = menuProps_final);
	});
}

export class VMenuStub extends BaseComponent<
	{
		onBody?: boolean, for?: ()=>HTMLElement,
		eventFilter: (e: MouseEvent)=>any, preOpen?: (e)=>boolean, preventDefault?: boolean, delayEventHandler?: boolean,
		uiProps?: VMenuUIProps
	} & PropsWithChildren,
	{localOpenUIProps?: VMenuUIProps|n}
> {
	//static defaultProps: Partial<React.ComponentProps<typeof VMenuStub>> = {
	static defaultProps: Partial<VMenuStub["props"]> = {
		onBody: true,
		eventFilter: e=>{
			// if event already handled by deeper menu-stub, ignore
			if (e["handledByVMenu"]) return false;
			// if click originated within an existing vmenu, don't trigger the creation of a new vmenu on top of it (if behavior unwanted, parent can override this eventFilter func)
			if (e.target instanceof Element && e.target.closest(".VMenu") != null) return false;
			return true;
		},
		preventDefault: true,
	};

	constructor(props) {
		super(props);
		this.menuID = ++VMenu.lastID;
	}
	menuID: number;

	forDom: HTMLElement;
	ComponentDidMount() {
		var {for: forFunc, delayEventHandler} = this.props;
		//this.forDom = forFunc ? ReactDOM.findDOMNode(forFunc()) : ReactDOM.findDOMNode(this).parentElement;
		this.forDom = forFunc ? forFunc() : this.root!.parentElement as HTMLElement;
	
		//this.forDom.addEventListener("contextmenu", e=>this.OnContextMenu(e));
		this.forDom.addEventListener("contextmenu", e=>{
			if (delayEventHandler) {
				// wait a tiny bit, so user's onContextMenu can set "e.ignore = true;"
				(window["setImmediate"] as any || setTimeout)(()=>this.OnContextMenu(e), 0);
			} else {
				this.OnContextMenu(e);
			}
		});
		// early handler, so parent's hover isn't considered to be lost from mouse-down
		//this.forDom.addEventListener("mousedown", this.OnMouseDown);

		document.addEventListener("mousedown", this.OnGlobalMouseDown);

		//this.PostRender();
	}
	OnContextMenu = e=> {
		var pagePos = new Vector2(e.pageX, e.pageY);
		
		var {onBody, uiProps, eventFilter, preOpen, preventDefault, children} = this.props;
		//e.persist();
		//if (e.handledByVMenu) return; // already handled by deeper menu-stub
		if (eventFilter && eventFilter(e) == false) return;
		// if user's preOpen returns "false" for "do not continue", return true (pass event on without action)
		if (preOpen && preOpen(e) == false) return; //true;

		if (preventDefault) {
			e.preventDefault();
		}
		
		/*var posHoistElement = GetSelfAndParents(this.forDom).find(a=>a.style.position != "static");
		//var posFromPosHoistElement = pos.Minus(posHoistElement.position_Vector2i()).Plus(posHoistElement.contentOffset());
		var posInPosHoistElement = pagePos.Minus(GetOffset(posHoistElement)).Minus(GetContentOffset(posHoistElement, true)).Plus(GetScroll(posHoistElement));
		/*if (this.props.posOffset)
			posFromPosHoistElement = posFromPosHoistElement.Plus(this.props.posOffset);*/

		//this.setState({open: true, pos: posFromPosHoistElement});
		//let uiProps = {...this.props, pos: pagePos} as VMenuUIProps;
		let uiProps_final: VMenuUIProps_WithPosInfo = {
			...uiProps,
			pos: pagePos,
			menuID: this.menuID, // add menu id to ui-props (in case user wants to access from react-comp instance)
		};
		VMenu.menuChildren[this.menuID] = children; // store ui/children on static, since breaks in store
		if (onBody) {
			//store.dispatch(new ACTOpenVMenuSet(uiProps_final));
			// wait a tiny bit, so OnGlobalMouseDown runs first
			setTimeout(()=> {
				RunInAction("VMenuStub.OnContextMenu", ()=>store.openMenuProps = uiProps_final);
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

	root: HTMLDivElement|n;
	render() {
		let {localOpenUIProps} = this.state;
		// if opening locally (usually not the case)
		if (localOpenUIProps != null) {
			return <VMenuUI {...localOpenUIProps as any}/>;
		}
		return <div ref={a=>void(this.root = a)}/>;
	}
}