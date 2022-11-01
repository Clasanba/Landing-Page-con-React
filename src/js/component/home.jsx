import React from "react";

//include images into your bundle
import NavBar from "./NavBar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./jumbotron.jsx";

//create your first component
const Home = () => {
  return (<>
    <NavBar />
    <Jumbotron />
    <div className="row row-cols-1 row-cols-md-2 g-4 card-container">
      <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet eros tortor. Sed nulla lorem, tempor non metus eu, porta ornare nunc." />
      <Card text="Aliquam convallis porttitor nisl, ut auctor sapien rutrum id. Sed finibus quis lectus at ultricies. Mauris a posuere est. Ut malesuada fringilla pellentesque. " />
      <Card text="Nunc neque ex, venenatis lobortis felis in, fringilla scelerisque turpis. Suspendisse vel risus et neque tempus placerat at vitae nulla. Vestibulum venenatis ipsum." />
      <Card text="Donec fermentum elit et mauris vulputate facilisis. Vestibulum pulvinar dui et varius congue. Mauris sapien ipsum, dictum ornare felis sed." />
    </div>
    <Footer />
  </>
  );
}
export default Home;
