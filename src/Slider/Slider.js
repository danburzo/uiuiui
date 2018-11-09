import React from 'react';
import EventListener from 'react-event-listener';
import { noop } from '../util/functions';
import Pad from '../Pad/Pad';

import './Slider.css';

const initial_state = {
	interacting: false,
	prev_prop_value: undefined
};

class Slider extends React.Component {
	static getDerivedStateFromProps(props, current_state) {
		if (current_state.prev_prop_value !== props.value) {
			return {
				value: props.value,
				prev_prop_value: props.value
			};
		}
		return null;
	}

	constructor(props) {
		super(props);

		// Event handlers
		this.change = this.change.bind(this);
		this.start = this.start.bind(this);
		this.end = this.end.bind(this);

		// Initial state
		this.state = initial_state;
	}

	componentDidUpdate(prev_props, prev_state) {
		// If update occured because of outside props, don't trigger onChange
		if (this.state.value !== prev_state.value && prev_props.value === this.props.value) {
			this.props.onChange(this.state.value, this.props.property);
		}
	}

	change({ x, y }) {
		let value = this.props.vertical ? y : x;

		this.setState(previous_state => {
			// Avoid unnecessary renders
			// when value has not actually changed
			return value === previous_state.value ? null : { value: value };
		});
	}

	start(e) {
		this.setState(
			{
				interacting: true
			},
			() => {
				this.props.onStart(e);
			}
		);
	}

	end(e) {
		this.setState(
			{
				interacting: false
			},
			() => {
				this.props.onEnd(e);
			}
		);
	}

	render() {
		let {
			vertical,
			cyclical,
			tabIndex,
			className,
			step,
			precision,
			start,
			end,
			increment,
			property
		} = this.props;

		let { value, interacting } = this.state;

		let pad_props = vertical
			? {
					y: value,
					y_start: end,
					y_end: start,
					y_step: step,
					y_precision: precision,
					y_increment: increment
			  }
			: {
					x: value,
					x_start: start,
					x_end: end,
					x_step: step,
					x_precision: precision,
					x_increment: increment
			  };

		return (
			<div
				className={`
					uix-slider 
					${vertical ? 'uix-slider--vertical' : ''} 
					${cyclical ? 'uix-slider--cyclical' : ''} 
					${interacting ? 'uix-slider--interacting' : ''} 
					${className || ''}
				`}
				tabIndex={tabIndex}
				onKeyDown={this.keydown}
			>
				<Pad
					onStart={this.start}
					onChange={this.change}
					onEnd={this.end}
					property={property}
					cyclical={cyclical}
					{...pad_props}
				>
					{React.Children.map(this.props.children, child =>
						React.cloneElement(child, {
							vertical: vertical
						})
					)}
				</Pad>
			</div>
		);
	}
}

Slider.defaultProps = {
	className: undefined,
	property: undefined,
	tabIndex: 0,

	vertical: false,
	cyclical: false,

	value: undefined,
	start: 0,
	end: 100,
	step: 1,
	precision: 0,
	increment: undefined,

	onChange: noop,
	onStart: noop,
	onEnd: noop
};

export default Slider;