React = require('react');
//var items = JSON.parse(localStorage.getItem('items')) || [];
var ViewContainer = React.createClass({

  render: function () {
    return (
      <div className="row">
      <div className="col s6 offset-s3"><ul className="collection">
        {
          this.props.items.map((item, key) => {
            return <li className="collection-item" key={item.key}> <input type="checkbox" id={item.key} />
              <label htmlFor={item.key}>{item.text}</label></li>
          })
        }
      </ul>
     </div>
      </div>
    )

  }
})
var main = React.createClass({
  getInitialState: function () {
    return {
      items: [],
      showTodo: false,
      todo:''
    }
  },
  /*save: function () {
    var str = JSON.stringify(this.state.items);
    localStorage.setItem("items", str);
  },*/

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

  add: function () {
    
    var temp = this.state.items;
    if(this.state.todo.length>0)
    {
    temp.push({
      text: this.state.todo,
      key: Date.now()
    });
  
    }
    this.setState({ items: temp,todo:'' })
    /*localStorage.setItem('items', JSON.stringify(items));
    this.setState({ items: items });*/
   

  },
  change: function () {
    this.setState({ showTodo: !this.state.showTodo })
  },
  view: function () {
    console.log('view');
    <ul className="collection">
      {
        this.state.items.map((item, key) => {
          <li className="collection-item" key={item.key}> <input type="checkbox" id={item.key} />
            <label htmlFor={item.key}>{item.text}</label></li>
        })
      }
    </ul>
  },
  setTodo:function(e){
    todo=this.state.todo;
    this.setState({todo:e.target.value})
  },
  render: function () {
    return (
      <div className="container">
        <form>
          <br />
          <div className="row">
            <div className="input-field col s6 offset-s3 center-align">
              <input type='text' id="do" onChange={this.setTodo} value={this.state.todo} className={this.state.todo.length>0?"valid":"invalid"}  id="todo" ref='inputText'  />
                          <label htmlFor="todo" data-error="wrong" data-success="right"></label>

            </div>
          </div>
          <div className="row">
            <div className="col s6 offset-s5">
              <button className="waves-effect waves-light btn" onClick={() => this.add()}>ADD</button>
            </div>


            {
              this.state.items.length > 0 ?
                <div className="row"><ViewContainer items={this.state.items} />
                  <div className="col s6 offset-s5">
                  <button className="waves-effect waves-light btn" onClick={this.delete}>DONE</button>
                </div> 
                </div>
                : 
                null
            }
          </div>
        </form>
      </div>

    )
  }
});

module.exports = main;