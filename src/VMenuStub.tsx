import * as React from "react";
import {BaseComponent} from "./Helpers/BaseComponent";
import {default as VMenu, VMenuUIProps} from "./VMenu";
import autoBind from "react-autobind";
import * as ReactDOM from "react-dom";
import {Vector2i, GetSelfAndParents, GetOffset, GetScroll, GetContentOffset} from "./Helpers/General";
import {ACTOpenVMenuSet} from "./VMenuLayer";
import {VMenuUI} from "./VMenu";

declare var store;

export default class VMenuStub extends BaseComponent<{onBody?: boolean, for?: ()=>React.Component<any, any>, uiProps?: Partial<VMenuUIProps>}, {localOpenUIProps?: VMenuUIProps}> {
	static defaultProps = {onBody: true};

	constructor(props) {
		super(props);
		autoBind(this);
		this.menuID = ++VMenu.lastID;
	}
	menuID: number;

	forDom: HTMLElement;
	ComponentDidMount() {
	    var {for: forFunc} = this.props;
	    this.forDom = forFunc ? ReactDOM.findDOMNode(forFunc()) : ReactDOM.findDOMNode(this).parentElement;
		
		this.forDom.addEventListener("contextmenu", this.OnContextMenu);
		// early handler, so parent's hover isn't considered to be lost from mouse-down
		//this.forDom.addEventListener("mousedown", this.OnMouseDown);

	    document.addEventListener("mousedown", this.OnGlobalMouseDown);

		//this.PostRender();
	}
	/*OnContextMenu(e) {
		//if (e.button != 2) return;
		//this.Open(new Vector2i(e.pageX, e.pageY));
		//e.preventDefault();
	    //e.stopPropagation();
		debugger;
		return false;
	}
	OnMouseDown(e) {
		if (e.button != 2) return;*/
	OnContextMenu(e) {
		var pagePos = new Vector2i(e.pageX, e.pageY);

		var {onBody, children} = this.props;
		
		var posHoistElement = GetSelfAndParents(this.forDom).find(a=>a.style.position != "static");
		//var posFromPosHoistElement = pos.Minus(posHoistElement.position_Vector2i()).Plus(posHoistElement.contentOffset());
	    var posInPosHoistElement = pagePos.Minus(GetOffset(posHoistElement))
			.Minus(GetContentOffset(posHoistElement, true)).Plus(GetScroll(posHoistElement));
	    /*if (this.props.posOffset)
	        posFromPosHoistElement = posFromPosHoistElement.Plus(this.props.posOffset);*/

	    //this.setState({open: true, pos: posFromPosHoistElement});
		let uiProps = {...this.props, pos: pagePos} as VMenuUIProps;
		delete uiProps["children"];
		uiProps.id = this.menuID; // add menu id to ui-props
		VMenu.menuChildren[this.menuID] = children; // store ui/children on static, since breaks in store
		if (onBody) {
			//store.dispatch(new ACTOpenVMenuSet(uiProps));
			setTimeout(()=>store.dispatch(new ACTOpenVMenuSet(uiProps))); // wait a tiny bit, so OnGlobalMouseDown runs first
		} else
			this.setState({localOpenUIProps: uiProps});

		return false;
	}
	OnGlobalMouseDown(e) {
		let {onBody} = this.props;
		if (onBody) {
			if (store.getState().vMenu.openMenuProps)
				store.dispatch(new ACTOpenVMenuSet(null));
		} else {
			if (this.state.localOpenUIProps)
				this.setState({localOpenUIProps: null});
		}
	}

	ComponentWillUnmount() {
	    this.forDom.removeEventListener("contextmenu", this.OnContextMenu);
		//this.forDom.removeEventListener("mousedown", this.OnMouseDown);
	    document.removeEventListener("mousedown", this.OnGlobalMouseDown);
	}

	render() {
		let {localOpenUIProps} = this.state;
		if (localOpenUIProps == null) return <div/>;

		return <VMenuUI {...localOpenUIProps}/>;
	}
}