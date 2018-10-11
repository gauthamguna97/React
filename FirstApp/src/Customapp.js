import React , { Component } from "react"
import UserList from './UserList.js'
import './Customapp.css'

class Customapp extends Component {
	

	constructor(props) {
		super(props)
		this.addItem = this.addItem.bind(this)
		this.state = {items:[]}
	}

	addItem(item) {
		if (this._inputElement.value !== "") {
			
			var newItem = {
      			text: this._inputElement.value,
      			key: Date.now()
    		};

    		this.setState((prevState)=>{
    			return {
    				items : prevState.items.concat(newItem)
    			}
    		})

    		this._inputElement.value = "";

    		console.log(this.state)

    		item.preventDefault();
		}
	}

	render() {
		return(
			<div className="Customappmain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input ref={(a)=>this._inputElement = a} 
							placeholder="enter task">
						</input>
						<button type="submit">add</button>
					</form>
				</div>
				<UserList entries={this.state.items}/>			
			</div>
		);
	}
};

export default Customapp;
