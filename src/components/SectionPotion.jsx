import React from 'react'
import './SectionPotion.css';
import aging from '../aging-potion.png'
import bulgeye from '../bulgeye-potion.png'
import dragon from '../dragon-tonic.png'
import love from '../love-potion.png'
import polyjuice from '../polyjuice-potion.png'
import sleeping from '../sleeping-draught.png'


export default props => {



    return (
        <div className="container">
            <h3 className="text-left m-5"><strong>Potions</strong></h3>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-6 mt-5">
                    <img src={aging} className="img-fluid" width="200px" />
                    <p className="text-potion">Aging Potion - <span>$23.99</span></p>
                </div>
                <div className="col-lg-4 col-md-6 col-6 mt-5">
                    <img src={bulgeye} className="img-fluid" width="200px" />
                    <p className="text-potion">Bulgeye Potion - <span>$19.99</span></p>
                </div>
                <div className="col-lg-4 col-md-6 col-6 mt-5">
                    <img src={dragon} className="img-fluid" width="200px" />
                    <p className="text-potion">Dragon Tonic - <span>$64.99</span></p>
                </div>
            
          
                <div className="col-lg-4 col-md-6 col-6 mt-5 mb-5">
                    <img src={love} className="img-fluid" width="200px" />
                    <p className="text-potion">Love potion - <span> $29.99</span></p>
                </div>
                <div className="col-lg-4 col-md-6 col-6 mt-5 mb-5">
                    <img src={polyjuice} className="img-fluid" width="200px" />
                    <p className="text-potion">Polyjuice Potion - <span>$99.99</span></p>
                </div>
                <div className="col-lg-4  col-md-6 col-6 mt-5 mb-5">
                     <img src={sleeping} className="img-fluid" width="200px" />
                     <p className="text-potion">Sleeping Draught - <span> $14.99</span></p>
                </div>
            </div>
        </div>

    )
}