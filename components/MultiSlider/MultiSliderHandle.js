import React from 'react';

import { noop } from '../util/functions';

class MultiSliderHandle extends React.PureComponent {
	
	constructor(props) {
		super(props);
		this.startInteraction = this.startInteraction.bind(this);
	}

	startInteraction(e) {
		this.props.onStart(e, this.props.property);
	}

	render() {

		let {
			value
		} = this.props;

		let styles = {
			left: `${value}%`
		}

		return (
			<div 
				className='uiuiui-multislider__handle'
				onMouseDown={this.startInteraction}
				style={styles}
			>
			</div>
		);
	}
}

MultiSliderHandle.defaultProps = {
	onStart: noop,
	property: undefined
};

export default MultiSliderHandle;