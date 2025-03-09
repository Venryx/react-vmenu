var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BaseComponent_1;
import { Component } from "react";
let BaseComponent = BaseComponent_1 = class BaseComponent extends Component {
    constructor(props) {
        super(props);
        //autoBind(this);
        this.state = this.state || {};
        // if using PreRender, wrap render func
        if (this.PreRender != BaseComponent_1.prototype.render) {
            let oldRender = this.render;
            this.render = function () {
                this.PreRender();
                return oldRender.apply(this, arguments);
            };
        }
    }
    ComponentWillMount() { }
    ;
    ComponentWillMountOrReceiveProps(props, forMount) { }
    ;
    UNSAFE_componentWillMount() {
        this.ComponentWillMount();
        this.ComponentWillMountOrReceiveProps(this.props, true);
    }
    ComponentDidMount(...args) { }
    ;
    ComponentDidMountOrUpdate(forMount) { }
    ;
    mounted = false;
    componentDidMount(...args) {
        this.ComponentDidMount(...args);
        this.ComponentDidMountOrUpdate(true);
        this.mounted = true;
        if (this.PostRender != BaseComponent_1.prototype.PostRender) {
            /*setTimeout(()=>window.requestAnimationFrame(()=> {
                if (!this.mounted) return;
                this.PostRender(true);
            }));*/
            this.PostRender(true);
        }
    }
    ComponentWillUnmount() { }
    ;
    componentWillUnmount() {
        this.ComponentWillUnmount();
        this.mounted = false;
    }
    ComponentWillReceiveProps(newProps) { }
    ;
    UNSAFE_componentWillReceiveProps(newProps) {
        this.ComponentWillReceiveProps(newProps);
        this.ComponentWillMountOrReceiveProps(newProps, false);
    }
    ComponentDidUpdate(...args) { }
    ;
    componentDidUpdate(...args) {
        this.ComponentDidUpdate(...args);
        this.ComponentDidMountOrUpdate(false);
        if (this.PostRender != BaseComponent_1.prototype.PostRender) {
            /*setTimeout(()=>window.requestAnimationFrame(()=> {
                if (!this.mounted) return;
                this.PostRender(false);
            }));*/
            this.PostRender(false);
        }
    }
    PreRender() { }
    ;
    PostRender(initialMount) { }
    ;
};
__decorate([
    Sealed
], BaseComponent.prototype, "UNSAFE_componentWillMount", null);
__decorate([
    Sealed
], BaseComponent.prototype, "componentDidMount", null);
__decorate([
    Sealed
], BaseComponent.prototype, "componentWillUnmount", null);
__decorate([
    Sealed
], BaseComponent.prototype, "UNSAFE_componentWillReceiveProps", null);
__decorate([
    Sealed
], BaseComponent.prototype, "componentDidUpdate", null);
BaseComponent = BaseComponent_1 = __decorate([
    HasSealedProps
], BaseComponent);
export { BaseComponent };
function HasSealedProps(target) {
    let oldConstructor = target.constructor;
    target.constructor = function () {
        for (let key in target["prototype"]) {
            let method = target["prototype"][key];
            if (method.sealed) {
                console.assert(this[key] == method, `Cannot override sealed method "${key}".`);
            }
        }
        return oldConstructor.apply(this, arguments);
    };
}
function Sealed(target, key) {
    target[key].sealed = true;
}
//# sourceMappingURL=BaseComponent.js.map