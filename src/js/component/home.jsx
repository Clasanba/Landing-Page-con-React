import React from "react";

//include images into your bundle
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return ( <>
		<div className="row">
		<Card text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare eget massa." />
		<Card text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat augue at lectus ultrices varius. Fusce eros." />
		<Card text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare eget massa." />
		<Card text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat augue at lectus ultrices varius. Fusce eros." />
		</div>
		</> 
	);
};

export default Home;
