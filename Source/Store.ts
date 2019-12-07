import {observable} from "mobx";
import {VMenuUIProps} from "./VMenu";

export class Store {
	@observable openMenuProps: VMenuUIProps;
}
export const store = new Store();