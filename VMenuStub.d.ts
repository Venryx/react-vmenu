import { Component } from "react";
import { BaseComponent } from "./Helpers/BaseComponent";
import { VMenuUIProps } from "./VMenu";
export declare class VMenuStub extends BaseComponent<{
    onBody?: boolean;
    for?: () => Component<any, any>;
    preOpen?: (e: any) => boolean;
    uiProps?: VMenuUIProps;
}, {
    localOpenUIProps?: VMenuUIProps;
}> {
    static defaultProps: {
        onBody: boolean;
    };
    constructor(props: any);
    menuID: number;
    forDom: HTMLElement;
    ComponentDidMount(): void;
    OnContextMenu(e: any): void;
    OnGlobalMouseDown(e: any): void;
    ComponentWillUnmount(): void;
    render(): JSX.Element;
}
