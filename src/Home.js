import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //  let name = "Mario"
 // const [name,setName] = useState("Mario")  // this state value is reactive
 // const [age,setAge] = useState(25)

 //const [name,setName] = useState("mario")
//  const handleDelete = (id) => {
//     const newBlog = blogs.filter((blog) => blog.id !== id);
//     setBlogs(newBlog); 
//  }

 const {data : blogs,isPending,error} = useFetch("http://localhost:8000/blogs");

    return (  
    <div className="home">
      {error && <div>{error}</div>}
      { isPending && <div>Loading...</div>}
     { blogs &&  <BlogList blogs = {blogs} title = "All Blogs!  "/>}
  { /*   <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario' )} title = "Mario's blogs  "/> */}
    { /*  <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p> */}
    </div>
    );
}
 
export default Home;