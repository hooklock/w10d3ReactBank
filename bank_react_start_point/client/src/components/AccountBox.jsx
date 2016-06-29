var React = require("react");
var AccountList = require("")

var AccountBox = React.createClass({

  getInitialState: function(){
    return {owner: "", amount: 0, type: "Personal"};
  },

  handleOwnerChange: function(e){
    this.setState({owner: e.target.value});
  },

  handleAmountChange: function(e){
    this.setState({amount: parseFloat(e.target.value)});
  },

  handleTypeChange: function(e){
    this.setState({type: e.target.options[e.target.selectedIndex].value});
  },

  handleSubmit: function(e){
    e.preventDefault();
    this.props.addAccount({owner: this.state.owner, amount: this.state.amount, type: this.state.type});
    this.setState({owner: "", amount: 0, type: ""});
  },

  render: function(){

    var allAccounts = this.props.accounts.map(function(account){
      return(
        <div key={account.owner}>

        <h4>{account.owner} - <span><i>£{account.amount.toLocaleString()}</i></span></h4>
        </div>
      )
    })

    return(
      <div>
        <h2>{this.props.accounts[0].type} <span> £{this.props.total.toLocaleString()}</span></h2>
        {allAccounts}
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Account Owner" value={this.state.owner} onChange={this.handleOwnerChange}/>
          <input type="number" placeholder="Account Amount" value={this.state.amount} onChange={this.handleAmountChange}/>
          <select value={this.state.type} onChange={this.handleTypeChange}>
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
          </select>
          <input type="submit" value="Add Account"/>
        </form>
      </div>
    )
  }
})

module.exports = AccountBox;
