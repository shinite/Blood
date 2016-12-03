var React=require("react");
var {Link}=require('react-router');
var Navlink=require('./Navlink');
var Home=require('./Home');
var AboutUs=require('./AboutUs');
var NavBar=React.createClass({
  
   render: function() {
     return (
       <ul className="topnav">
       <li><Navlink to="/Home">Home</Navlink></li>
        <li><Navlink to ="/AboutUs">About Us</Navlink></li>
       <li><Navlink to ="/Reciver">Need Blood</Navlink></li>
        <li><Navlink to ="/Donor">Donate Blood</Navlink></li>
       <li className="right"><Navlink to="/LoginComponent">Login</Navlink></li>
       <li className="right"><Navlink to="/LogoutComponent">Logout</Navlink></li>
      
       </ul>
     )
   }
 });
 module.exports = NavBar;
