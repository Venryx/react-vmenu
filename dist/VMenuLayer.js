var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "react";
import { Action } from "./Utils/Action";
import { VMenu } from "./VMenu";
import { VMenuUI } from "./VMenu";
import { observer } from "mobx-react";
var React = require("react");
export class ACTOpenVMenuSet extends Action {
}
/*export class VMenuController {
    constructor(options: VMenuOptions, menuID: number) {
        this.options = options;
        this.menuID = menuID;
    }
    options: VMenuOptions;
    menuID: number;

    UpdateUI() {
        store.dispatch(new ACTVMenuUpdate({menuID: this.menuID}));
    }
    Close() {
        store.dispatch(new ACTOpenVMenuSet(null));
    }
}

let lastMenuID = -1;
let menuUIs = {} as {[key: number]: ()=>JSX.Element};
export function ShowMenu_Base(o: VMenuOptions) {
    o.menuID = ++lastMenuID;

    // store ui in extra storage, kuz it gets ruined when put in Redux store
    menuUIs[o.menuID] = o.ui;
    delete o.ui;

    store.dispatch(new ACTOpenVMenuSet(o));

    return new VMenuController(o, o.menuID);
}
export function ShowMenu(o: VMenuOptions) {
//export function ShowMenu(options: {[P in keyof VMenuOptions]?: VMenuOptions[P];}) { // do it this way, so the options are shown
    o = Object.assign(new VMenuOptions(), o);

    var controller = ShowMenu_Base(o);
    return controller;
}*/
let styles = {
    overlay: { position: "fixed", left: 0, right: 0, top: 0, bottom: 0, backgroundColor: "rgba(0,0,0,.5)", zIndex: 1 },
    container: {
        position: "absolute", overflow: "auto",
        //top: "40px", left: "40px", right: "40px", bottom: "40px",
        left: "50%", right: "initial", top: "50%", bottom: "initial", transform: "translate(-50%, -50%)",
        background: "rgba(0,0,0,.75)", border: "1px solid #555", WebkitOverflowScrolling: "touch", borderRadius: "4px", outline: "none", padding: "20px"
    }
};
let VMenuLayer = class VMenuLayer extends Component {
    render() {
        let { openMenuProps } = this.props;
        if (openMenuProps == null)
            return React.createElement("div", null);
        //let {overlayStyle, onOK, onCancel} = openMenuProps;
        let children = VMenu.menuChildren[openMenuProps.menuID];
        return (React.createElement("div", null,
            React.createElement(VMenuUI, Object.assign({}, openMenuProps, { children: children }))));
    }
};
VMenuLayer = __decorate([
    observer
], VMenuLayer);
export { VMenuLayer };
//# sourceMappingURL=VMenuLayer.js.map