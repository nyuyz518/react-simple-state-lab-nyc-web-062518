import React, { Component } from 'react';
import Cell from './cell.js';

class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
    //replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>

    )
  }

}

export default Matrix;
