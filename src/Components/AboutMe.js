import React from 'react'

export const AboutMe = () => {
  return (
    <React.Fragment>
       {/* <!-- About Me Start --> */}
            <section class="about_me" id="AboutMe">
            <div class="container">
                <div class="about_details">
                    <div class="about_image" data-aos="zoom-in">
                        <img src="./assets/images/person_1.png" alt="person_1.png" />
                    </div>
                    <div class="about_info">
                        <div class="header_wraper" data-aos="fade-up"
                            data-aos-duration="1500">
                            <div class="h_wrap"></div>
                            <p> About Me </p>
                        </div>
                        <div class="main_text">
                            <h1 data-aos="fade-up" data-aos-duration="2000"> Who
                                is <span> <i> Jenil Ambawala? </i> </span>
                                </h1>
                                <p data-aos="fade-up" data-aos-duration="2000">
                                    I am Web & UI/UX Designer based in The USA,
                                    but
                                    working Worldwide.
                                    I am passionate about Web & UI/UX Designer
                                    user-friendly websites. I have
                                    all the skills to create a new high quality
                                    website or improve existing
                                    websites for individuals and organisations,
                                    using the latest techniques
                                    and trends. </p>
                                <div class="personal_info">
                                    <div class="info_wrap" data-aos="fade-up"
                                        data-aos-duration="2500">
                                        <p> Age. . . . . </p>
                                        <p> 21 </p>
                                    </div>
                                    <div class="info_wrap" data-aos="fade-up"
                                        data-aos-duration="2500">
                                        <p> Residence . . . . . </p>
                                        <p> India </p>
                                    </div>
                                    <div class="info_wrap" data-aos="fade-up"
                                        data-aos-duration="2500">
                                        <p> Freelance . . . . . </p>
                                        <p> Not Available </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- About Me End --> */}
    </React.Fragment>
  )
}

export default AboutMe
