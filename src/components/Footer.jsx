import React from 'react'
import './Footer.css'
import facebook from '../facebook.png'
import twitter from '../twitter.png'
import pinterest from '../pinterest.png'
import google from '../google.png'
import instagram from '../instagram.png'

export default props => {


    return (
        <div className="container-fluid bg-color">
            <div className="row">
                <div class="col-lg-6 text-left">
                    <div className="m-5">
                        <a href="#" className="text-uppercase pr-3  text-color">Company Returns</a>
                        <a href="#" className="text-uppercase pr-3  text-color">Contact us Careers</a>
                        <a href="#" className="text-uppercase pr-3  text-color">Shipping</a>
                    </div>
                    <div class="m-5">
                        <img src={facebook} className="img-fluid pr-3 mb-5" />
                        <img src={twitter} className="img-fluid pr-3 mb-5" />
                        <img src={pinterest} className="img-fluid pr-3 mb-5" />
                        <img src={google} className="img-fluid pr-3 mb-5" />
                        <img src={instagram} className="img-fluid mb-5" />
                        <p className="text-copy mb-5">&copy; 2015 Merlin´s Potions. All Rights Reserved</p>
                    </div>

                </div>
                <div class="col-lg-6">
                    <div class="card m-5 text-left py-3">
                        <div class="card-body">
                            <h5 class="card-title">Sign up for our Newsletter</h5>
                            <p class="card-text">Sign up for our newsletter & get exclusive discounts!</p>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Enter your email" aria-label="Search" />
                                <button class="btn btn-danger my-5 my-sm-0 text-uppercase" type="submit">Submit</button>
                            </form>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}