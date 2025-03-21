//import Radium from "radium";
import React, {useEffect, useMemo} from "react";
import classNames from "classnames";
import {runInAction} from "mobx";
import {MouseEventHandler} from "react";
import {store} from "./Store.js";
import {BaseComponent} from "./Utils/BaseComponent.js";
import {Vector2, E} from "./Utils/FromJSVE.js";
import {AddGlobalStyle, RunInAction} from "./Utils/General.js";
import {FixHTMLProps, HTMLProps_Fixed, RequiredBy} from "./Utils/@Types.js";

export const VMenu_backgroundColor = "rgb(35,35,35)";
export const VMenu_borderStyle = "1px outset #555";
let styles = {
	root: {
		position: "absolute",
		//position: "fixed",
		zIndex: 20, backgroundColor: VMenu_backgroundColor, border: VMenu_borderStyle,
		fontStyle: "initial", whiteSpace: "nowrap",
		//":hover": {backgroundColor: "rgb(25,25,25)"},
	},
};

export type VMenuOpenListener = (menuID: number)=>any;
export class VMenu {
	static lastID = -1;
	static menuChildren = {};
	// store by menu-id of the component that added the listener (providing a way to consistently order the listeners, during execution)
	static vmenuOpenListeners = new Map<number, VMenuOpenListener>();
}

//onOpen?: (posInPosHoistElement: Vector2i, pagePos: Vector2i)=>void, onClose?: ()=>void, onOK?: ()=>boolean | voidy, onCancel?: ()=>boolean | voidy
export type VMenuUIProps = {
	pos?: Vector2, menuID?: number, // generally set by VMenuStub
	/** This can be useful if you're rendering a VMenuUI manually (with a manual open<>close state/variable), and want an easy way to know when to reset that state to false/closed, on another vmenu being opened. */
	onOtherVMenuOpen?: VMenuOpenListener,
	style?,
} & HTMLProps_Fixed<"div">;
export type VMenuUIProps_WithPosInfo = RequiredBy<VMenuUIProps, "pos" | "menuID">;

/*export interface VMenuUIProps extends HTMLProps_Fixed<"div"> {
	pos: Vector2i, style?, menuID: number;
}*/
export const VMenuUI = ((props: VMenuUIProps)=>{
	var {pos, className, onOtherVMenuOpen, style, menuID, children, title, ...rest} = props;
	const menuID_final = useMemo(()=>menuID ?? ++VMenu.lastID, [menuID]);

	// if this is a fresh mounting/render for this menu-id, execute all "on vmenu-open" listeners
	useEffect(()=>{
		const listeners = [...VMenu.vmenuOpenListeners.entries()];
		listeners.sort((a, b)=>a[0] - b[0]); // sort each listener by its key (ie. its source's menu-id)
		for (const [key, listener] of listeners) {
			listener(menuID_final);
		}
	}, [menuID_final]);

	// add our own "on vmenu-open" listener to the list (if specified)
	if (onOtherVMenuOpen) {
		useEffect(()=>{
			VMenu.vmenuOpenListeners.set(menuID_final, onOtherVMenuOpen!);
			return ()=>void VMenu.vmenuOpenListeners.delete(menuID_final);
		}, [menuID_final, onOtherVMenuOpen]);
	}
	
	if (children == null) return <div className="VMenu" style={E({display: "none"}, style)}/>;
	return (
		<div {...rest} title={title ?? undefined} className={classNames("VMenu", className)}
			style={E(
				styles.root,
				pos && {left: pos.x, top: pos.y},
				style,
			)}
		>
			{children}
		</div>
	);
});