// a component is a function which returns a jsx template and that function is exported at the bottom of the file
import {Link} from "react-router-dom"


const Navbar = () => {  // stateless functional component
    return ( 
        <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to ="/create" >New Blog</Link>  { /*  inline css = style {{key : value pairs of ojjects}}  outer curly braces to show dynamic*/ }
        </div>
        </nav>
     );
}
   
export default Navbar;