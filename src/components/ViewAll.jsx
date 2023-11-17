import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavPost from './NavPost'

const ViewAll = () => {
    const [data , changeData]=useState([])

    const fetchData=()=>{
        axios.post("http://127.0.0.1:8000/blog/view/").then(
            (response)=>{
                changeData(response.data)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavPost/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value , i)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex allign-items-stretch ">
                                    <div class="card text-center">
                                        <div class="card-header">
                                            {value.title}
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">userid :{value.userid}</h5>
                                            <p class="card-text"><em>{value.message}</em></p>
                                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                        <div class="card-footer text-body-secondary">
                                            2 days ago
                                        </div>
                                    </div>
                                </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll