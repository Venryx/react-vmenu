export class Vector2i {
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	x: number;
	y: number;

	Minus(other: Vector2i): Vector2i;
	Minus(otherX: number, otherY: number): Vector2i;
	Minus(...args) {
		var [x, y] = args[0] instanceof Vector2i ? [args[0].x, args[0].y] : args;
		return new Vector2i(this.x - x, this.y - y);
	}
	Plus(other: Vector2i): Vector2i;
	Plus(otherX: number, otherY: number): Vector2i;
	Plus(...args) {
		var [x, y] = args[0] instanceof Vector2i ? [args[0].x, args[0].y] : args;
		return new Vector2i(this.x + x, this.y + y);
	}
}

export function GetParents(dom: HTMLElement, topDown = false) {
	let result = [] as HTMLElement[];
	let currentDom = dom;
	while (currentDom.parentElement) {
		result.push(currentDom.parentElement);
		currentDom = currentDom.parentElement;
	}
	return result;
}
export function GetSelfAndParents(dom: HTMLElement, topDown = false) {
	let result = GetParents(dom, topDown);
	if (topDown)
		return result.concat([dom]);
	return [dom].concat(result);
}

export function GetOffset(dom: HTMLElement) {
	return new Vector2i(dom.offsetLeft, dom.offsetTop);
}
export function GetContentOffset(dom: HTMLElement, includePadding = false) {
	var result = new Vector2i(0, 0);
	if (dom.style.position == "absolute")
		result = result.Plus(parseInt(dom.style.marginLeft)|0, parseInt(dom.style.marginTop)|0);
	result = result.Minus(parseInt(dom.style.borderLeftWidth) | 0, parseInt(dom.style.borderTopWidth) | 0);
	if (includePadding)
		result = result.Plus(parseInt(dom.style.paddingLeft)|0, parseInt(dom.style.paddingTop)|0);
	//result = result.Plus(parseInt(dom.scrollLeft)|0, parseInt(dom.scrollTop)|0);
	return result;
}
export function GetScroll(dom: HTMLElement) {
	return new Vector2i(dom.scrollLeft, dom.scrollTop);
}

export function E(...extenders: any[]) {
	return Object.assign({}, ...extenders);
}