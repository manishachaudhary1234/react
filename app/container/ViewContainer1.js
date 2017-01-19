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

    delete: function () {
        var arr = new Array();
        arr = this.state.items;
        var items = this.state.items;
        var i;
        console.log('-----');
        console.log("fitered item");
        arr = arr.filter(function (arrItem) {
            return !document.getElementById(arrItem.key).checked
        }
        );





        this.setState({ items: arr });
        console.log('items', items);
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
                <button className="waves-effect waves-light btn" onClick={this.delete}>DELETE</button>
            </div>
        )

    }
});

module.exports = ViewContainer;