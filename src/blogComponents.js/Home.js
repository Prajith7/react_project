import React from 'react'

export const Home = ({blogs,setBlogs}) => {
       const deleteBlog = (id) =>{
        const newBlogs  = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
  
    const readBtn=(id)=>{
     const colorBlog =  blogs.map((blog)=>{
        if(blog.id===id){
          return{...blog,color:true}
        }
       return blog
      })
      console.log("green",colorBlog)
      setBlogs(colorBlog)
  
    }
    console.log(blogs) 
   
   
      

  return (
    <div className="home">
    <div className="blog-list">
    
    
    {
    blogs.map((blog) => (
            <div className="blog-preview" key = {blog.id}  style={{ backgroundColor: blog.color ? "green" : "red" }}>
               <h2>{blog.title}</h2>
                <p>{'author is '+blog.author}</p>
            <button  className="deletebtn" onClick={() =>deleteBlog(blog.id)}>delete </button>
            <button  className = "readbtn"onClick={()=>readBtn(blog.id)}>Read</button>
            </div>

        )) }

     
</div>
    </div>
  )
}
