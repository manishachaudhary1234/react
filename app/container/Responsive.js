React=require('react');
var ReactRouter = require('react-router');
var Responsive=React.createClass({
    render:function(){
        return(
        <div> <div className="row">
    <div className="col s12 card-panel teal lighten-2"><p className="flow-text center-align" >s12</p></div>
    <div className="col s12 m4 l2 card-panel teal lighten-2"><p className="flow-text center-align">s12 m4</p></div>
    <div className="col s12 m4 l8 card-panel teal lighten-2"><p className="flow-text center-align">s12 m4</p></div>
    <div className="col s12 m4 l2 card-panel teal lighten-2"><p className="flow-text center-align">s12 m4</p></div>
  </div>
        </div>)
    }
})
module.exports=Responsive;