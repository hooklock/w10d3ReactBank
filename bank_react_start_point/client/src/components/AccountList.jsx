var React = require('react');


var AccountList = React.createClass({

  render: function() {

    var allAccounts = this.props.accounts.map(function(account){
      return(
        <div key={account.owner}>

        <h4>{account.owner} - <span><i>£{account.amount.toLocaleString()}</i></span></h4>
        </div>
      )
    })

    return (
      <div>
        <h2>{this.props.accounts[0].type} <span> £{this.props.total.toLocaleString()}</span></h2>
        {allAccounts}
      </div>
    );
  }

});

module.exports = AccountList;
