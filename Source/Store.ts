import {makeObservable, observable} from "mobx";
import {n} from "./Utils/@Types.js";
import {VMenuUIProps, VMenuUIProps_WithPosInfo} from "./VMenu.js";

export class Store {
	constructor() { makeObservable(this); }
	@observable openMenuProps: VMenuUIProps_WithPosInfo|n;
}
export const store = new Store();