export function E(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20) {
    /*var result = {} as any;
    for (let extend of Array.from(arguments)) {
        if (!IsObject(extend)) continue;
        //Object.assign(result, extend);
        // use VSet, for its extra options (eg. using E({someKey: false ? "someValue" : OMIT}) to omit "someKey" entirely)
        ObjectCE(result).VSet(extend);
    }

    // if result is empty, return the same empty-obj each time so it doesn't trigger react-js rerenders
    if (emptyObj && ObjectCE(result).VKeys().length == 0) {
        return emptyObj as any;
    }

    return result;
    //return StyleSheet.create(result);*/
    return Object.assign({}, ...arguments);
}
export class Vector2 {
    constructor(x, y) {
        Object.defineProperty(this, "x", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "y", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.x = x;
        this.y = y;
    }
    Minus(...args) {
        var [x, y] = args[0] instanceof Vector2 ? [args[0].x, args[0].y] : args;
        return new Vector2(this.x - x, this.y - y);
    }
    Plus(...args) {
        var [x, y] = args[0] instanceof Vector2 ? [args[0].x, args[0].y] : args;
        return new Vector2(this.x + x, this.y + y);
    }
}
//# sourceMappingURL=FromJSVE.js.map