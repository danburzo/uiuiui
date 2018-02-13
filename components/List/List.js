import React from 'react';

import { noop } from '../util/functions';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.onSelect = this.onSelect.bind(this);
	}

	onSelect(value) {
		this.props.onChange(value, this.props.property);
	}

	render() {

		let {
			value,
			tabIndex
		} = this.props;

		return (
			<ul 
				className='rc-list'
				tabIndex={tabIndex}
			>
				{ 
					React.Children.map(
						this.props.children,
						child => 
							React.cloneElement(child, {
								onSelect: this.onSelect,
								tabIndex: tabIndex,
								selected: value === child.props.value
							})
					) 
				}
			</ul>
		);
	}
}

List.defaultProps = {
	tabIndex: '0',
	value: null,
	onChange: noop,
	property: undefined
};

export default List;