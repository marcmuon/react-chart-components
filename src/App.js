import React, { Component } from 'react';
import './App.css';
import Splash from './components/Splash/Splash.js';
import Header from './components/Header/Header.js';
import Graph from './components/Graph/Graph.js';
import InsuranceGraph from './components/InsuranceGraph/InsuranceGraph.js';
import SelectorList from './components/SelectorList/SelectorList.js';


class App extends Component {
  state = {
    yearly: [],
    novac: [],
    vac: [],
    titles: [],
    buttons: [],
    mult: 15,
  }

  componentDidMount() {
    fetch('/2017_trend_novac.json')
      .then(response => response.json())
      .then(data => {        
        this.setState({
          yearly: data,
        });
      });
    
    fetch('/2017_ins_novac.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          novac: data,
        });
      });
    
    fetch('/2017_dtap.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          vac: data,
        });
      });

    fetch('/2017_all.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          titles: data,
        });
      });
  }

  barGen = (index) => {
    if (index === 0) {
      fetch('/2017_dtap.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index){
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
      }
    else if (index === 1) {
      fetch('/2017_polio.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index){
        this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
    }
    else if (index === 2) {
      fetch('/2017_mmr.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index){
          this.state.titles[i].dark = false;
        } 
      }
      this.setState(this.state);
    }
    else if (index === 3) {
      fetch('/2017_hib.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index) {
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
    }
    else if (index === 4) {
      fetch('/2017_hepb.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index) {
          this.state.titles[i].dark = false;
        } 
      }
      this.setState(this.state);
    }
    else if (index === 5) {
      fetch('/2017_varicella.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index) {
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);  
    }
    else if (index === 6) {
      fetch('/2017_pcv.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index){
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
    }
    else if (index === 7) {
      fetch('/2017_hepa.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index) {
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
    }
    else if (index === 8) {
      fetch('/2017_rota.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index) {
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
    }
    else if (index === 9) {
      fetch('/2017_combined.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            vac: data,
          });
        });
      this.state.titles[index].dark = true;
      let arr = [0,1,2,3,4,5,6,7,8,9];
      for (let i of arr) {
        if (i !== index) {
          this.state.titles[i].dark = false;
        }
      }
      this.setState(this.state);
    }
  }

  render() {    
    return (
      <div className="App">
        <Splash />
        <div className="Container">
          <Header>% of US Children with No Vaccinations, 2013-2017</Header>  
          <Graph
          array={this.state.yearly}  >
          </Graph>
        </div>
        <div className="Container">
          <Header>% of US Children with No Vaccinations by Insurance Type, 2017</Header>
          <InsuranceGraph
          array={this.state.novac}
          multiplier={this.state.mult}  >
          </InsuranceGraph>
        </div>
        <div className="Container">
          <Header>% of US Children Receiving Certain Vaccinations by Insurance Type, 2017</Header>
            <SelectorList array={this.state.titles}
            gotClicked={this.barGen} ></SelectorList>
            <InsuranceGraph
          array={this.state.vac}
          multiplier={this.state.mult/15}  >
          </InsuranceGraph>
        </div>
      </div>
    );
  }
}

export default App;
