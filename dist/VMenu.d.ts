/// <reference types="react" />
import * as React from "react";
import { Vector2i } from "./Helpers/General";
import { BaseComponent } from "./Helpers/BaseComponent";
import VMenuLayer, { VMenuState, VMenuReducer } from "./VMenuLayer";
import { ACTOpenVMenuSet } from "./VMenuLayer";
import VMenuStub from "./VMenuStub";
export { VMenuStub, ACTOpenVMenuSet, VMenuState, VMenuReducer, VMenuLayer };
export default class VMenu {
    static lastID: number;
    static menuChildren: {};
}
export declare type VMenuUIProps = {
    pos: Vector2i;
    style?;
    menuID: number;
} & React.HTMLProps<HTMLDivElement>;
export declare class VMenuUI extends BaseComponent<VMenuUIProps, {}> {
    constructor(props: any);
    render(forReal?: boolean): JSX.Element;
}
export declare class VMenuItem extends BaseComponent<{
    text: string;
    enabled?: boolean;
    style?;
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
    OnMouseDown(e: any): void;
}
