import React from 'react';

import { range } from 'd3-array';

import { arc_from_circle } from '../util/svg';
import { deg_to_radians } from '../util/numbers';

class RadialPadGrid extends React.PureComponent {
	render() {
		let {
			r_step,
			t_step
		} = this.props;

		let size = 100;
		let angle = 360;
		let cx = size / 2;
		let cy = size / 2;
		let r = size / 2;

		let r_steps = range(r_step ? Math.floor(size / r_step) : 0).slice(1);
		let t_steps = range(t_step ? Math.floor(angle / t_step) : 0);

		let r_path = r_steps.map(step => arc_from_circle(cx, cy, step * r_step / 2)).join(' ');
		let t_path = t_steps.map(step => `
			M ${cx} ${cy} 
			l 
				${ r * Math.cos(deg_to_radians(step * t_step)) } 
				${ r * Math.sin(deg_to_radians(step * t_step)) }
		`).join(' ');

		return (
			<svg className='rc-radialpad__grid' viewBox={`0 0 ${size} ${size}`}>
				<rect 
					className='rc-radialpad__grid-background'
					x='0' 
					y='0' 
					width='100%' 
					height='100%'
				/>
				<path 
					className='rc-radialpad__grid-lines rc-radialpad__grid-lines--r'
					d={r_path}
				/>
				<path 
					className='rc-radialpad__grid-lines rc-radialpad__grid-lines--t'
					d={t_path}
				/>
			</svg>
		);
	}
}

export default RadialPadGrid;