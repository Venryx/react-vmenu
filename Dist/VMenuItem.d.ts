/// <reference types="react" />
import { BaseComponent } from "./Utils/BaseComponent.js";
import { HTMLProps_Fixed } from "./Utils/@Types.js";
export declare type ChildLayout = "below" | "right";
export declare class VMenuItem extends BaseComponent<{
    text: string;
    enabled?: boolean;
    childLayout?: ChildLayout;
    style?: any;
} & HTMLProps_Fixed<"div">, {
    hovered: boolean;
}> {
    static styles: {
        root: {
            position: string;
            zIndex: number;
            padding: string;
            backgroundColor: string;
            cursor: string;
            display: string;
        };
        disabled: {
            opacity: number;
            cursor: string;
        };
    };
    static defaultProps: {
        enabled: boolean;
        childLayout: string;
    };
    constructor(props: any);
    render(): JSX.Element;
    OnMouseDown: (e: any) => void;
}
