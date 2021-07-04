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
import React from "react";
import classNames from "classnames";
import { runInAction } from "mobx";
import { store } from "./Store.js";
import { BaseComponent } from "./Utils/BaseComponent.js";
import { E } from "./Utils/FromJSVE.js";
import { AddGlobalStyle } from "./Utils/General.js";
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
}
VMenu.lastID = -1;
VMenu.menuChildren = {};
/*export interface VMenuUIProps extends HTMLProps_Fixed<"div"> {
    pos: Vector2i, style?, menuID: number;
}*/
export class VMenuUI extends BaseComponent {
    render() {
        var _a = this.props, { pos, className, style, menuID, children, title } = _a, rest = __rest(_a, ["pos", "className", "style", "menuID", "children", "title"]);
        if (children == null)
            return React.createElement("div", { className: "VMenu", style: E({ display: "none" }, style) });
        return (React.createElement("div", Object.assign({}, rest, { title: title !== null && title !== void 0 ? title : undefined, className: classNames("VMenu", className), style: E(styles.root, { left: pos.x, top: pos.y }, style) }), children));
    }
}
// add this menu-closing behavior globally (and persistently), since user may display vmenu manually with ShowVMenu()
let globalListener_onMouseDown;
function EnsureGlobalListenersAdded() {
    if (globalListener_onMouseDown != null)
        return;
    globalListener_onMouseDown = e => {
        if (e["ignore"])
            return;
        if (store.openMenuProps) {
            runInAction("VMenu.globalListener_onMouseDown", () => store.openMenuProps = null);
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
export class VMenuItem extends BaseComponent {
    constructor(props) {
        super(props);
        this.OnMouseDown = e => {
            let { onClick } = this.props;
            e.stopPropagation();
            if (this.props.enabled) {
                if (onClick)
                    onClick(e);
            }
            else {
                e.nativeEvent.ignore = true;
            }
        };
        EnsureGlobalListenersAdded();
    }
    render() {
        let _a = this.props, { text, enabled, className, style, onClick, title } = _a, rest = __rest(_a, ["text", "enabled", "className", "style", "onClick", "title"]);
        return (React.createElement("div", Object.assign({}, rest, { title: title !== null && title !== void 0 ? title : undefined, className: classNames("VMenuItem", className, !enabled && "disabled"), style: E(VMenuItem.styles.root, !enabled && VMenuItem.styles.disabled, style), onMouseDown: this.OnMouseDown }), this.props.text));
    }
}
VMenuItem.styles = {
    root: {
        zIndex: 21, padding: "2 5", backgroundColor: "rgb(35,35,35)", cursor: "pointer",
        //":hover": {backgroundColor: "rgb(25,25,25)"}
    },
    disabled: {
        opacity: .5,
        cursor: "default",
    },
};
VMenuItem.defaultProps = { enabled: true };
//# sourceMappingURL=VMenu.js.map