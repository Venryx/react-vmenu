import {observable} from "mobx";
import {n} from "./Utils/@Types.js";
import {VMenuUIProps, VMenuUIProps_WithPosInfo} from "./VMenu.js";

export class Store {
	@observable accessor openMenuProps: VMenuUIProps_WithPosInfo|n;
}
export const store = new Store();