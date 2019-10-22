import React from 'react';
import PropTypes from "prop-types";

function Food({name, pic, rating}) {
  return <div>
     <h2>I like {name}</h2>
     <h4> {rating} / 5.0 </h4>
     <img src={pic} alt={name} />
     </div>;
}

// MUST BE "propTypes"
Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number // can be "undefined"
};

const foodILike = [
  { id:1, name: "Pasta", rating: 5, image: "http://www.venicecafechicago.com/wp-content/uploads/2014/07/venicea01.jpg"},
  { id:2, name: "cake", rating: 4.9, image: "https://fthmb.tqn.com/upIR2sGv4idGaLiTQHGc6gXZy78=/1280x853/filters:fill(auto,1)/82662502-56a2145f5f9b58b7d0c661ab.jpg"},
  { id:3, name: "Kimbap", rating: 3.5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vegetable_gimbap.jpg/1200px-Vegetable_gimbap.jpg"}
]

// id: react internal use
function App() {
  return <div> 
    {foodILike.map(dish => <Food key={dish.id} name={dish.name} pic={dish.image} rating={dish.rating}/>)} 
    </div> ;
}

export default App;