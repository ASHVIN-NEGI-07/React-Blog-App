// a component is a function which returns a jsx template and that function is exported at the bottom of the file

const Navbar = () => {  // stateless functional component
    return ( 
        <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create" >New Blog</a>  { /*  inline css = style {{key : value pairs of ojjects}}  outer curly braces to show dynamic*/ }
        </div>
        </nav>
     );
}
   
export default Navbar;