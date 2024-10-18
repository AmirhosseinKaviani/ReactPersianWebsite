import Home from './pages/home/Home'
import Article from './pages/article/Article'
import Login from './pages/login/Login'
import Panel from './pages/panel/Panel'
import Course from './pages/course/Course'
import About from './pages/about/About'

const routes=[
    {path: "/", element: <Home/>},
    {path: "/article/*", element:<Article/>,
    children:[{path: "js", element:<h2>js article</h2>},
              {path: "php", element:<h2>Php article</h2>},
              {path:"react", element:<h2>react article</h2>}
    ]},
    {path:"panel", element:<Panel/>},
    {path: "/login", element: <Login/>},
    {path: "/course/:courseId", element:<Course/>},
    {path: "/about", element:<About/>}
  ]
  export default routes