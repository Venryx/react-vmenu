var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
import { Component } from "react";
let BaseComponent = (() => {
    let _classDecorators = [HasSealedProps];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Component;
    let _instanceExtraInitializers = [];
    let _UNSAFE_componentWillMount_decorators;
    let _componentDidMount_decorators;
    let _componentWillUnmount_decorators;
    let _UNSAFE_componentWillReceiveProps_decorators;
    let _componentDidUpdate_decorators;
    var BaseComponent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _UNSAFE_componentWillMount_decorators = [Sealed];
            _componentDidMount_decorators = [Sealed];
            _componentWillUnmount_decorators = [Sealed];
            _UNSAFE_componentWillReceiveProps_decorators = [Sealed];
            _componentDidUpdate_decorators = [Sealed];
            __esDecorate(this, null, _UNSAFE_componentWillMount_decorators, { kind: "method", name: "UNSAFE_componentWillMount", static: false, private: false, access: { has: obj => "UNSAFE_componentWillMount" in obj, get: obj => obj.UNSAFE_componentWillMount }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _componentDidMount_decorators, { kind: "method", name: "componentDidMount", static: false, private: false, access: { has: obj => "componentDidMount" in obj, get: obj => obj.componentDidMount }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _componentWillUnmount_decorators, { kind: "method", name: "componentWillUnmount", static: false, private: false, access: { has: obj => "componentWillUnmount" in obj, get: obj => obj.componentWillUnmount }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _UNSAFE_componentWillReceiveProps_decorators, { kind: "method", name: "UNSAFE_componentWillReceiveProps", static: false, private: false, access: { has: obj => "UNSAFE_componentWillReceiveProps" in obj, get: obj => obj.UNSAFE_componentWillReceiveProps }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _componentDidUpdate_decorators, { kind: "method", name: "componentDidUpdate", static: false, private: false, access: { has: obj => "componentDidUpdate" in obj, get: obj => obj.componentDidUpdate }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BaseComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        constructor(props) {
            super(props);
            //autoBind(this);
            this.state = this.state || {};
            // if using PreRender, wrap render func
            if (this.PreRender != BaseComponent.prototype.render) {
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
        mounted = (__runInitializers(this, _instanceExtraInitializers), false);
        componentDidMount(...args) {
            this.ComponentDidMount(...args);
            this.ComponentDidMountOrUpdate(true);
            this.mounted = true;
            if (this.PostRender != BaseComponent.prototype.PostRender) {
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
            if (this.PostRender != BaseComponent.prototype.PostRender) {
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
    return BaseComponent = _classThis;
})();
export { BaseComponent };
function HasSealedProps(value, context) {
    return class extends value {
        constructor(...args) {
            super(...args);
            for (let key in value["prototype"]) {
                let method = value["prototype"][key];
                if (method.sealed) {
                    console.assert(this[key] == method, `Cannot override sealed method "${key}".`);
                }
            }
        }
    };
}
function Sealed(value, context) {
    value.sealed = true;
}
//# sourceMappingURL=BaseComponent.js.map