import {Component} from "react";

export type BaseProps = {
	ref?, // needed so TypeScript doesn't complain about ref func not matching, because <VMenuUI> doesn't have "align" property of <div>
};
@HasSealedProps
export class BaseComponent<P, S> extends Component<P & BaseProps, S> {
	constructor(props) {
		super(props);
		//autoBind(this);
		this.state = this.state || {} as any;

		// if using PreRender, wrap render func
		if (this.PreRender != BaseComponent.prototype.render) {
			let oldRender = this.render;
			this.render = function() {
				this.PreRender();
				return oldRender.apply(this, arguments);
			};
		}
	}

	declare refs;

	ComponentWillMount(): void {};
	ComponentWillMountOrReceiveProps(props: any, forMount?: boolean): void {};
	@Sealed UNSAFE_componentWillMount() {
		this.ComponentWillMount(); 
	    this.ComponentWillMountOrReceiveProps(this.props, true); 
	}
	ComponentDidMount(...args: any[]): void {};
	ComponentDidMountOrUpdate(forMount: boolean): void {};
	mounted = false;
	@Sealed componentDidMount(...args) {
		this.ComponentDidMount(...args);
		this.ComponentDidMountOrUpdate(true);
		this.mounted = true;
		if (this.PostRender != BaseComponent.prototype.PostRender) {
			/*setTimeout(()=>window.requestAnimationFrame(()=> {
				if (!this.mounted) return;
				this.PostRender(true);
			}));*/
			this.PostRender(true);
		}
	}
	ComponentWillUnmount(): void {};
	@Sealed componentWillUnmount() {
		this.ComponentWillUnmount();
		this.mounted = false;
	}
	
	ComponentWillReceiveProps(newProps: any[]): void {};
	@Sealed UNSAFE_componentWillReceiveProps(newProps) {
		this.ComponentWillReceiveProps(newProps);
	    this.ComponentWillMountOrReceiveProps(newProps, false);
	}
	ComponentDidUpdate(...args: any[]): void {};
	@Sealed componentDidUpdate(...args) {
		this.ComponentDidUpdate(...args);
		this.ComponentDidMountOrUpdate(false);
		if (this.PostRender != BaseComponent.prototype.PostRender) {
			/*setTimeout(()=>window.requestAnimationFrame(()=> {
				if (!this.mounted) return;
				this.PostRender(false);
			}));*/
			this.PostRender(false);
		}
	}

	PreRender(): void {};
	PostRender(initialMount: boolean): void {};
}

function HasSealedProps(target: Object) {
	let oldConstructor = target.constructor;
	target.constructor = function() {
		for (let key in target["prototype"]) {
			let method = target["prototype"][key];
			if (method.sealed) {
				console.assert(this[key] == method, `Cannot override sealed method "${key}".`);
			}
		}
		return oldConstructor.apply(this, arguments);
	};
}
function Sealed(target: Object, key: string) {
	target[key].sealed = true;
}