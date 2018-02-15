import React from 'react';

import { PadHandle } from '../Pad';

class SliderHandle extends React.PureComponent {
	render() {
		let slider_props = {
			[this.props.vertical ? 'x' : 'y'] : 50
		}
		return (
			<PadHandle 
				className={`
					uiuiui-slider__handle
					${ this.props.interacting ? 'uiuiui-slider__handle--interacting' : '' }
				`}
				{...this.props} 
				{...slider_props} 
			/>
		);
	}
}

export default SliderHandle;