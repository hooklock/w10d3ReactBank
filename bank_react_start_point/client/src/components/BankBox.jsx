var React = require("react");
var Accounts = require("../sample_accounts.js");
var AccountForm = require("./AccountForm.jsx");
var AccountList = require("./AccountList.jsx");

var BankBox = React.createClass({

  getInitialState: function(){
    return {accounts: Accounts}
  },

  handleAddAccount: function(account){
    account.id = Date.now();
    var newAccounts = this.state.accounts.concat([account]);
    this.setState({accounts: newAccounts});
  },

  accountTotal: function(accounts){
    var total = 0;
    for(var account of accounts){
      total += account.amount;
    }
    console.log(total);
    return total;
  },

  filteredAccounts: function(type){
    var accountList = this.state.accounts.filter(function(account){
      return account.type === type
    })
    return accountList;
  },

  render: function(){

    return(
      <div>
        <h1>The Bank</h1>
        <h2>Total Holdings: £{this.accountTotal(this.state.accounts).toLocaleString()}</h2>

        <AccountList total={this.accountTotal(this.filteredAccounts("Personal"))} accounts={this.filteredAccounts("Personal")}/>

        <AccountList total={this.accountTotal(this.filteredAccounts("Business"))} accounts={this.filteredAccounts("Business")}/>

        <AccountForm addAccount={this.handleAddAccount}/>

      </div>
    )
  }
})

module.exports = BankBox;
