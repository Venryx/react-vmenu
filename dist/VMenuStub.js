import { BaseComponent } from "./Utils/BaseComponent";
import { VMenu } from "./VMenu";
import * as ReactDOM from "react-dom";
import { Vector2i, GetSelfAndParents, GetOffset, GetScroll, GetContentOffset } from "./Utils/General";
import { VMenuUI } from "./VMenu";
import { store } from "./Store";
import { runInAction } from "mobx";
var React = require("react");
//let setImmediate = window["setImmediate"] || window.setTimeout;
export class VMenuStub extends BaseComponent {
    constructor(props) {
        super(props);
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
        this.OnContextMenu = e => {
            var pagePos = new Vector2i(e.pageX, e.pageY);
            var { onBody, uiProps, preOpen, preventDefault, children } = this.props;
            //e.persist();
            if (e.handledByVMenu)
                return; // already handled by deeper menu-stub
            // if user's preOpen returns "false" for "do not continue", return true (pass event on without action)
            if (preOpen && preOpen(e) == false)
                return; //true;
            if (preventDefault) {
                e.preventDefault();
            }
            var posHoistElement = GetSelfAndParents(this.forDom).find(a => a.style.position != "static");
            //var posFromPosHoistElement = pos.Minus(posHoistElement.position_Vector2i()).Plus(posHoistElement.contentOffset());
            var posInPosHoistElement = pagePos.Minus(GetOffset(posHoistElement))
                .Minus(GetContentOffset(posHoistElement, true)).Plus(GetScroll(posHoistElement));
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
                    runInAction("VMenuStub.OnContextMenu", () => store.openMenuProps = uiProps_final);
                });
            }
            else {
                this.setState({ localOpenUIProps: uiProps_final });
            }
            //e.preventDefault();
            e.handledByVMenu = true;
            return; //false;
        };
        this.OnGlobalMouseDown = e => {
            if (e.ignore)
                return;
            let { onBody } = this.props;
            if (onBody) {
                if (store.openMenuProps) {
                    runInAction("VMenuStub.OnGlobalMouseDown", () => store.openMenuProps = null);
                }
            }
            else {
                if (this.state.localOpenUIProps) {
                    this.setState({ localOpenUIProps: null });
                }
            }
        };
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
VMenuStub.defaultProps = { onBody: true, preventDefault: true };
//# sourceMappingURL=VMenuStub.js.map