import { Component } from "react";
import { BaseComponent } from "./Utils/BaseComponent.js";
import { VMenuUIProps } from "./VMenu.js";
import React from "react";
export declare function ShowVMenu(menuProps: Omit<VMenuUIProps, "menuID"> & Partial<Pick<VMenuUIProps, "menuID">>, children: React.ReactChild, menuID?: number): void;
export declare class VMenuStub extends BaseComponent<{
    onBody?: boolean;
    for?: () => Component<any, any>;
    preOpen?: (e: any) => boolean;
    preventDefault?: boolean;
    delayEventHandler?: boolean;
    uiProps?: VMenuUIProps;
}, {
    localOpenUIProps?: VMenuUIProps | n;
}> {
    static defaultProps: {
        onBody: boolean;
        preventDefault: boolean;
    };
    constructor(props: any);
    menuID: number;
    forDom: HTMLElement;
    ComponentDidMount(): void;
    OnContextMenu: (e: any) => void;
    OnGlobalMouseDown: (e: any) => void;
    ComponentWillUnmount(): void;
    render(): JSX.Element;
}
