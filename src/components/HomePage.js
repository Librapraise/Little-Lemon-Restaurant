import React from "react";
import { Link } from 'react-router-dom';
import foodImage from '../assets/food-1.jpg';
import greekSalad from '../assets/brushetta.jpg';
import Bruschetta from '../assets/brushetta.jpg';
import lemonDessert from '../assets/lemondeserts.jpg';
import twoExecutives from '../assets/two-executives.jpg';
import user1 from '../assets/user-1.png';
import user2 from '../assets/user-2.png';
import user3 from '../assets/user-3.png';
import '../css/HomePage.css'; // Import your CSS file for styling

function HomePage() {
    return (
      <>
      <div className="container">
          <div className="row">
            <div className="col-1 homepage-header">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <button className="btn"><Link style={{ textDecoration: "none", color: 'black' }} to="/booking">Reserve a Table</Link></button>
            </div>

            <div className="col-1">
              <img src={foodImage} alt="Delicious Food"/>
            </div>
          </div>
      </div>

      <section className="specials-categories">
        <div className="specials-container">
              <div className="tile">
                <h2>This Week's Specials!</h2>
                <button className="btn">Online Menu</button>
              </div>

            <div className="row-1">
              <div className="col-2">
                  <img src={greekSalad} alt="greek-salad"/>
                    <div className="col-price">
                      <p>Greek Salad</p>
                      <span>$3.00</span>
                    </div>
                    <div className="col-tag">
                      <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                      <h3>Order a delivery</h3>
                    </div>
              </div>

              <div className="col-2">
                  <img src={Bruschetta} alt="bruschetta"/>
                  <div className="col-price">
                    <p>Bruschetta</p>
                    <span>$3.50</span>
                  </div>
                  <div className="col-tag">
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <h3>Order a delivery</h3>
                  </div>
              </div>

              <div className="col-2">
                  <img src={lemonDessert} alt="lemon-dessert"/>
                  <div className="col-price">
                    <p>Lemon Dessert</p>
                    <span>$3.00</span>
                  </div>
                  <div className="col-tag">
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <h3>Order a delivery</h3>
                  </div>
              </div>
            </div>

        </div>
      </section>

      <section className="testimonials-categories">
        <div className="testimonials">
          <h2>Testimonials</h2>
          <div className="row-1">

            <div class="col-3">
              <i class="fa fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
                sunt nemo Repudiandae pariatur perferendis voluptas ipsam
                exercitationem!
              </p>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <img src={user1} alt="" />
              <h3>Sean Parker</h3>
            </div>
            <div class="col-3">
              <i class="fa fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
                sunt nemo Repudiandae pariatur perferendis voluptas ipsam
                exercitationem!
              </p>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <img src={user2} alt="" />
              <h3>Mike Smith</h3>
            </div>
            <div class="col-3">
              <i class="fa fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
                sunt nemo Repudiandae pariatur perferendis voluptas ipsam
                exercitationem!
              </p>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <img src={user3} alt="" />
              <h3>Milan Joe</h3>
            </div>
            <div class="col-3">
              <i class="fa fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
                sunt nemo Repudiandae pariatur perferendis voluptas ipsam
                exercitationem!
              </p>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <img src={user1} alt="" />
              <h3>Jones Joe</h3>
            </div>

          </div>

        </div>
      </section>

      <section className="about">
        <div className="about-category">
        <div className="row">
            <div className="col-4">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We are based in chicago, a walk-in restaurant that makes customer’s satisfaction it’s top priority.</p>
            </div>

            <div className="col-4 image-container">

                <img className="image-left" src={foodImage} alt="Delicious Food 1"/>
                <img className="image-right" src={twoExecutives} alt="Delicious Food 2"/>

            </div>
          </div>
        </div>
      </section>

      <div className="footer">
        <div className="container">
          <div className="row-1">

            <div className="footer-col-1">
              <div className="app-logo">
                <img src={foodImage} alt="foodimage"/>
              </div>
            </div>

            <div className="footer-col-2">
              <h3>Useful Links</h3>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order online</li>
                <li>Login</li>
              </ul>
            </div>

            <div className="footer-col-3">
              <h3>Contact Us</h3>
              <ul>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
              </ul>
            </div>

            <div className="footer-col-4">
              <h3>Follow Us</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      </>
    );
}

export default HomePage;
