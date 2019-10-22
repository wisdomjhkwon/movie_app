import React from 'react';

function Food({name, pic}) {
  return <div>
     <h2>I like {name}</h2>
     <img src={pic} alt={name}/>
     </div>;
}

const foodILike = [
  { name: "Pasta", image: "http://www.venicecafechicago.com/wp-content/uploads/2014/07/venicea01.jpg"},
  { name: "cake", image: "https://fthmb.tqn.com/upIR2sGv4idGaLiTQHGc6gXZy78=/1280x853/filters:fill(auto,1)/82662502-56a2145f5f9b58b7d0c661ab.jpg"},
  { name: "Kimbap", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vegetable_gimbap.jpg/1200px-Vegetable_gimbap.jpg"}
];

function renderFood(dish) {
  return <Food name={dish.name} pic={dish.image} />
}

function App() {
  return <div> 
    {foodILike.map(renderFood)}
    </div> ;
}

export default App;