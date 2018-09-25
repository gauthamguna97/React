import React, { Component } from "react"


class UserList extends Component {

	createList(item) {
		console.log(item);
		return <li key={item.key}>{item.text}</li>
	};
	
	render(){
		var outList=this.props.entries;
		console.log(outList)
		var listItems = outList.map(this.createList)
		return(
			<ul className="TheList">
				{listItems}
			</ul>	
		)
	};
};

export default UserList;