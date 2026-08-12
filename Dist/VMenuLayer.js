var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { Component } from "react";
import { VMenu } from "./VMenu.js";
import { VMenuUI } from "./VMenu.js";
import { observer } from "mobx-react";
import { store } from "./Store.js";
import React from "react";
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
let VMenuLayer = (() => {
    let _classDecorators = [observer];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Component;
    var VMenuLayer = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            VMenuLayer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        render() {
            const openMenuProps = store.openMenuProps;
            if (openMenuProps == null)
                return React.createElement("div", null);
            //let {overlayStyle, onOK, onCancel} = openMenuProps;
            let children = VMenu.menuChildren[openMenuProps.menuID];
            return (React.createElement("div", null,
                React.createElement(VMenuUI, { ...openMenuProps, children: children })));
        }
    };
    return VMenuLayer = _classThis;
})();
export { VMenuLayer };
//# sourceMappingURL=VMenuLayer.js.map