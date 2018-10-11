import React, { Component } from "react"


class UserList extends Component {

	createList(i) {
		console.log('count')
		console.log(i);
		return <li key={i.key}>{i.text}</li>
		//
	};
	
	render(){
		var outList=this.props.entries;
		console.log(outList)
		var listItems = outList.map(this.createList)
		return(
			<ul className="TheList">
				{listItems}
			</ul>
			//	
		)
	};
};

export default UserList;