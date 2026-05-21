import {useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //  let name = "Mario"
 // const [name,setName] = useState("Mario")  // this state value is reactive
 // const [age,setAge] = useState(25)

 const [blogs,setBlogs] = useState(null)

 const [name,setName] = useState("mario")

 const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog); 
 }

 useEffect(() => {
   console.log("use effect ran ")
   console.log(name);
 },[name])

    return (  
    <div className="home">
     <BlogList blogs = {blogs} title = "All Blogs!  " handleDelete = {handleDelete}/>
  { /*   <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario' )} title = "Mario's blogs  "/> */}
      <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
    );
}
 
export default Home;