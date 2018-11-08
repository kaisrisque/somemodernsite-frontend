import React, { Component } from 'react';
import { Card } from 'primereact/card';
import Typist from 'react-typist';

import FeaturedProjects from '../components/FeaturedProjects'
import LatestBlogPosts from '../components/LatestBlogPosts'

class Home extends Component {
	state = {  }
	render() { 
		return (  
			<div className="spacing main_container">
				<Card style={{background: '#111', color: 'white'}}  className="p-col-6 center_text">
					<Typist
						className="typist"
						avgTypingSpeed={40}
						startDelay={500}
					>
						<span>Welcome to my website!</span>
					</Typist>
				</Card>
				<br></br>
				<div className="p-col-6">
					<FeaturedProjects />
				</div>
				<br></br>
				<div className="p-col-6">
					<LatestBlogPosts />
				</div>
			</div>
		);
	}
}
 
export default Home;