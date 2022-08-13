import React from "react";
import { Link } from "react-router-dom";

import FeatureProjectsList from "../components/FeatureProjectsList";

function Home() {

  return(
    <div>
      <main id="main">
        <section id="intro" className="w3-container w3-center w3-text-shadow w3-animate-opacity intro">
        <img src="images/images_compressed/responsive-web-dev_placeholder_1_compress.png" id="img-intro" width="800" alt="Responsive web design represented as various computers and mobile devices displaying a website." />
          <div>
            <h1 id="name-title">SEAN TRUDEL </h1>
            <h2><span><b>FRONT-END DEVELOPER & DESIGNER</b></span></h2>
            <p>Utilizing quality education and professional co-op work experience, I design and build clean, accessible websites that suit your needs.</p>
            
            <div className="w3-container">
              <Link to="/about" className="w3-button button-more" title="Link to About page.">read more about Sean</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Featured Projects */}
      <section id="featured-work" className="w3-container w3-center w3-text-shadow w3-animate-opacity w3-grey section featured-work">
        <h2>FEATURED WORK</h2>

        <FeatureProjectsList />

        <br />

        <div className="w3-container">
          <Link to="/projects" className="w3-button button-more" title="Link to Projects page.">see more projects &rarr;</Link>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact-me" className="w3-container w3-center w3-text-shadow w3-animate-opacity section contact-me">
        <h2>CONTACT</h2>

        <form method="post" id="contactForm" name="form_contact" className="contact-form contact-container">
          <h2 className="sr-only">Contact Form</h2>
            {/*  First Name input: */}
            <div className="contact-item">
              <fieldset>
                <legend>first name</legend>
                <input type="text" name="f_firstname" id="firstname" placeholder="First name" />
                <span id="firstnameError"></span>
              </fieldset>
            </div>
            <br />

            {/*  Last Name input: */}
            <div className="contact-item">
              <fieldset>
                <legend>last name</legend>
                <input type="text" name="f_lastname" id="lastname" placeholder="Last name" />
                <span id="lastnameError"></span>
              </fieldset>
            </div>
            <br />

            {/*  E-mail input: */}
            <div className="contact-item">
              <fieldset>
                <legend>e-mail</legend>
                <input type="text" name="f_email" id="email" placeholder="name@email.com" />
                <span id="emailError"></span>
              </fieldset>
            </div>
            <br />
              
            {/* Message input: */}
            <div className="contact-item">
              <fieldset>
                <legend>message</legend>
                <textarea type="text" name="f_message" id="message" rows="10" placeholder="Write your message here."></textarea>
                <span id="messageError"></span>
              </fieldset>
            </div>
            <br />

            <div className="w3-container">
              <input type="submit" value="send message" name="submit" className="w3-button button-more" id="send-btn" />
            </div>
        </form>

        {/* Output thank you message after Contact Me form submit (hidden until form validates). */}
        {/*<div id="thanks_msg">
          <h2>Thank you <span id="firstnameThanks"></span> <span id="lastnameThanks"></span> for your message! I will get back to you as soon as possible. Have a nice day!</h2>
          {/* UPDATE: Insert code that prints User's firstname & lastname (info from Contact form submission;
          the latest info stored in the Contact table in the database) into above Thank You message. */}
          {/* <span id="firstnameThanks"></span> <span id="lastnameThanks"></span> */}
        {/*</div>*/}


      </section>

    </div>
  )

}

export default Home;