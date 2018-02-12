import React from 'react';

import { range } from 'd3-array';

class BandPadProgress extends React.PureComponent {
	render() {

		let {
			bands,
			values
		} = this.props;

		console.log(values);

		return (
			<div className='rc-bandpad__progress'>
				{
					range(bands).map(idx => {
						let band_style = {
							'height': `${values[idx]}%`,
							'width': `${100/bands}%`,
							'left': `${100/bands * idx}%`
						};

						return (
							<div 
								key={idx}
								className='rc-bandpad__progress-band'
								style={band_style}
							/>
						);
					})
				}
			</div>
		);
	}
}

BandPadProgress.defaultProps = {};

export default BandPadProgress;