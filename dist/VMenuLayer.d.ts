/// <reference types="react" />
import { Action } from "./Helpers/Action";
import { Component } from "react";
import { VMenuUIProps } from "./VMenu";
export declare type voidy = void | Promise<void>;
export declare class ACTOpenVMenuSet extends Action<VMenuUIProps> {
}
export declare class VMenuState {
    openMenuProps: VMenuUIProps;
}
export declare function VMenuReducer(state: VMenuState, action: Action<any>): VMenuState;
export declare class VMenuLayer extends Component<{} & Partial<{
    openMenuProps: VMenuUIProps;
}>, {}> {
    render(): JSX.Element;
}
