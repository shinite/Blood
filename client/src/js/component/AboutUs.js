var React=require("react");
var Donor=require("./Donor");

 var AboutUs=React.createClass({

 	getInitialState: function(){
 		return{
 			data:null,
 		}

 	},

 	Donor: function(){

 		this.setState({data:<Donor />})

 	},

   render: function() {
   	if(this.state.data==null){
     return (
       <div>
       	<button onClick={this.Donor}>CLick </button>
       </div>
     )
 }
 else{
 	return (
       <div>
       {this.state.data}
       </div>)


 }
   }
 });
 module.exports = AboutUs;
