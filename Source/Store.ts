import {observable} from "mobx";
import {n} from "./Utils/@Types.js";
import {VMenuUIProps} from "./VMenu.js";

export class Store {
	@observable openMenuProps: VMenuUIProps|n;
}
export const store = new Store();