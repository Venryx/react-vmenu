/// <reference types="react" />
import { Component } from "react";
export declare class BaseComponent<P, S> extends Component<P, S> {
    constructor(props: any);
    refs: any;
    ComponentWillMount(): void;
    ComponentWillMountOrReceiveProps(props: any, forMount?: boolean): void;
    private componentWillMount();
    ComponentDidMount(...args: any[]): void;
    ComponentDidMountOrUpdate(forMount: boolean): void;
    mounted: boolean;
    private componentDidMount(...args);
    ComponentWillUnmount(): void;
    private componentWillUnmount();
    ComponentWillReceiveProps(newProps: any[]): void;
    private componentWillReceiveProps(newProps);
    ComponentDidUpdate(...args: any[]): void;
    private componentDidUpdate(...args);
    PreRender(): void;
    PostRender(initialMount: boolean): void;
}
