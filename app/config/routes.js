var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var main = require('../component/main');
var Responsive=require('../container/Responsive');

var routes = (
  <Router history={hashHistory}>
    <Route path='/Responsive' component={Responsive}/>
  </Router>
);

module.exports = routes;