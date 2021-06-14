import React from "react";
import { BaseComponent } from "./Utils/BaseComponent.js";
import { Vector2 } from "./Utils/FromJSVE.js";
export declare class VMenu {
    static lastID: number;
    static menuChildren: {};
}
export declare type VMenuUIProps = {
    pos: Vector2;
    style?: any;
    menuID: number;
} & React.HTMLProps<HTMLDivElement>;
export declare class VMenuUI extends BaseComponent<VMenuUIProps, {}> {
    render(): JSX.Element;
}
export declare class VMenuItem extends BaseComponent<{
    text: string;
    enabled?: boolean;
    style?: any;
} & React.HTMLProps<HTMLDivElement>, {}> {
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
