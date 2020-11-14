import { Vector2 } from "./FromJSVE";
export function GetParents(dom, topDown = false) {
    let result = [];
    let currentDom = dom;
    while (currentDom.parentElement) {
        result.push(currentDom.parentElement);
        currentDom = currentDom.parentElement;
    }
    return result;
}
export function GetSelfAndParents(dom, topDown = false) {
    let result = GetParents(dom, topDown);
    if (topDown)
        return result.concat([dom]);
    return [dom].concat(result);
}
export function GetOffset(dom) {
    return new Vector2(dom.offsetLeft, dom.offsetTop);
}
export function GetContentOffset(dom, includePadding = false) {
    var result = new Vector2(0, 0);
    if (dom.style.position == "absolute")
        result = result.Plus(parseInt(dom.style.marginLeft) | 0, parseInt(dom.style.marginTop) | 0);
    result = result.Minus(parseInt(dom.style.borderLeftWidth) | 0, parseInt(dom.style.borderTopWidth) | 0);
    if (includePadding)
        result = result.Plus(parseInt(dom.style.paddingLeft) | 0, parseInt(dom.style.paddingTop) | 0);
    //result = result.Plus(parseInt(dom.scrollLeft)|0, parseInt(dom.scrollTop)|0);
    return result;
}
export function GetScroll(dom) {
    return new Vector2(dom.scrollLeft, dom.scrollTop);
}
function IndexOfAny(...strings) {
    var lowestIndex = -1;
    for (let str of strings) {
        var indexOfChar = this.indexOf(str);
        if (indexOfChar != -1 && (indexOfChar < lowestIndex || lowestIndex == -1))
            lowestIndex = indexOfChar;
    }
    return lowestIndex;
}
let loaded = false;
export function AddGlobalElement(html) {
    /*$(()=> {
        $(html).appendTo("#hidden_early");
    });*/
    let proceed = () => {
        loaded = true;
        let nodeType = html.trim().substring(1, IndexOfAny.call(html.trim(), " ", ">"));
        let element = document.createElement(nodeType);
        if (document.querySelector("#hidden_early"))
            document.querySelector("#hidden_early").appendChild(element);
        else
            document.body.appendChild(element);
        element.outerHTML = html;
    };
    if (loaded)
        proceed();
    else
        window.addEventListener("load", proceed);
}
;
export function AddGlobalStyle(str) {
    AddGlobalElement(`
<style>
${str}
</style>
	`);
}
;
//# sourceMappingURL=General.js.map