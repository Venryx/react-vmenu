//import Radium from "radium";
import React, {useEffect, useMemo} from "react";
import classNames from "classnames";
import {runInAction} from "mobx";
import {MouseEventHandler} from "react";
import {store} from "./Store.js";
import {BaseComponent} from "./Utils/BaseComponent.js";
import {Vector2, E} from "./Utils/FromJSVE.js";
import {AddGlobalStyle, RunInAction} from "./Utils/General.js";
import {FixHTMLProps, HTMLProps_Fixed, RequiredBy} from "./Utils/@Types.js";
import {VMenu_backgroundColor, VMenu_borderStyle} from "./VMenu.js";

// add this menu-closing behavior globally (and persistently), since user may display vmenu manually with ShowVMenu()
let globalListener_onMouseDown: (event: MouseEvent)=>any;
function EnsureGlobalListenersAdded() {
	if (globalListener_onMouseDown != null) return;
	globalListener_onMouseDown = e=> {
		if (e["ignore"]) return;
		if (store.openMenuProps) {
			RunInAction("VMenu.globalListener_onMouseDown", ()=>store.openMenuProps = null);
		}
	};
	document.addEventListener("mousedown", globalListener_onMouseDown);
}

AddGlobalStyle(`
/*.VMenuItem.disabled {
	opacity: .5;
	/#*pointer-events: none;*#/
	cursor: default;
}*/
.VMenuItem:not(.disabled):hover {
	background-color: rgb(25,25,25) !important;
}
`);

export type ChildLayout = "below" | "right";

export class VMenuItem extends BaseComponent<{text: string, enabled?: boolean, childLayout?: ChildLayout, style?} & HTMLProps_Fixed<"div">, {hovered: boolean}> {
	static styles = {
	    root: {
			position: "relative",
			zIndex: 21, padding: "2 5", backgroundColor: "rgb(35,35,35)", cursor: "pointer",
			display: "flex",
			//":hover": {backgroundColor: "rgb(25,25,25)"}
		},
		disabled: {
			opacity: .5,
			cursor: "default",
		},
	}
	static defaultProps = {enabled: true, childLayout: "right"};
	constructor(props) {
		super(props);
		EnsureGlobalListenersAdded();
	}

	render() {
		let {text, enabled, childLayout, className, style, onClick, title, children, ...rest} = this.props;
		const {hovered} = this.state;

		return (
			<>
				<div {...rest}
					title={title ?? undefined} className={classNames("VMenuItem", className, !enabled && "disabled")}
					style={E(VMenuItem.styles.root, !enabled && VMenuItem.styles.disabled, style)}
					onMouseDown={this.OnMouseDown}
					onMouseEnter={()=>{
						if (children != null && childLayout == "right") {
							this.setState({hovered: true});
						}
					}}
					onMouseLeave={()=>{
						if (children != null && childLayout == "right") {
							this.setState({hovered: false});
						}
					}}
				>
					{text}
					{children != null && childLayout == "right" &&
					<>
						{/*<img src={rightArrowSVGDataURI} style={{position: "absolute", right: 5, filter: "invert(1)"}}/>*/}
						<div style={{
							//position: "absolute", right: 5, top: 0, bottom: 0,
							marginLeft: "auto", paddingLeft: 5, boxSizing: "content-box",
							backgroundImage: `url('${rightArrowSVGDataURI}')`,
							backgroundRepeat: "no-repeat", backgroundPositionX: "right", backgroundPositionY: "center",
							width: 15, height: 15,
							filter: "invert(1)", opacity: .7,
						}}/>
						{hovered &&
						<div style={{
							position: "absolute", left: "100%", top: -1,
							backgroundColor: VMenu_backgroundColor, border: VMenu_borderStyle,
						}}>
							{children}
						</div>}
					</>}
				</div>
				{children != null && childLayout == "below" &&
				<div style={{border: "solid rgba(100,100,100,1)", borderWidth: "0 0 0 5px"}}>
					{children}
				</div>}
			</>
		);
	}

	OnMouseDown = e=> {
		let {onClick} = this.props;
		e.stopPropagation();
		if (this.props.enabled) {
			RunInAction("VMenuItem.onMouseDown", ()=>store.openMenuProps = null);
			if (onClick) onClick(e);
		} else {
			e.nativeEvent.ignore = true;
		}
	};
}

const rightArrowSVGDataURI = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDQ0OCA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N${""
	}2ZyI+PHBhdGggZD0iTTE5MC41IDY2LjlsMjIuMi0yMi4yYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwTDQ0MSAyMzljOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMjQ2LjYgNDY3LjNjLTkuNCA5LjQtMjQuNiA5Lj${""
	}QtMzMuOSAwbC0yMi4yLTIyLjJjLTkuNS05LjUtOS4zLTI1IC40LTM0LjNMMzExLjQgMjk2SDI0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHYtMzJjMC0xMy4zIDEwLjctMjQgMjQtMjRoMjg3LjRMMTkwLjkgMTAxL${""
	}jJjLTkuOC05LjMtMTAtMjQuOC0uNC0zNC4zeiIvPjwvc3ZnPg==`;