import React, { Component } from 'react';
import './InsuranceGraph.css';

class InsuranceGraph extends Component {
  render() {
    return (
        <div className="Graph">
            <div className="Graph-Description">For children aged 19–35 months </div>
              <div className="Graph-BarChart">
              {
                this.props.array.map((ins) => (
                  <div className="Graph-Bar" style={{height: ins.pct_est*this.props.multiplier + "%"}} >
                    {ins.insurance}: {ins.pct_est}% 
                  </div>
                ))
              }
              </div>
          </div>
    );
  }
}

export default InsuranceGraph;