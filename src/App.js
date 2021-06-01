import React,{useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';
import Loading from "./Loading"

const App = () => {



  const APP_ID =  process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_RECIPE_KEY;

  console.log(process.env.REACT_APP_APP_ID)


 const [isLoading ,setIsLoading]  = useState(true); 
 const [recipes, setRecipes] = useState([]);
 const [search, setSearch] =  useState("")
 const [query, setQuery] = useState('chicken')

 useEffect(() => {
   getRecipes();
 }, [query]);

 useEffect(()=>{
  setTimeout(()=>{
  setIsLoading(false);
  }, 2500);
});

 const getRecipes = async () => {
   const response  = await fetch(
     `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
     );
   const data = await response.json();
   setRecipes(data.hits);
   console.log(data.hits);

  
 };

 const updateSearch = e => {
   setSearch(e.target.value);
 };

 const getSearch = e => {
   e.preventDefault();
   setQuery(search);
   setSearch('');
 }

  return (

    <div>
      { isLoading === true ? <Loading/>:

      <div className="App">
        <img className="top" src = "https://thehappyfoods.files.wordpress.com/2016/11/food-hd-background.png" alt="bg" />

        <form onSubmit={getSearch} className="search-from">
          <input className="search-bar" 
            type="text" 
            value={search} 
            onChange={updateSearch} 
            placeholder="Search any recipe" 
          />

          <button className="search-button" type="submit">
              Search
          </button>
        </form>

        <div className="recipes">
          {recipes.map(recipe =>(
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
        ))}
        </div>
          <a href="#"  className ="topper" onclick="document.body.scrollTop=0;document.documentElement.scrollTop=0;event.preventDefault()">Back  to  Top</a>
      </div> }
    </div>
  )
}

export default App;
