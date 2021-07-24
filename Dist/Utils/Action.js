export class Action {
    constructor(payload) {
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "payload", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }); // needed for Is() method's type-inference to work, for some reason
        this.type = this.constructor.name;
        this.payload = payload;
        //this.Extend(payload);
        Object.setPrototypeOf(this, Object.getPrototypeOf({}));
    }
    Is(actionType) {
        if (actionType == null)
            return false; // this can occur during start-up "assert reducer sanity" phase
        return this.type == actionType.name;
        //return this instanceof actionType; // alternative
    }
}
//Object.prototype._AddFunction("Is", Action.prototype.Is);
Object.defineProperty(Object.prototype, "Is", { configurable: true, value: Action.prototype.Is });
//# sourceMappingURL=Action.js.map