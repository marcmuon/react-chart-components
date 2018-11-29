import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    yearly: [],
    novac: [],
    vac: [],
    titles: [],
    buttons: [],
  }

  doFetch = () => {
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

  componentDidMount() {
    this.doFetch();
  }

  render() {    
    return (
      <div className="App">
        <div className="Container">
          <div className="Header">
            <div>% of US Children with No Vaccinations, 2013-2017</div>
          </div>
          <div className="Graph">
            <div className="Graph-Description">For children aged 19–35 months </div>
              <div className="Graph-BarChart">
              {
                this.state.yearly.map((year) => (
                  <div className="Graph-Bar" style={{height: year.pct_est*80 + "%"}} >
                    {year.year}: {year.pct_est}% 
                  </div>
                ))
              }
              </div>
          </div>
        </div>
        <div className="Container">
          <div className="Header">
            <div>% of US Children with No Vaccinations by Insurance Type, 2017</div>
          </div>
          <div className="Graph">
            <div className="Graph-Description">For children aged 19–35 months</div>
              <div className="Graph-BarChart">
              {
                this.state.novac.map((ins) => (
                  <div className="Graph-Bar" style={{height: ins.pct_est*15 + "%"}} >
                    {ins.insurance}: {ins.pct_est}% 
                  </div>
                ))
              }
              </div>
          </div>
        </div>
        <div className="Container">
          <div className="Header">
            <div>% of US Children Receiving Certain Vaccinations by Insurance Type, 2017 </div>
          </div>
            <div className="Linklist" id="list">
            {
              this.state.titles.map((title, index) => ( 
                  <button className={title.dark === true ? "Button-Dark": "Button-Light"} onClick={() => this.barGen(index)} >{title.Vaccine}</button>
                
                  ))
            }
            </div>
            <div className="Graph">
              <div className="Graph-Description">For children aged 19–35 months </div>
                
                <div className="Graph-BarChart">
                {
                  this.state.vac.map((ins) => (
                    <div className="Graph-Bar" style={{height: ins.pct_est + "%"}} >
                    {ins.insurance}: {ins.pct_est}% 
                    </div>
                  ))
                }
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
