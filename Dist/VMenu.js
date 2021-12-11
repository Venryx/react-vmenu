var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
//import Radium from "radium";
import React, { useEffect, useMemo } from "react";
import classNames from "classnames";
import { BaseComponent } from "./Utils/BaseComponent.js";
import { E } from "./Utils/FromJSVE.js";
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
export class VMenu {
}
Object.defineProperty(VMenu, "lastID", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -1
});
Object.defineProperty(VMenu, "menuChildren", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {}
});
// store by menu-id of the component that added the listener (providing a way to consistently order the listeners, during execution)
Object.defineProperty(VMenu, "vmenuOpenListeners", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: new Map()
});
/*export interface VMenuUIProps extends HTMLProps_Fixed<"div"> {
    pos: Vector2i, style?, menuID: number;
}*/
export class VMenuUI extends BaseComponent {
    render() {
        var _a = this.props, { pos, className, onOtherVMenuOpen, style, menuID, children, title } = _a, rest = __rest(_a, ["pos", "className", "onOtherVMenuOpen", "style", "menuID", "children", "title"]);
        const menuID_final = useMemo(() => menuID !== null && menuID !== void 0 ? menuID : ++VMenu.lastID, [menuID]);
        // if this is a fresh mounting/render for this menu-id, execute all "on vmenu-open" listeners
        useEffect(() => {
            const listeners = [...VMenu.vmenuOpenListeners.entries()];
            listeners.sort((a, b) => a[0] - b[0]); // sort each listener by its key (ie. its source's menu-id)
            for (const [key, listener] of listeners) {
                listener(menuID_final);
            }
        }, [menuID_final]);
        // add our own "on vmenu-open" listener to the list (if specified)
        if (onOtherVMenuOpen) {
            useEffect(() => {
                VMenu.vmenuOpenListeners.set(menuID_final, onOtherVMenuOpen);
                return () => void VMenu.vmenuOpenListeners.delete(menuID_final);
            }, [menuID_final, onOtherVMenuOpen]);
        }
        if (children == null)
            return React.createElement("div", { className: "VMenu", style: E({ display: "none" }, style) });
        return (React.createElement("div", Object.assign({}, rest, { title: title !== null && title !== void 0 ? title : undefined, className: classNames("VMenu", className), style: E(styles.root, pos && { left: pos.x, top: pos.y }, style) }), children));
    }
}
//# sourceMappingURL=VMenu.js.map