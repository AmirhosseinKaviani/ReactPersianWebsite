import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from './pages/home/Home'
import Article from './pages/article/Article'
import Login from './pages/login/Login'
import Panel from './pages/panel/Panel'
import Course from './pages/course/Course'
import About from './pages/course/Course'

function App(){
  return(
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/article' element={<Article/>}/>
  <Route path='/panel' element={<Panel/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/course' element={<Course/>}/>
  <Route path='/about' element={<About/>}/>
</Routes>
</BrowserRouter>
  )
}
export default App
