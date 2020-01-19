import React from 'react';
import './App.css';
import Game from './game';



class App extends React.Component{
constructor(props){
  super(props);
  this.state={
  }
  this.game= new Game()
}

//Call update every 40 millisecond
componentDidMount(){
  setInterval(()=> {
    this.game.update();
    this.setState({});
  },100)
}

update = () => {
this.game.update();
}

  render(){
    return (
      <div className="App">
        <header className="App-header">
          BAKERY
        </header>
        <div style={{marginBottom: '12px'}}>
          Bread : {this.game.currentBread} <br/>
          <button disabled={!this.game.canMakeBread()}
          onClick={this.game.makeBread}> Make Bread </button>
        </div>
        <div>
          Business
          <hr />
          <div>
            <table>
            <tr>
              <td>Money in the Safe : </td>
              <td>{this.game.money}$ </td>
            </tr>
            <tr>
              <td>Breads in Inverntory :</td>
              <td>
              <td>{this.game.currentBread} </td>
              </td>
            </tr>
            <tr>
              <td>Price : </td>
              {this.game.price} $
              <button style={{marginLeft: "20px"}} onClick={this.game.increasePrice}> + </button>
              <button style={{marginLeft: "10px"}} disabled={!this.game.canDecreasePrice()} onClick={this.game.decreasePrice}> - </button>            </tr>
            <tr>
              <td>Supply/Demand : </td>
              <td>%{this.game.demandRate} </td>
            </tr>
            </table>
          </div>
          <div style={{marginTop: "20px"}}> 
          Production </div>
          <hr />
          <table>
          <tr>
            <td style={{width: "150px"}}> Bread/Second : </td>
            <td> {this.game.lastManufacturedRate} </td>
          </tr>
          <tr>
            <td> Material  : </td>
            <td> {this.game.material} gr
            <button style={{marginLeft: "10px"}} disabled={!this.game.canBuyMaterial()} 
            onClick={this.game.buyMaterial}> Buy Material ({this.game.materialCost}$) </button>
            </td>
          </tr>
          <div style={{marginTop: "20px"}}> 
          Workers </div>
          <hr />
          <tr>
          <td>Baker's Apprentice</td>
          <td>{this.game.autoGenerators.apprentice}
          <button style={{marginLeft: "10px"}} disabled={!this.game.canBuyAutoGenerator("APPRENTICE")} 
          onClick={() => this.game.buyAutoGenerator("APPRENTICE")}> 
          Buy ({this.game.autoGenerators.apprenticeCost}$) </button>
          </td>
          </tr>
          <tr>
          <td>Baker's Foreman</td>
          <td>{this.game.autoGenerators.foreman}
          <button style={{marginLeft: "10px"}} disabled={!this.game.canBuyAutoGenerator("FOREMAN")} 
          onClick={() => this.game.buyAutoGenerator("FOREMAN")}> 
          Buy ({this.game.autoGenerators.foremanCost}$) </button>
          </td>
          </tr>
          <tr>
          <td>Baker's Master</td>
          <td>{this.game.autoGenerators.master}
          <button style={{marginLeft: "10px"}} disabled={!this.game.canBuyAutoGenerator("MASTER")} 
          onClick={() => this.game.buyAutoGenerator("MASTER")}> 
          Buy ({this.game.autoGenerators.masterCost}$) </button>
          </td>
          </tr>
          </table>
        </div>
      </div>
    );
  }
  }


export default App;
