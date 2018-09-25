import React , { Component } from "react"

class Customapp extends Component {
	render(){
		return(
			<div class="Customappmain">
				<div className="header">
					<form>
						<input placeholder="enter task">
						</input>
						<button type="submit">add</button>
					</form>
				</div>			
			</div>
		);
	}
};

export default Customapp;