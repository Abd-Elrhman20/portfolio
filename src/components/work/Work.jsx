import React from 'react'
import './work.scss'
import { Link } from "react-router-dom";

export default function Work() {
    return (
        <React.Fragment>
            <div className="work bg-black">
                <div className="container py-4">
                <Link to={"/home"} className='navigate'>Navigate Home</Link>
                    <br />
                    <div className="row mt-3">
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/noxe.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1'>
                                        <h3 className='text-'>details</h3>
                                        <p className='mt-4'>React project with moivedb , the website has a real validation and verification</p>
                                        <a href='https://noxe-updated.vercel.app/' target={'_blank'} className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/fokir.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1'>
                                        <h3 className='text-'>details</h3>
                                        <p className='mt-4'>html,css project , isn't responsive</p>
                                        <a href='https://route-task4.vercel.app/' target={'_blank'} className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ////// */}
                    <div className="row mt-3">
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/morgan.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1'>
                                        <h3 className='text-'>details</h3>
                                        <p className='mt-4'>html,css ,bootsrap project </p>
                                        <a href='https://reoute-task6.vercel.app/' target={'_blank'} className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/Quote.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1'>
                                        <h3 className='text-'>details</h3>
                                        <p className='mt-4'>a simple js project</p>
                                        <a href='https://route-task7.vercel.app/' target={'_blank'} className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ////// */}
                    <div className="row mt-3">
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/crud.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1'>
                                        <h3 className='text-'>details</h3>
                                        <p className='mt-4'>task on crud operation</p>
                                        <a href='https://crud-operation-omega.vercel.app/' target={'_blank'} className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/Weather.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1'>
                                        <h3 className='text-'>details</h3>
                                        <p className='mt-4'>a project to show weather with real Api</p>
                                        <a href='https://weather-api-ashen.vercel.app/' target={'_blank'} className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
