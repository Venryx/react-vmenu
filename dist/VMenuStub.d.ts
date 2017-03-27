/// <reference types="react" />
import * as React from "react";
import { BaseComponent } from "./Helpers/BaseComponent";
import { VMenuUIProps } from "./VMenu";
export default class VMenuStub extends BaseComponent<{
    onBody?: boolean;
    for?: () => React.Component<any, any>;
    uiProps?: Partial<VMenuUIProps>;
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
    OnContextMenu(e: any): boolean;
    OnGlobalMouseDown(e: any): void;
    ComponentWillUnmount(): void;
    render(): JSX.Element;
}
