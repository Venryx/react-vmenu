import { PropsWithChildren } from "react";
import { BaseComponent } from "./Utils/BaseComponent.js";
import { VMenuUIProps } from "./VMenu.js";
import React from "react";
import { n, RequiredBy } from "./Utils/@Types.js";
export declare function ShowVMenu(menuProps: RequiredBy<VMenuUIProps, "pos">, children: React.ReactNode): void;
export declare class VMenuStub extends BaseComponent<{
    onBody?: boolean;
    for?: () => HTMLElement;
    eventFilter: (e: MouseEvent) => any;
    preOpen?: (e: any) => boolean;
    preventDefault?: boolean;
    delayEventHandler?: boolean;
    uiProps?: VMenuUIProps;
} & PropsWithChildren, {
    localOpenUIProps?: VMenuUIProps | n;
}> {
    static defaultProps: Partial<VMenuStub["props"]>;
    constructor(props: any);
    menuID: number;
    forDom: HTMLElement;
    ComponentDidMount(): void;
    OnContextMenu: (e: any) => void;
    OnGlobalMouseDown: (e: any) => void;
    ComponentWillUnmount(): void;
    root: HTMLDivElement | n;
    render(): React.JSX.Element;
}
