/// <reference types="react" />
import * as React from "react";
import { BaseComponent } from "./Helpers/BaseComponent";
import { VMenuUIProps } from "./VMenu";
export declare class VMenuStub extends BaseComponent<{
    onBody?: boolean;
    for?: () => React.Component<any, any>;
    preOpen?: (e) => boolean;
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
