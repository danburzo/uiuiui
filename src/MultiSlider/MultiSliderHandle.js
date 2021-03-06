import React from 'react';
import PropTypes from 'prop-types';

import { noop } from '../util/functions';
import normalizeEvent from '../util/normalize-event';

import './MultiSliderHandle.css';

class MultiSliderHandle extends React.PureComponent {
	constructor(props) {
		super(props);
		this.startInteraction = this.startInteraction.bind(this);
	}

	startInteraction(e) {
		e = normalizeEvent(e);
		this.props.onStart(e, this.props.property);
	}

	render() {
		let { value } = this.props;

		let styles = {
			left: `${value}%`
		};

		return (
			<div
				className="uix-multislider__handle"
				onMouseDown={this.startInteraction}
				onTouchStart={this.startInteraction}
				style={styles}
			/>
		);
	}
}

MultiSliderHandle.propTypes = {
	onStart: PropTypes.func,
	property: PropTypes.any
};

MultiSliderHandle.defaultProps = {
	onStart: noop
};

export default MultiSliderHandle;
