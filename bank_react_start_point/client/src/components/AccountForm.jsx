var React = require("react");
var AccountList = require("./AccountList.jsx");

var AccountForm = React.createClass({

  getInitialState: function(){
    return {owner: "", amount: 0, type: "Personal"};
    //Setting "Personal" here means the drop down does not have to be changed to get type passed on initial submit
  },

  handleOwnerChange: function(e){
    this.setState({owner: e.target.value});
  },

  handleAmountChange: function(e){
    this.setState({amount: parseFloat(e.target.value)});
    //When number was input, went in as String - adding parseFloat here makes it go in as a number
  },

  handleTypeChange: function(e){
    this.setState({type: e.target.options[e.target.selectedIndex].value});
    //The above for when an options solution is used as opposed to just e.target.value
  },

  handleSubmit: function(e){
    e.preventDefault();
    this.props.addAccount({owner: this.state.owner, amount: this.state.amount, type: this.state.type});
    this.setState({owner: "", amount: 0, type: ""});
  },

  render: function(){

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Account Owner" value={this.state.owner} onChange={this.handleOwnerChange}/>
          <input type="number" placeholder="Account Amount" value={this.state.amount} onChange={this.handleAmountChange}/>
          <select value={this.state.type} onChange={this.handleTypeChange}>
            {/*value and onChange get added to the select tag to pass through the value of the option*/}
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
          </select>
          <input type="submit" value="Add Account"/>
        </form>
      </div>
    )
  }
})

module.exports = AccountForm;
