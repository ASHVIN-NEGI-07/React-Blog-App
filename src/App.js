 import Navbar from './Navbar';
 import Home from './Home';
 import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  const title = "Welcome to the new blog"  // we can write any valid js code before returning a jsx template
  const likes = 50  // react converts whatever datatype into string before it outputs it to the browser (except for boolean and objects)
 // const person = {name : "Ashvin",age : 21};
 const link = "http://www.google.com"

  return (
    <Router>
    <div className="App">
      <Navbar/> 
     <div className="content">
      <Switch>
        <Route exact path = "/">
        <Home/>
        </Route>
          <Route path = "/create">
        <Create/>
        </Route>
           <Route path = "/blogs/:id">
        <BlogDetails/>
        </Route>
        <Route path = "*">
          <NotFound/>
        </Route>
      </Switch>
      {/*<h1>{title}</h1> */}
   { /*   <p>Liked {likes} times</p> */}

    {/*  <p>{person}</p> */}

  { /*  <p>{10}</p>
    <p>{"Hello my name is Ashvin Negi"}</p>
    <p>{[1,2,3,4,5]}</p>
    <p>{Math.random() * 10}</p>
    <a href={link}>Google site</a> */}

     </div>
    </div>
    </Router>
  );
}

export default App;
