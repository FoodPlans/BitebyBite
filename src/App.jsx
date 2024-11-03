import { Routes, Route } from 'react-router-dom'
import AllRecipes from './pages/allRecipes'
import AddRecipe from './pages/addRecipe'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'

function App () {
  return (
    <div className='page-layout'>
      <Navbar />

      <div className='main-content'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<AllRecipes />} />
          <Route path='/add-recipe' element={<AddRecipe />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
