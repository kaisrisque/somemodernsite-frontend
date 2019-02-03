import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
// import Trianglify from 'trianglify'

import MainLayout from './MainLayout';
import NotFound from '../../generic_components/views/NotFound';
import '../assets/main.css';

class Main extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		pngBackground: '',
	// 		height: 0,
	// 	}

	// 	this.resizeId = null;

	// 	this.eventHandler = this.eventHandler.bind(this);
	// 	this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	// 	this.checkWindowDimensions = this.checkWindowDimensions.bind(this);
	// }

	// componentDidMount() {
	// 	this.updateWindowDimensions();
	// 	window.addEventListener('resize', this.eventHandler);
	// 	window.addEventListener('scroll', this.eventHandler);
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('resize', this.eventHandler);
	// 	window.removeEventListener('scroll', this.eventHandler);
	// }

	// eventHandler() {
	// 	clearTimeout(this.resizeId);
	// 	this.resizeId = setTimeout(this.checkWindowDimensions, 100);
	// }

	// checkWindowDimensions() {
	// 	let height = window.document.body.offsetHeight;
	// 	if (this.state.height !== height) {
	// 		this.updateWindowDimensions();
	// 	}
	// }

	// updateWindowDimensions() {
	// 	this.setState({ 
	// 		height: window.document.body.offsetHeight,
	// 		pngBackground: Trianglify({
	// 			width: window.document.body.offsetWidth,
	// 			height: window.document.body.offsetHeight,
	// 			cell_size: 100 + Math.random() * (130 - 100),
	// 			x_colors: ["#6e40aa","#6f40aa","#7140ab","#723fac","#743fac","#753fad","#773fad","#783fae",
	// 			"#7a3fae","#7c3faf","#7d3faf","#7f3faf","#803eb0","#823eb0","#833eb0","#853eb1","#873eb1",
	// 			"#883eb1","#8a3eb2","#8b3eb2","#8d3eb2","#8f3db2","#903db2","#923db3","#943db3","#953db3",
	// 			"#973db3","#983db3","#9a3db3","#9c3db3","#9d3db3","#9f3db3","#a13db3","#a23db3","#a43db3",
	// 			"#a63cb3","#a73cb3","#a93cb3","#aa3cb2","#ac3cb2","#ae3cb2","#af3cb2","#b13cb2","#b23cb1",
	// 			"#b43cb1","#b63cb1","#b73cb0","#b93cb0","#ba3cb0","#bc3caf","#be3caf","#bf3caf","#c13dae",
	// 			"#c23dae","#c43dad","#c53dad","#c73dac","#c83dac","#ca3dab","#cb3daa","#cd3daa","#ce3da9",
	// 			"#d03ea9","#d13ea8","#d33ea7","#d43ea7","#d53ea6","#d73ea5","#d83fa4","#da3fa4","#db3fa3",
	// 			"#dc3fa2","#de3fa1","#df40a0","#e040a0","#e2409f","#e3409e","#e4419d","#e5419c","#e7419b",
	// 			"#e8429a","#e94299","#ea4298","#eb4397","#ed4396","#ee4395","#ef4494","#f04493","#f14592",
	// 			"#f24591","#f34590","#f4468f","#f5468e","#f6478d","#f7478c","#f8488b","#f9488a","#fa4988",
	// 			"#fb4987","#fc4a86","#fd4a85","#fe4b84","#fe4b83","#ff4c81","#ff4d80","#ff4d7f","#ff4e7e",
	// 			"#ff4e7d","#ff4f7b","#ff507a","#ff5079","#ff5178","#ff5276","#ff5275","#ff5374","#ff5473",
	// 			"#ff5572","#ff5570","#ff566f","#ff576e","#ff586d","#ff586b","#ff596a","#ff5a69","#ff5b68",
	// 			"#ff5c66","#ff5d65","#ff5d64","#ff5e63","#ff5f61","#ff6060","#ff615f","#ff625e","#ff635d",
	// 			"#ff645b","#ff655a","#ff6659","#ff6758","#ff6857","#ff6956","#ff6a54","#ff6b53","#ff6c52",
	// 			"#ff6d51","#ff6e50","#ff6f4f","#ff704e","#ff714d","#ff724c","#ff734b","#ff744a","#ff7549",
	// 			"#ff7648","#ff7847","#ff7946","#ff7a45","#ff7b44","#ff7c43","#ff7d42","#ff7e41","#ff8040",
	// 			"#ff813f","#ff823e","#ff833d","#ff843d","#ff863c","#ff873b","#ff883a","#ff893a","#ff8a39",
	// 			"#ff8c38","#ff8d37","#ff8e37","#ff8f36","#fe9136","#fd9235","#fd9334","#fc9534","#fb9633",
	// 			"#fa9733","#f99832","#f99a32","#f89b32","#f79c31","#f69d31","#f59f30","#f4a030","#f3a130",
	// 			"#f2a32f","#f1a42f","#f0a52f","#efa62f","#eea82f","#eda92e","#ecaa2e","#ebac2e","#eaad2e",
	// 			"#e9ae2e","#e8b02e","#e7b12e","#e6b22e","#e5b32e","#e4b52e","#e3b62e","#e2b72f","#e1b92f",
	// 			"#e0ba2f","#dfbb2f","#debc30","#ddbe30","#dbbf30","#dac030","#d9c131","#d8c331","#d7c432",
	// 			"#d6c532","#d5c633","#d4c833","#d3c934","#d2ca34","#d1cb35","#cfcc36","#cece36","#cdcf37",
	// 			"#ccd038","#cbd138","#cad239","#c9d33a","#c8d53b","#c7d63c","#c6d73c","#c5d83d","#c4d93e",
	// 			"#c3da3f","#c2db40","#c1dc41","#c0dd42","#bfdf43","#bee044","#bde146","#bce247","#bbe348",
	// 			"#bae449","#b9e54a","#b8e64b","#b7e74d","#b6e84e","#b6e94f","#b5ea51","#b4ea52","#b3eb53",
	// 			"#b2ec55","#b1ed56","#b1ee58","#b0ef59","#aff05b"],
	// 			variance: 0.5 + Math.random() * (1 - 0.5),
	// 		}).png()
	// 	});
	// }

	render() { 
		// var divStyle = {
		// 	backgroundImage: 'url(' + this.state.pngBackground + ')'
		// }

		return (
			<div className="main_background">
				<Switch>
					<Route 
						path="/" 
						component={MainLayout} 
					/>
					<Route 
						component={NotFound}
					/>
				</Switch>
			</div>
		);
	}
}
 
export default Main;