import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'primereact/card';

class Blog extends Component {
	state = {  }

	constructor(props) {
		super(props);

		this.renderCard = this.renderCard.bind(this);
	}

	renderCard() {
		var cardMenu = [];

		for (var i = 0; i < 5; i++) {
			cardMenu.push(
				<Card style={{background: '#222', color: 'white'}} className="p-col-2 center_text">
					<h2>Placeholder title</h2>
					<h4>Placeholder subtitle</h4>
					<p>Some text description</p>
					<NavLink to={"/blog"}>
						<span className="readmore">Read more</span>
					</NavLink>
				</Card>
			)
		}

		return cardMenu;
	}

	render() { 
		return (  
			<div className="p-grid p-justify-around p-nogutter">
				{ this.renderCard() }
			</div>
		);
	}
}
 
export default Blog;