import axios from 'axios'
import React, { useState } from 'react'
import NavPost from './NavPost'

const AddPost = () => {
  
  const [inputField , changeInputField]=useState(
    {
        "userid" : "",
        "title" : "",
        "message" : ""
    }
  )

  const inputHandler=(event)=>{
        changeInputField({...inputField,[event.target.name]:event.target.value})
  }

  const readValue=()=>{
    console.log(inputField)
    axios.post("http://127.0.0.1:8000/blog/add/",inputField).then(
        (response)=>{
            alert(response.data.status)
        }
    )
  }
  
  
    return (
    <div>
        <NavPost/>
        <div className="container">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">User ID</label>
                        <input type="text" className="form-control" name='userid' value={inputField.userid} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Title</label>
                        <input type="text" className="form-control" name='title' value={inputField.title} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Message</label>
                    <textarea name="message" id="" cols="30" rows="10" className="form-control" value={inputField.message} onChange={inputHandler} ></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-success">ADD</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost