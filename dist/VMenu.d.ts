/// <reference types="react" />
import { BaseComponent } from "./Helpers/BaseComponent";
import { Vector2i } from "./Helpers/General";
import { ACTOpenVMenuSet, VMenuLayer, VMenuReducer, VMenuState } from "./VMenuLayer";
import { VMenuStub } from "./VMenuStub";
export { VMenuStub, ACTOpenVMenuSet, VMenuState, VMenuReducer, VMenuLayer };
export declare class VMenu {
    static lastID: number;
    static menuChildren: {};
}
export declare type VMenuUIProps = {
    pos: Vector2i;
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
    render(): JSX.Element;
    OnMouseDown: (e: any) => void;
}
