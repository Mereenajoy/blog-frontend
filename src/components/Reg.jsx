import React, { useState } from 'react'

const Reg = () => {
    const [inputField, changeInputField]=useState(
       
        {
            "email":"",
            "name":"",
            "profile":"",
            "password":""
        }
            
        
    )
    const inputHandler=(event)=>{
        changeInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
    }

    return (
    <div><div class="container">
    <div class="row">
       
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <br></br> <br></br>
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"> Name</label>
                    <input type="text" className="form-control" value={inputField.name} name='name' onChange={inputHandler} />
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Profile</label>
                    <input type="text" className="form-control"  value={inputField.profile} name='profile' onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">email</label>
                    <input type="text" className="form-control" value={inputField.email} name='email' onChange={inputHandler} />
                </div>
               
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="text" className="form-control" value={inputField.password} name='password' onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <p class="text-center text-muted mt-5 mb-0">Already an account? <a href="/"
                        class="fw-bold text-body" ><u>Login</u></a></p>
                    <button onClick={readValue} className="btn btn-success">Register</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Reg