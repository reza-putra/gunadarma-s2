import React from "react";
import images from "./christmas.jpg"

const logic = function() {};

const Profil = props => (
  <div>
    <section class="profilgan banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
      <div class="content">
        <h1>Profil</h1>
        <ul>
          <li>Name : Cecep Budiman </li>
          <li>Hobby : Screwing stuff </li>
        </ul>
      </div>
      <div class="image">
        <img src={images} alt="" />
      </div>
    </section>
  </div>
);

export default Profil;
