import { useState, useEffect } from 'react'
import './App.css'

interface Recipe {
  id: number
  title: string
  time_to_complete: number
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const getRecipes = async () => {
    const response = await fetch('http://localhost:8000/recipes')
    const data = await response.json()
    setRecipes(data)
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className="App">
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.time_to_complete} minutes</p>
        </div>
      ))}
    </div>
  )
}

export default App
