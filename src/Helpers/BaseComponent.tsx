import {Component} from "react";

export class BaseComponent<P, S> extends Component<P, S> {
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

	refs;

	ComponentWillMount(): void {};
	ComponentWillMountOrReceiveProps(props: any, forMount?: boolean): void {};
	private componentWillMount() {
		this.ComponentWillMount(); 
	    this.ComponentWillMountOrReceiveProps(this.props, true); 
	}
	ComponentDidMount(...args: any[]): void {};
	ComponentDidMountOrUpdate(forMount: boolean): void {};
	mounted = false;
	private componentDidMount(...args) {
		this.ComponentDidMount(...args);
		this.ComponentDidMountOrUpdate(true);
		this.mounted = true;
		if (this.PostRender != BaseComponent.prototype.PostRender) {
			setTimeout(()=>window.requestAnimationFrame(()=> {
				if (!this.mounted) return;
				this.PostRender(true);
			}));
		}
	}
	ComponentWillUnmount(): void {};
	private componentWillUnmount() {
		this.ComponentWillUnmount();
		this.mounted = false;
	}
	
	ComponentWillReceiveProps(newProps: any[]): void {};
	private componentWillReceiveProps(newProps) {
		this.ComponentWillReceiveProps(newProps);
	    this.ComponentWillMountOrReceiveProps(newProps, false);
	}
	ComponentDidUpdate(...args: any[]): void {};
	private componentDidUpdate(...args) {
	    this.ComponentDidUpdate(...args);
		this.ComponentDidMountOrUpdate(false);
		if (this.PostRender != BaseComponent.prototype.PostRender) {
			setTimeout(()=>window.requestAnimationFrame(()=> {
				if (!this.mounted) return;
				this.PostRender(false);
			}));
		}
	}

	PreRender(): void {};
	PostRender(initialMount: boolean): void {};
}