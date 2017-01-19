React = require('react');
var ViewContainer = React.createClass({
    getInitialState: function () {

        return {
            items: []
        }
    },

    componentDidMount: function () {
        var items = localStorage.getItem("items");
        this.setState({
            items: JSON.parse(items)
        })
    },

    render: function () {
        return (
            <div><ul className="collection">
                {
                    this.state.items.map((item, key) => {
                        return <li className="collection-item" key={item.key}> <input type="checkbox" id={item.key} />
                            <label htmlFor={item.key}>{item.text}</label></li>
                    })
                }
            </ul>

            </div>
        )

    }
});
module.exports = ViewContainer;
