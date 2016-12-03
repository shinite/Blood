var React = require('react');
var {browserHistory}= require ('react-router');
var SignUp=require('./SignUp');



var LoginComponent = React.createClass({

  getInitialState:function(){
    return {data:null}
  },  

checkUser:function(){
var userObj={"username":this.refs.userName.value,"password":this.refs.passWord.value};

$.ajax({
  url:'http://localhost:8080/login',
  type: 'POST',
  data:userObj,
  dataType:"JSON",
  success: function(data)
  {
    
      //alert("Hello " + "Mr "+ this.refs.userName.value);
 //console.log("Ajax login success");
   browserHistory.push('/');
  }.bind(this),
  error: function(err)
  {
    console.log(err);
  }.bind(this)

});
},

SignUp:function(){

  this.setState({data:<SignUp/>})

},

render : function () {

  if(this.state.data==null){

return(

  <div className="container">

      <h1 className="form-signin-heading">Please LOGIN</h1>

      <div className="input-group input-group-lg">

          <span className="input-group-addon">Username</span>

          <input type="text" ref='userName' className="form-control"></input>

      </div>

      <br></br>

      <div className="input-group input-group-lg">

          <span className="input-group-addon">Password</span>

          <input type="password" ref='passWord' className="form-control"></input>

      </div>

      <br></br>

      <button onClick={this.checkUser} className="btn btn-lg btn-primary btn-block">LOGIN</button>

      <br></br>

      <br></br>

      <button onClick={this.SignUp} className="btn btn-lg btn-primary btn-block">New User Sign Up</button>

      <br></br>

      

  </div>

)}

else{
  return (
    <div>
      {this.state.data}
    </div>
  )
}

}

});
module.exports = LoginComponent;