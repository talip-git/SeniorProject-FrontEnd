import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import './form.css'
function ForumForm() {
    const {user} = useContext(AuthContext)
    const [title,setTitle] = useState("")
    const [imgUrl,setImgUrl] = useState("")
    const [content,setContent] = useState("")
    const handleSubmit = ()=>{
        const forumEntry = {
            userId:user._id,
            username:user.username,
            title:title,
            content:content,
            img:imgUrl
        }
        const postForum = async ()=>{
            try {
                const res = await axios.post(`/forum/addForum/${user._id}`,forumEntry,{
                    headers:{
                        authorization:user.auth
                    }
                })
                window.location.replace('/forum')
            } catch (error) {
                console.log(error)
            }
        }
        postForum()
    }
    return (
    <div className='container'>
        <div className='col col-12 col-md-12'>
            <div className='formWrapper'>
                <b><label htmlFor="title" className='form-label'>Başlık</label></b>
                <input type="text" name="title" id="title"  className='form-control' onChange={(e)=>setTitle(e.currentTarget.value)}/>
                <b><label htmlFor="url" className='form-label mt-1'>Resim Url:</label></b>
                <small className='ml-1'>Resim üzerinde sağ tık, resim adresi kopyalaya basabilirsin:)</small>
                <input type="text" name="url" id="url" className='form-control' onChange={(e)=>setImgUrl(e.currentTarget.value)} />
                <b><label htmlFor="content" className='form-label mt-1'>Content</label></b>
                <textarea name="content" id="content" cols="30" rows="20" className='form-control' onChange={(e)=>setContent(e.currentTarget.value)}></textarea>
                <button className='btn btn-secondary mt-4' onClick={handleSubmit}>Ekle</button>
            </div>
        </div> 
    </div>
  )
}

export default ForumForm