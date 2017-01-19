React=require('react');

var DeleteTask=React.createClass({
    getInitialState: function () {
        console.log('get initial state');
        return {
            items: []
        }
    },
    componentWillMount: function () {
        console.log('componentWillMount');
    },
    componentDidMount: function () {
        console.log('componentDidMount');
        var items = localStorage.getItem("items");
        this.setState({
            items: JSON.parse(items)
        })
    },
    
})