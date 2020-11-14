import { Vector2 } from "./FromJSVE";
export declare function GetParents(dom: HTMLElement, topDown?: boolean): HTMLElement[];
export declare function GetSelfAndParents(dom: HTMLElement, topDown?: boolean): HTMLElement[];
export declare function GetOffset(dom: HTMLElement): Vector2;
export declare function GetContentOffset(dom: HTMLElement, includePadding?: boolean): Vector2;
export declare function GetScroll(dom: HTMLElement): Vector2;
export declare function AddGlobalElement(html: string): void;
export declare function AddGlobalStyle(str: any): void;
