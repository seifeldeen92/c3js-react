import React, { Component } from 'react';
import c3 from 'c3';
import PropTypes from 'prop-types';
import './RotatedAxis.css';

export default class RotatedAxis extends Component {
	static propTypes = {
		columns: PropTypes.arrayOf(PropTypes.any),
		types: PropTypes.object,
		axis: PropTypes.object,
	};

	componentDidMount() {
		this.updateAxis();
	}
	componentDidUpdate() {
		this.updateAxis();
	}

	updateAxis() {
		const { columns, types, axis } = this.props;
		c3.generate({
			bindto: '#rotated-axis',
			data: { columns: columns, types: types },
			axis: axis,
		});
	}

	render() {
		return <div id="rotated-axis" />;
	}
}
