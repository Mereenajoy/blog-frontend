import React, { useState } from 'react'
import NavPost from './NavPost'
import axios from 'axios'

const ViewMyPost = () => {
    const [inputField , changeInputField]=useState(
        {
            
            "title" : ""
           
        }
      )
    
      const inputHandler=(event)=>{
            changeInputField({...inputField,[event.target.name]:event.target.value})
      }

      const [result , changeResult]=useState([])
    
      const readValue=()=>{
        console.log(inputField)

        axios.post("http://127.0.0.1:8000/blog/search/" ,inputField).then(
            (reponse)=>{
                changeResult(reponse.data)
            }
        )
        
        
      }
      
  return (
    <div>
        <NavPost/>
        <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" name='title' value={inputField.title} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-success">Search</button>
                            </div>
                        </div>

                    </div>
                </div>
            

           
           
            <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       {result.map(
                        (value , i)=>{
                            return  <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">userid</label>
                                <input type="text" className="form-control" value={value.userid}  />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" value={value.title}  />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Message</label>
                                <textarea name="message" id="" cols="30" rows="10" className="form-control" value={value.message} onChange={inputHandler} ></textarea>
                            </div>
                        </div>
                        }
                       )}

                    </div>
                </div>

                </div>
    </div>
  )
}

export default ViewMyPost