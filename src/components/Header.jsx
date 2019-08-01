import React from 'react'
import './Header.css';


export default props => {
    return (

        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-4">
                    <div className="text">
                        <h3 className="header-title">MERLIN'S <span>POTIONS</span></h3>
                        <p className="header-text">fine potions since 1026</p>
                    </div>

                </div>
                <div className="col-lg-3">
                    <div class="submit-line">
                        <input type="text" placeholder="Search our stock"/>
                        <button class="submit-lente" type="submit">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>


                </div>
                <div className="col-lg-3">
                    <div className="navbar-free">
                        <h4 className="navbar-title-free text-free">Free shipping</h4>
                        <h6 className="navbar-text-free text-free">on orders over $50</h6>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="navbar-bag">
                        <h5 className="text-bag"><i className="fas fa-shopping-bag"></i> BAG: <span className="text-free">1</span></h5>
                    </div>
                </div>
            </div>
        </div>

    )
}