import {observable} from "mobx";
import {VMenuUIProps} from "./VMenu.js";

export class Store {
	@observable openMenuProps: VMenuUIProps|n;
}
export const store = new Store();