import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './header';
import AddFood from './addfood';
import FoodList from './foodlist';

function App() {
  const local_storage_key='foods';
  const [foods, setFoods] = useState(JSON.parse(localStorage.getItem(local_storage_key)));
  const addFoodHandler = (food) =>{
    console.log(food);
    setFoods([...foods, food]);
  };

useEffect(() => {
  const storage = JSON.parse(localStorage.getItem('foods'));
  if (storage) { setFoods(storage); }
}, []);

useEffect(() => {
  localStorage.setItem(local_storage_key, JSON.stringify(foods));
}, [foods]);

  return (
    <div>
     <Header/>
     <AddFood addFoodHandler={addFoodHandler}/>
     <FoodList foods={ foods }/>
    </div>
     
  );
}

export default App;
