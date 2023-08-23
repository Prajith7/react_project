import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Title = ({blogs,setblogs}) => {
   const [author , setAuthor] =useState("")
   const [title , setTitle] = useState("")
   const navigate = useNavigate()

   const handleAdd=(e)=>{
    e.preventDefault();
    if(title.trim()==="" || author.trim()===""){
        alert("the value is empty")
    }
    else{
        blogs.unshift({
            title:title,
            author : author,
            id:blogs.length+1
        })
        navigate('/home');
    }
    
   }
  return (
   <>
   <div className='inputs'>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" value={title} onChange={(e)=>setTitle(e.target.value)} />
    </div>
     <div className="mb-4">
     <label htmlFor="exampleInputEmail1" className="form-label">Author</label>
     <input type="text" className="form-control" aria-describedby="emailHelp" value={author} onChange={(e)=>setAuthor(e.target.value)} />
     </div>
     <button className='Addname' onClick={handleAdd}>Add</button>
     </div>
   </>
  )
}
