import React from 'react'
import './contact.scss'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <React.Fragment>
            <div className="contact bg-black">
                <Link to={"/home"} className='navigate'>Navigate Home</Link>
                <div className="container">
                    <br />
                    <div className="row vh-100 py-3 mt-2">
                        <div className="inf">
                            <h3 className='fw-bold'>I design & build <br /> UI websites.</h3>
                        </div>
                    </div>
                    <div className="row py-3">
                        <h3>Contact</h3>
                        <div className="col-md-12 w-50 m-auto mt-3 py-3">
                            <a href="https://www.facebook.com/profile.php?id=100005096977324">Facebook</a>
                            <a href="mailto:mana201638@gmail.com">gmail</a>
                            <a href="tel:01012917536">phone number</a>
                            <a href="https://github.com/Abd-Elrhman20">gitHub</a>
                            <a href="#">cv</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}
