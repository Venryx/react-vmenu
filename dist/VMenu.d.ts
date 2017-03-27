/// <reference types="react" />
import { Vector2i } from "./Helpers/General";
import { BaseComponent } from "./Helpers/BaseComponent";
import VMenuLayer, { VMenuState, VMenuReducer } from "./VMenuLayer";
import { ACTOpenVMenuSet, voidy } from "./VMenuLayer";
import VMenuStub from "./VMenuStub";
export { VMenuStub, ACTOpenVMenuSet, VMenuState, VMenuReducer, VMenuLayer };
export default class VMenu {
    static lastID: number;
    static menuChildren: {};
}
export declare type VMenuUIProps = {
    pos: Vector2i;
    overlayStyle?;
    onOpen?: (posInPosHoistElement: Vector2i, pagePos: Vector2i) => void;
    onClose?: () => void;
    onOK?: () => boolean | voidy;
    onCancel?: () => boolean | voidy;
    id: number;
};
export declare class VMenuUI extends BaseComponent<VMenuUIProps, {}> {
    constructor(props: any);
    render(forReal?: boolean): JSX.Element;
}
export declare class VMenuItem extends BaseComponent<{
    text: string;
    style?;
    onClick: (e) => void;
}, {}> {
    constructor(props: any);
    static styles: {
        root: {
            zIndex: number;
            padding: string;
            backgroundColor: string;
            cursor: string;
            ":hover": {
                backgroundColor: string;
            };
        };
    };
    render(): JSX.Element;
    OnMouseDown(e: any): void;
}
