import React from "react";

//include images into your bundle
import NavBar from "./NavBar.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return ( <>
		<NavBar/>
		<div className="row">
		<Card text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare eget massa." />
		<Card text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat augue at lectus ultrices varius. Fusce eros." />
		<Card text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare eget massa." />
		<Card text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat augue at lectus ultrices varius. Fusce eros." />
		</div>
		</> 
	);
}
export default Home;
