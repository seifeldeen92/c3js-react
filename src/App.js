import React, { Component } from 'react';
import RotatedAxis from './RotatedAxis';
import 'c3/c3.min.css';

const columns = [['data1', 30, 200, 100, 400, 150, 250], ['data2', 50, 20, 10, 40, 15, 25]];
const types = { data1: 'bar' };
const axis = { rotated: true };

class App extends Component {
	render() {
		return <RotatedAxis types={types} axis={axis} columns={columns} />;
	}
}

export default App;
