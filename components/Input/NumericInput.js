import React from 'react';

import { scaleLinear } from 'd3-scale';

import { to_step, cycle, clamp, parse_expression, parse_float } from '../util/math';
import { noop } from '../util/functions';

class NumericInput extends React.PureComponent {
	
	constructor(props) {

		super(props);

		this.keydown = this.keydown.bind(this);
		this.change = this.change.bind(this);
		this.register = this.register.bind(this);
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);

		this.state = {
			transient_value: props.value,
			value: props.value
		};

	}

	componentWillReceiveProps(props) {
		this.setState({
			transient_value: props.value,
			value: props.value
		});
	}

	change(e) {
		this.setState({
			transient_value: e.target.value
		});
	}

	componentDidUpdate(prev_props, prev_state) {
		if (this.state.value !== prev_state.value) {
			this.props.onChange(this.state.value, this.props.property);
		}
	}

	format_value(value, method = clamp) {
		return to_step(
			method(value, this.props.start, this.props.end),
			this.props.step, 
			this.props.precision
		);
	}

	format_user_input(state) {
		
		let value = this.props.parse_value(state.transient_value);

		if (!isNaN(value) && isFinite(value)) {
			return this.format_value(value);
		} else {
			return this.props.value;
		}
	}

	commit() {
		this.setState(
			previous_state => {
				let value = this.format_user_input(previous_state);
				return value !== previous_state.value ? { 
					transient_value: value,
					value: value
				} : null
			}
		);
	}

	register(input) {
		if (input) {
			this.input = input;
			if (this.props.autofocus) {
				this.input.focus();
			}
		} else {
			this.input = null;
		}
	}
 
	render() {

		let {
			type,
			autofocus,
			controls
		} = this.props;

		let {
			transient_value
		} = this.state;

		return (
			<div className='uiuiui-input uiuiui-input--numeric'>
				<input
					ref={this.register}
					onKeyDown={this.keydown}
					onChange={this.change}
					type={type}
					value={transient_value}
				/>
				{
					React.Children.map(
						this.props.children,
						child => React.cloneElement(child, {
							increment: this.increment,
							decrement: this.decrement
						})
					)
				}
			</div>
		);
	}

	/*
		Keyboard handling
		-----------------------------------------------------------
	*/

	keydown(e) {
		let handled = true;
		switch (e.key) {
			case 'ArrowUp':
				this.increment(e);
				break;
			case 'ArrowDown':
				this.decrement(e);
				break;
			case 'Enter':
				this.commit();
			default:
				handled = false;
		}
		if (handled) {
			e.preventDefault();
		}
	}


	increment(e) {
		this.offset(e, 1);
	}

	decrement(e) {
		this.offset(e, -1);
	}

	offset(e, dir) {
		let amount = this.step_amount(e) * dir * Math.sign(this.props.end - this.props.start);
		this.setState(
			previous_state => {
				let value = this.format_value(
					this.format_user_input(previous_state) + amount, 
					this.props.circular ? cycle : clamp
				);

				// Avoid unnecessary renders 
				// when value has not actually changed
				return value !== previous_state.transient_value ? {
					transient_value: value,
					value: value
				} : null;
			}
		);
	}

	step_amount(e) {
		return (
			typeof this.props.increment === 'function' ? 
				this.props.increment(e, this.props) : this.props.increment
		) || this.props.step;
	}

}

const increment_bigger_step_on_shift = (e, props) => e ? (e.shiftKey ? 10 : 1) * props.step : undefined;

NumericInput.defaultProps = {
	type: 'text',
	autofocus: false,
	step: 1,
	precision: 0,
	increment: increment_bigger_step_on_shift,
	start: 0,
	end: 100,
	value: 0,
	onChange: noop,
	property: undefined,
	expressions: true,
	parse_value: parse_float,
	circular: false
};

export default NumericInput;