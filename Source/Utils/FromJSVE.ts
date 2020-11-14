export function E<E1,E2,E3,E4,E5,E6,E7,E8,E9,E10,E11,E12,E13,E14,E15,E16,E17,E18,E19,E20>(
	e1?:E1,e2?:E2,e3?:E3,e4?:E4,e5?:E5,e6?:E6,e7?:E7,e8?:E8,e9?:E9,e10?:E10,
	e11?:E11,e12?:E12,e13?:E13,e14?:E14,e15?:E15,e16?:E16,e17?:E17,e18?:E18,e19?:E19,e20?:E20,
):E1&E2&E3&E4&E5&E6&E7&E8&E9&E10&E11&E12&E13&E14&E15&E16&E17&E18&E19&E20 {
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
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	x: number;
	y: number;

	Minus(other: Vector2): Vector2;
	Minus(otherX: number, otherY: number): Vector2;
	Minus(...args) {
		var [x, y] = args[0] instanceof Vector2 ? [args[0].x, args[0].y] : args;
		return new Vector2(this.x - x, this.y - y);
	}
	Plus(other: Vector2): Vector2;
	Plus(otherX: number, otherY: number): Vector2;
	Plus(...args) {
		var [x, y] = args[0] instanceof Vector2 ? [args[0].x, args[0].y] : args;
		return new Vector2(this.x + x, this.y + y);
	}
}