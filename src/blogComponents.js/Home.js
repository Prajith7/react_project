import React from 'react'
import { useState } from 'react'

export const Home = ({blogs,setBlogs}) => {
   const [searchInput , setsearchInput]=useState("")
     
    const deleteBlog = (id) =>{
        const newBlogs  = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    let inputHandler =(e)=>{
      setsearchInput(e.target.value)
      console.log(searchInput)
     

    }
    const readBtn=()=>{
      
    }
    const filterData= blogs.filter((el)=>{
      if(searchInput === ""){
        return el
      }
      else{
        return el.title.toLowerCase().includes(searchInput)
      }
      
 })
  
    
  return (
    <div className="home">
    <div className="blog-list">
    <input type="text"  onChange={inputHandler}/>
    
    {
    filterData.map((blog) => (
            <div className="blog-preview" key = {blog.id}>
               <h2>{blog.title}</h2>
                <p>{'author is '+blog.author}</p>
            <button  className="deletebtn" onClick={() =>deleteBlog(blog.id)}>delete </button>
            <button onClick={readBtn}>Read</button>
            </div>

        )) }
     
</div>
    </div>
  )
}
