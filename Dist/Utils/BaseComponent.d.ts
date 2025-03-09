import { Component } from "react";
export type BaseProps = {
    ref?: any;
};
export declare class BaseComponent<P, S> extends Component<P & BaseProps, S> {
    constructor(props: any);
    refs: any;
    ComponentWillMount(): void;
    ComponentWillMountOrReceiveProps(props: any, forMount?: boolean): void;
    UNSAFE_componentWillMount(): void;
    ComponentDidMount(...args: any[]): void;
    ComponentDidMountOrUpdate(forMount: boolean): void;
    mounted: boolean;
    componentDidMount(...args: any[]): void;
    ComponentWillUnmount(): void;
    componentWillUnmount(): void;
    ComponentWillReceiveProps(newProps: any[]): void;
    UNSAFE_componentWillReceiveProps(newProps: any): void;
    ComponentDidUpdate(...args: any[]): void;
    componentDidUpdate(...args: any[]): void;
    PreRender(): void;
    PostRender(initialMount: boolean): void;
}
