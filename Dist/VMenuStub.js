import { BaseComponent } from "./Utils/BaseComponent.js";
import { VMenu } from "./VMenu.js";
import * as ReactDOM from "react-dom";
import { RunInAction } from "./Utils/General.js";
import { VMenuUI } from "./VMenu.js";
import { store } from "./Store.js";
import { E, Vector2 } from "./Utils/FromJSVE.js";
import React from "react";
//let setImmediate = window["setImmediate"] || window.setTimeout;
export function ShowVMenu(menuProps, children) {
    var _a;
    const menuProps_final = E(menuProps, { menuID: (_a = menuProps.menuID) !== null && _a !== void 0 ? _a : ++VMenu.lastID });
    VMenu.menuChildren[menuProps_final.menuID] = children; // store ui/children on static, since breaks in store
    //store.dispatch(new ACTOpenVMenuSet(uiProps_final));
    // wait a tiny bit, so OnGlobalMouseDown runs first
    setTimeout(() => {
        RunInAction("ShowVMenu", () => store.openMenuProps = menuProps_final);
    });
}
export class VMenuStub extends BaseComponent {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "menuID", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "forDom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "OnContextMenu", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: e => {
                var pagePos = new Vector2(e.pageX, e.pageY);
                var { onBody, uiProps, eventFilter, preOpen, preventDefault, children } = this.props;
                //e.persist();
                //if (e.handledByVMenu) return; // already handled by deeper menu-stub
                if (eventFilter && eventFilter(e) == false)
                    return;
                // if user's preOpen returns "false" for "do not continue", return true (pass event on without action)
                if (preOpen && preOpen(e) == false)
                    return; //true;
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
                let uiProps_final = Object.assign(Object.assign({}, uiProps), { pos: pagePos, menuID: this.menuID });
                VMenu.menuChildren[this.menuID] = children; // store ui/children on static, since breaks in store
                if (onBody) {
                    //store.dispatch(new ACTOpenVMenuSet(uiProps_final));
                    // wait a tiny bit, so OnGlobalMouseDown runs first
                    setTimeout(() => {
                        RunInAction("VMenuStub.OnContextMenu", () => store.openMenuProps = uiProps_final);
                    });
                }
                else {
                    this.setState({ localOpenUIProps: uiProps_final });
                }
                //e.preventDefault();
                e.handledByVMenu = true;
                return; //false;
            }
        });
        Object.defineProperty(this, "OnGlobalMouseDown", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: e => {
                if (e.ignore)
                    return;
                let { onBody } = this.props;
                if (!onBody) {
                    if (this.state.localOpenUIProps) {
                        this.setState({ localOpenUIProps: null });
                    }
                }
            }
        });
        this.menuID = ++VMenu.lastID;
    }
    ComponentDidMount() {
        var { for: forFunc, delayEventHandler } = this.props;
        this.forDom = forFunc ? ReactDOM.findDOMNode(forFunc()) : ReactDOM.findDOMNode(this).parentElement;
        //this.forDom.addEventListener("contextmenu", e=>this.OnContextMenu(e));
        this.forDom.addEventListener("contextmenu", e => {
            if (delayEventHandler) {
                // wait a tiny bit, so user's onContextMenu can set "e.ignore = true;"
                (window["setImmediate"] || setTimeout)(() => this.OnContextMenu(e), 0);
            }
            else {
                this.OnContextMenu(e);
            }
        });
        // early handler, so parent's hover isn't considered to be lost from mouse-down
        //this.forDom.addEventListener("mousedown", this.OnMouseDown);
        document.addEventListener("mousedown", this.OnGlobalMouseDown);
        //this.PostRender();
    }
    ComponentWillUnmount() {
        this.forDom.removeEventListener("contextmenu", this.OnContextMenu);
        //this.forDom.removeEventListener("mousedown", this.OnMouseDown);
        document.removeEventListener("mousedown", this.OnGlobalMouseDown);
    }
    render() {
        let { localOpenUIProps } = this.state;
        // if opening locally (usually not the case)
        if (localOpenUIProps != null) {
            return React.createElement(VMenuUI, Object.assign({}, localOpenUIProps));
        }
        return React.createElement("div", null);
    }
}
//static defaultProps: Partial<React.ComponentProps<typeof VMenuStub>> = {
Object.defineProperty(VMenuStub, "defaultProps", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        onBody: true,
        eventFilter: e => {
            // if event already handled by deeper menu-stub, ignore
            if (e["handledByVMenu"])
                return false;
            // if click originated within an existing vmenu, don't trigger the creation of a new vmenu on top of it (if behavior unwanted, parent can override this eventFilter func)
            if (e.target instanceof Element && e.target.closest(".VMenu") != null)
                return false;
            return true;
        },
        preventDefault: true,
    }
});
//# sourceMappingURL=VMenuStub.js.map