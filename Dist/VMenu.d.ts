import React from "react";
import { Vector2 } from "./Utils/FromJSVE.js";
import { HTMLProps_Fixed, RequiredBy } from "./Utils/@Types.js";
export declare const VMenu_backgroundColor = "rgb(35,35,35)";
export declare const VMenu_borderStyle = "1px outset #555";
export type VMenuOpenListener = (menuID: number) => any;
export declare class VMenu {
    static lastID: number;
    static menuChildren: {};
    static vmenuOpenListeners: Map<number, VMenuOpenListener>;
}
export type VMenuUIProps = {
    pos?: Vector2;
    menuID?: number;
    /** This can be useful if you're rendering a VMenuUI manually (with a manual open<>close state/variable), and want an easy way to know when to reset that state to false/closed, on another vmenu being opened. */
    onOtherVMenuOpen?: VMenuOpenListener;
    style?: any;
} & HTMLProps_Fixed<"div">;
export type VMenuUIProps_WithPosInfo = RequiredBy<VMenuUIProps, "pos" | "menuID">;
export declare const VMenuUI: (props: VMenuUIProps) => React.JSX.Element;
