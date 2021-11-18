import React, {Component, Fragment} from "react";

class Counter extends Component {
    state = {
        count: 0,
        tags : []
    }
    styles={
        fontSize :60
    }

    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement(product){
          console.log(this);
          console.log(product.id)
          this.setState({count: this.state.count+1});
    }

    render() {
        return <Fragment>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() =>this.handleIncrement({id:1})} type="button" className="btn btn-secondary btn-sm">Increment</button>
            {this.state.tags.length === 0 && "Please create a new tag!"}
            <ul>{this.renderTags()}</ul>
        </Fragment>
    }

    getBadgeClasses() {
        let classes = "badge rounded-pill bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
}

export default Counter;


/*
* truthy and falsy concept of javascript
*
* true && false ->> false
* true && 'Hi' ->> "Hi"
* */

/*
* in javascript a function is an object that have her method
* for exemple , i use bind that pass the this state to the method when we called
* */

/*insted of this solution ( of bind method )
* we can use arrow function
*  exemple :
* handleIncrement = () => { console.log(this)}
*
* */
