/// <reference types="react" />
import * as React from "react";
import { Vector2i } from "./Helpers/General";
import { BaseComponent } from "./Helpers/BaseComponent";
export default class VMenu extends BaseComponent<{
    contextMenu?;
    for?: () => React.Component<any, any>;
    onBody?: boolean;
    onOpen?: (posInPosHoistElement: Vector2i, pagePos: Vector2i) => void;
    onClose?: () => void;
}, {
    open?: boolean;
    pos?: Vector2i;
}> {
    static onBodyMenus: any[];
    static justOpened: VMenu;
    static CloseAll(): void;
    render(): JSX.Element;
    forDom: HTMLElement;
    Open(pagePos: Vector2i): void;
    Close(): void;
    ComponentDidMount(): void;
    OnContextMenu(e: any): boolean;
    OnMouseDown(e: any): void;
    OnGlobalMouseDown(e: any): void;
    PreRender(): void;
    PostRender(): void;
    ComponentWillUnmount(): void;
    dom: HTMLElement;
    domParent: HTMLElement;
    poppedOut: boolean;
    PopOut(): void;
    PopBackIn(): void;
}
export declare class VMenuItem extends BaseComponent<{
    text: string;
    onClick: (e) => void;
}, {}> {
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
