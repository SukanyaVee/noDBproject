import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import axios from 'axios';

import NewTrans from './NewTrans'
import DispBudget from './DispBudget'
import DeleteTrans from './DeleteTrans'
import UpdateTrans from './UpdateTrans'

class App extends Component {

  constructor(){
    super();
    this.state= {
      transactions: [],
      income: 0,
      tempIncome: 0, 
      expenses: 0,
      savings: 0,
      filterMonth: '',
      // tempfilterMonth:'' 
    };
    
    this.newTran = this.newTran.bind(this); 
    this.deleteTran = this.deleteTran.bind(this);
    this.updateTran = this.updateTran.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:3000/api/budgeting').then(resp=>{
      this.setState({
        transactions: resp.data.transactions,
        expenses: parseFloat(resp.data.expenses.toFixed(2),10)
      })
    }).catch(error=>console.log(error))
  }


  newTran(category,place,amt){
    var d=new Date();
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var singTransaction = {
      // id: id,
      date: d.getDate(),
      month: monthNames[d.getMonth()],
      year: d.getFullYear(),
      category: category, 
      place: place,
      amount: amt
    }
    this.setState({expenses: this.state.expenses+singTransaction.amount, savings: this.state.income-this.state.expenses-singTransaction.amount})
    axios.post('http://localhost:3000/api/budgeting', singTransaction).then(resp=>{this.setState({transactions:resp.data})}).catch(error=>console.log(error))
  }

  deleteTran(id){
    axios.delete(`http://localhost:3000/api/budgeting/${id}`).then(resp=>{this.setState({transactions:resp.data})}).catch(error=>console.log(error))
  }

  updateTran(id, val){
      axios.put(`http://localhost:3000/api/budgeting/${id}`,{place:val}).then(resp=>{this.setState({transactions:resp.data})}).catch(error=>console.log(error))
  }


  render() {
    return (
      <div className="App">
  
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-title">Monthly Budget</p>
        </header>

        <main>
            <div>
              <div display="flex" align-content="space-between">
        
                {/* DISPLAYS TOTALS AND STATIC */}
                    <div>
                      Income: ${this.state.income} <br/>
                      Expenses: ${this.state.expenses}
                      <h3>Savings: ${parseFloat(this.state.savings,10)}</h3>
                    </div>  
                  
                    {/* DISPLAYS TRANSACTIONS */}
                    <div align="right">
                      <input ref="emptyT" placeholder=" Enter Month" onChange={event=>{this.setState({filterMonth: event.target.value})}}/>

                      <button id="filterB" onClick={event=>{
                        // this.setState({filterMonth: this.state.tempfilterMonth})
                        this.refs.emptyT.value = '';
                    axios.get(`http://localhost:3000/api/budgeting?month=${this.state.filterMonth}`).then(resp=>{
                      this.setState({
                        transactions: resp.data.transactions
                      })
                    }).catch(error=>console.log(error))}}>Filter Month</button>
                    
                    <button id="filterB" onClick={event=>{
                    axios.get('http://localhost:3000/api/budgeting').then(resp =>{
                      this.setState({
                        transactions: resp.data.transactions
                      })
                    }).catch(error=>console.log(error))}}>Reset</button>
                    </div>
            </div>  
            <div>
                <br/><br/>

                  <table>
                    <tr>
                      <th>ID</th>
                      <th>Month</th>
                      <th>Date</th>
                      <th>Year</th>
                      <th>Category</th>
                      <th>Place</th>
                      <th>Amount</th>
                      </tr>
                  {this.state.transactions.map(element=><DispBudget transaction={element}/>)
                }</table>

            </div>
          </div>

              <aside width="200px">
              <br/><input  ref="emptyT" placeholder=" Income" onChange={event=>{this.setState({tempIncome: parseFloat(event.target.value,10)})}}/>
                <button onClick={event=>{
                  this.setState({
                    income: this.state.tempIncome, savings: this.state.tempIncome-this.state.expenses
                });
                  this.refs.emptyT.value = '';}}>Set Income</button>
              <br/>
                {/* ACCEPTS NEW TRANSACTIONS */}
                <NewTrans newtrans={this.newTran}/><br/>
                {/* UPDATES TRANSACTIONS */}
                <UpdateTrans updatetrans={this.updateTran}/><br/>
                {/* DELETED TRANSACTIONS */}
                <DeleteTrans deletetrans={this.deleteTran}/>
              </aside>

        </main>  
      </div>
    );
  }
}

export default App;
