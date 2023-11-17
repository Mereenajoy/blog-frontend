import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [inputField, changeInputField]=useState(
       
        {
            "email":"",
            "password":""
            
        }
            
        
    )

    const  navigate =useNavigate()
    const inputHandler=(event)=>{
        changeInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        if(inputField.email==="a@gmail.com"&& inputField.password==="123"){
            navigate("/add")

        }
        else{
            alert("invalid")
        }
    }
  return (
    <div>
        <div className="container">
                <div className="row">
                    <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">
                            <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <section class="vh-100 bg-image">
                                    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                                        <div class="container h-100">
                                            <div class="row d-flex justify-content-center align-items-center h-100">
                                                <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                                    <div class="card" >
                                                        <div class="card-body p-5">
                                                            <h2 class="text-uppercase text-center mb-5">Login</h2>

                                                            <form>
                                                                <div class="form-outline mb-4">
                                                                <label class="form-label" for="form3Example3cg">Your Email</label>
                                                                    <input type="email" id="form3Example3cg" class="form-control form-control-lg" value={inputField.email} name='email' onChange={inputHandler} />
                           
                                                                </div>

                                                                <div class="form-outline mb-4">
                                                                <label class="form-label" for="form3Example4cg">Password</label>

                                                                    <input type="password" id="form3Example4cg" class="form-control form-control-lg" value={inputField.password} name='password' onChange={inputHandler} />
                                                                </div>




                                                                <div class="d-flex justify-content-center">
                                                                    <button onClick={readValue} type="button"
                                                                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                                                                </div>

                                                                <p class="text-center text-muted mt-5 mb-0">Dont Have already an account? <a href="/reg"
                                                                    class="fw-bold text-body" ><u>Register</u></a></p>

                                                            </form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
    </div>
  )
}

export default Login