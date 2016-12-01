var React= require('react')
var ReactDOM=require('react-dom')

var Donor= React.createClass({

getInitialState:function()
{	
    return {Name:'',BloodGroup:'',Hospital:'',UnitsofBlood:''};
},
handleNameChange: function(e) {
    this.setState({Name: e.target.value});
  },
handleBloodGroupChange: function(e) {
    this.setState({BloodGroup: e.target.value});
  },
  handleHospitalChange: function (e) {
  	this.setState({Hospital:e.target.value});
  },
  handleUnitsofBloodChange: function(e){
  	this.setState({UnitsofBlood:e.target.value});
  },
sendDataToParent: function()
{

  console.log("inside s2parent")

	var jsonData = {
    Name:this.state.Name,
    BloodGroup:this.state.BloodGroup,
    Hospital:this.state.Hospital,
    UnitsofBlood:this.state.UnitsofBlood
    };
    console.log(jsonData)
  
    $.ajax({
      url: 'http://localhost:8080/bloodbank/add',
      type:'POST',
      dataType: 'json',
      data:jsonData,
     
      success: function(data1) {
         alert("success add")
        //console.log(data1);
      }.bind(this),
      error: function(xhr, status, err) {
        alert("error")
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
    this.setState({Name:'',BloodGroup:'',Hospital:'',UnitsofBlood:''});
      alert(jsonData);
},

reset:function(){
     this.setState({Name:'',BloodGroup:'',Hospital:'',UnitsofBlood:''});
     alert("Reset successfully");
   },

render: function(){
   return (
     <div>  
     <h2 id='heading'>Blood Donor</h2>
      <div id="form">
      <ul>
      <p>
      <li><em>Name:</em>{" "}<input type="text" required placeholder='Name of Patient' value={this.state.Name} onChange={this.handleNameChange}/>
      </li>
      </p>
      <p>
      <li><em>Blood Group:</em>{" "}<input type="text" placeholder='Blood Group' required id="bloodgroup" value={this.state.BloodGroup} onChange={this.handleBloodGroupChange}/>
      </li></p>
      <p>
      <li><em>Hospital Name:</em>{" "}<input type="text" placeholder='Nearest Hospital' required id="nameofhospital"value={this.state.Hospital} onChange={this.handleHospitalChange}/>
      </li></p>
      
      
      <button id="submit" type="button" className="btn btn-primary" onClick={this.sendDataToParent}>Submit</button>
      {"  "}
      <button id="submit" type="button" className="btn btn-primary" onClick={this.reset}>Reset</button>
     
      </ul>
     </div>
     </div>
   )
 }
})

module.exports=Donor;