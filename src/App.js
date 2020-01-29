import React from 'react';
import './App.css';
import Game from './game';
import Button from './button';



class App extends React.Component{
constructor(props){
  super(props);
  this.state={}
  this.game= new Game()
}

//Call update every 100 millisecond
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
          Bread : {this.game.manufacturedBread} <br/>
          <Button disabled={!this.game.canMakeBread()} onClick={() => this.game.makeBread()} 
          value={"Make Bread"}/>
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
              <Button style={{marginLeft: "20px"}} onClick={this.game.increasePrice} 
              value={"+"} />
              <Button style={{marginLeft: "10px"}} disabled={!this.game.canDecreasePrice()} onClick={this.game.decreasePrice} 
              value={"-"}/>
            </tr>
            <tr>
              <td>Supply/Demand : </td>
              <td>%{this.game.demandRate} </td>
            </tr>
            <tr>
            <td>Bank : (Interest: %{this.game.loanRate}) </td>
            <td>
            <Button disabled={!this.game.canTakeLoan()} onClick={this.game.takeLoan} 
            value={`Take Loan ${this.game.loanMoney}$`} />
            <Button disabled={!this.game.canRepayLoan()} onClick={this.game.repayLoan} 
            value={`Repay Loan ${this.game.repayLoanMoney}$`} />
            </td>
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
            <Button style={{marginLeft: "10px"}} disabled={!this.game.canBuyMaterial()} onClick={this.game.buyMaterial} 
            value={`Buy Material ${this.game.materialCost}$`} />
            </td>
          </tr>
          <tr>
          <td> Store Manager  : </td>
          <td> {this.game.isAutoBuyerActive ? "Enabled":"Disabled"}
          <Button style={{marginLeft: "10px"}} disabled={!this.game.canBuyAutoBuyer()} onClick={this.game.buyAutoBuyer} 
          value={`Buy Manager ${this.game.autoBuyerCost}$`} />
          </td>
        </tr>
          <div style={{marginTop: "20px"}}> 
          Workers </div>
          <hr />
          <tr>
          <td>Baker's Apprentice</td>
          <td>{this.game.autoGenerators.apprentice}
          <Button style={{marginLeft: "10px"}} disabled={!this.game.canBuyAutoGenerator("APPRENTICE")} onClick={() => this.game.buyAutoGenerator("APPRENTICE")}
          value={`Buy ${this.game.autoGenerators.apprenticeCost}$`} />
          </td>
          </tr>
          <tr>
          <td>Baker's Foreman</td>
          <td>{this.game.autoGenerators.foreman}
          <Button style={{marginLeft: "10px"}} disabled={!this.game.canBuyAutoGenerator("FOREMAN")} onClick={() => this.game.buyAutoGenerator("FOREMAN")}
          value={`Buy ${this.game.autoGenerators.foremanCost}$`} />
          </td>
          </tr>
          <tr>
          <td>Baker's Master</td>
          <td>{this.game.autoGenerators.master}
          <Button style={{marginLeft: "10px"}} disabled={!this.game.canBuyAutoGenerator("MASTER")} onClick={() => this.game.buyAutoGenerator("MASTER")}
          value={`Buy ${this.game.autoGenerators.masterCost}$`} />
          </td>
          </tr>
          </table>
        </div>
      </div>
    );
  }
  }


export default App;
