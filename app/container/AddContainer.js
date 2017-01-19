React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var AddContainer = React.createClass({

    render: function () {
        return (
            <div>
                <form>
                    <br />
                    <div className="row">
                        <div className="input-field col s6">
                            <input type='text' placeholder='TASK' ref='inputText' />
                        </div>
                    </div>

                    <button className="waves-effect waves-light btn" onClick={() => this.props.add(this.refs.inputText.value)}>ADD</button>


                </form>
            </div>
        )
    }
})
module.exports = AddContainer;
