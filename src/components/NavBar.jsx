import React from 'react'
import './NavBar.css'



export default props => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-violet">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-5">
                    <li class="nav-item mr-4">
                        <a class="nav-link text-white" href="#">Potions <i class="fas fa-sort-down"></i><span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item mr-4">
                        <a class="nav-link text-white" href="#">Ingredients <i class="fas fa-sort-down"></i></a>
                    </li>
                    <li class="nav-item mr-4">
                        <a class="nav-link text-white" href="#">Books <i class="fas fa-sort-down"></i></a>
                    </li>
                    <li class="nav-item mr-4">
                        <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Supplies <i class="fas fa-sort-down"></i></a>
                    </li>
                    <li class="nav-item mr-4">
                        <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Charms <i class="fas fa-sort-down"></i></a>

                    </li>
                    <li class="nav-item mr-4">
                        <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Clearence!</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto pr-5">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Sign In</a>
                    </li>
                    <li>
                        <a class="nav-link text-secondary" href="#" tabindex="-1" aria-disabled="true">or</a>
                    </li>
                        
                    <li class="nav-item pr-3">
                        <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Sign up</a>
                    </li> 
                </ul>

            </div>
        </nav>


    )
}