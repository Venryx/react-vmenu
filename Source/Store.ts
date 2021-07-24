import {makeObservable, observable} from "mobx";
import {n} from "./Utils/@Types.js";
import {VMenuUIProps} from "./VMenu.js";

export class Store {
	constructor() { makeObservable(this); }
	@observable openMenuProps: VMenuUIProps|n;
}
export const store = new Store();