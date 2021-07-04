/// <reference types="react" />
import { BaseComponent } from "./Utils/BaseComponent.js";
import { Vector2 } from "./Utils/FromJSVE.js";
import { HTMLProps_Fixed } from "./Utils/@Types.js";
export declare class VMenu {
    static lastID: number;
    static menuChildren: {};
}
export declare type VMenuUIProps = {
    pos: Vector2;
    style?: any;
    menuID: number;
} & HTMLProps_Fixed<"div">;
export declare class VMenuUI extends BaseComponent<VMenuUIProps, {}> {
    render(): JSX.Element;
}
export declare class VMenuItem extends BaseComponent<{
    text: string;
    enabled?: boolean;
    style?: any;
} & HTMLProps_Fixed<"div">, {}> {
    static styles: {
        root: {
            zIndex: number;
            padding: string;
            backgroundColor: string;
            cursor: string;
        };
        disabled: {
            opacity: number;
            cursor: string;
        };
    };
    static defaultProps: {
        enabled: boolean;
    };
    constructor(props: any);
    render(): JSX.Element;
    OnMouseDown: (e: any) => void;
}
