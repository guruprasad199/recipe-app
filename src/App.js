import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'
import './App.css';
const  App = () => {

  const AAP_ID =  "6d3ccf5b";

 const API_KEY = "1b7d7536d1ec3b091f89bf42bb3bb1f6"

const [recipes, setRecipes] = useState([]);

const [search, setSearch] = useState('')

const [query, setQuery] = useState('chicken')


 useEffect( () => {
   getRecipes();
 }, [query]);

 const getRecipes = async () => {
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${AAP_ID}&app_key=${API_KEY}`)
   const data = await response.json();
   setRecipes(data.hits)
   console.log(data.hits)
 }
const updateSearch = e => {
  setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault()
  setQuery(search)
  setSearch('');
}

  return (
    <div className="App">
      <p>Ⓒcopyright Guruprasad-sali</p>
     <form onSubmit={getSearch} className="search-form">
     <h1>Nothing as creative as cooking</h1>
      <input className="search-bar" type="text" value={search} onChange={updateSearch } />
      <button className="search-button" type="submit">Search</button>
     </form>
      <div className="recipes">
     {recipes.map(recipe => (
       <Recipe 
       key={recipe.recipe.label}
       title={recipe.recipe.label} calories={recipe.recipe.calories}
       image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
     ))}
     </div>
    </div>
  );
}

export default App;