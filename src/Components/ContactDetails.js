import React from 'react'
import { Link } from 'react-router-dom'

export const ContactDetails = () => {
  return (
    <React.Fragment>
      <section className="contact_me " id="ContactMe">
          <div className="container">
              <div className="header_wrap" data-aos="fade-down"
                  data-aos-duration="1500">
                  <div className="h_wrap"></div>
                  <p> Contact Me </p>
              </div>
              <div className="title_wrap" data-aos="fade-down"
                  data-aos-duration="1500">
                  <h1> My <span> <i> Contact </i> </span> Details </h1>
              </div>
              <div className="contact_details">
                  <Link className="contact_card" data-aos="fade-up" data-aos-duration="2000" to="tel:+9163516 44181">
                      <img src="./assets/images/phone.png" alt="phone.png" />
                      <h5> Phone </h5>
                      <h6 className="mb-0"> +91 63516 44181 </h6>
                  </Link>
                  <Link className="contact_card" data-aos="fade-up" data-aos-duration="2300"
                      to="mailto:jenilambawala25@gmail.com">
                      <img src="./assets/images/mail.png" alt="mail.png"
                          title="Mail" />
                      <h5> Email </h5>
                      <h6 className="mb-0"> jenilambawala25@gmail.com </h6>
                  </Link>
                  <Link className="contact_card" data-aos="fade-up" data-aos-duration="2600"
                      to="https://maps.app.goo.gl/nQjcsBB1dzA4V1Pn8"
                      target="_blank">
                      <img src="./assets/images/address.png" alt="address.png"
                          title="Address" />
                      <h5> Address </h5>
                      <h6 classNameName="mb-0"> 203, Ganesh App., Vihar Socity-2,
                          Katargam, Singanpore Road, Surat. </h6>
                  </Link>
              </div>
          </div>
      </section>
    </React.Fragment>
  )
}

export default ContactDetails
