import React, { Component } from 'react';
import './Graph.css';

class Graph extends Component {
  render() {
    return (
        <div className="Graph">
            <div className="Graph-Description">For children aged 19–35 months </div>
              <div className="Graph-BarChart">
              {
                this.props.array.map((year) => (
                  <div className="Graph-Bar" style={{height: year.pct_est*80 + "%"}} >
                    {year.year}: {year.pct_est}% 
                  </div>
                ))
              }
              </div>
          </div>
    );
  }
}

export default Graph;