var React= require('react');
var ReactDOM=require('react-dom');
var {browserHistory, Route,Router,IndexRoute}=require('react-router');
var Home=require("./component/Home");
var AboutUs=require("./component/AboutUs");
var NavBar=require("./component/NavBar");
var Reciver=require("./component/Reciver");
var Donor=require("./component/Donor");
var LoginComponent=require('./component/LoginComponent');
var LogoutComponent=require('./component/LogoutComponent');
var SignUp=require('./component/SignUp');


var HomePage=React.createClass({

  render: function() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    )
  }

});

ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={HomePage}>
    <IndexRoute component={HomePage}/>
    <Route path="/Home" component={Home}/>
    <Route path="/AboutUs" component={AboutUs}/>
    <Route path="LoginComponent" component={LoginComponent}></Route>
    <Route path="LogoutComponent" component={LogoutComponent}></Route>
    <Route path="SignUp" component={SignUp}></Route>
    <Route path="/Reciver" component={Reciver}/>
    <Route path="/Donor" component={Donor}/>
  </Route>
</Router>,
document.getElementById('app')); //puts the virtual dom & injects into the main physical DOM.


module.exports=HomePage;