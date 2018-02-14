import React from 'react';

import { gradient } from '../util/style';

class Gradient extends React.PureComponent {
	render() {

		let {
			stops
		} = this.props;

		let style = {
			background: gradient(stops)
		};

		return (
			<div className='rc-spectrum rc-spectrum--gradient' style={style}>

			</div>
		);
	}
}

Gradient.defaultProps = {
	stops: []
};

export default Gradient;