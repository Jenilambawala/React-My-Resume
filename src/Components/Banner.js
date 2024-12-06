import React from 'react'

export const Banner = () => {

  return (
    <React.Fragment>
      <section class="main_banner" id="Home">
            <div class="container">
                <div class="banner_details">
                    <div class="banner_info">
                        <div class="shap_wrap" data-aos="fade-up"
                            data-aos-duration="1500">
                            <img src="./assets/images/shap.png" alt="shap.png" />
                            <p> Hello There! </p>
                        </div>
                        <div class="main_text">
                            <h1 data-aos="fade-up" data-aos-duration="2000"> I'm
                                <span> <u> <i> Jenil Ambawala, </i> </u>
                                </span> <br/> Web & UI/UX Designer </h1>
                            <p data-aos="fade-up" data-aos-duration="2000"
                                class="text_wrap"> Lorem ipsum dolor sit amet
                                consectetur,
                                adipisicing elit.
                                Dolores dolor, obcaecati enim mollitia neque
                                eaque eveniet </p>
                        </div>
                        <div class="button_wrap" data-aos="fade-up"
                            data-aos-duration="2500">
                               {/* style="text-decoration: none;" */}
                            <a href="#AboutMe">
                                <button>
                                    <span> View About Me </span>
                                    <div class="arow_icon">
                                        <img src="./assets/images/arow.png"
                                            alt="arow.png"/>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div class="banner_img">
                        <img src="./assets/images/person.png" alt="person.png" />
                    </div>
                </div>
            </div>
            <div class="bottom_wrap">
                <div class="green_line"> </div>
                <div class="orange_line"> </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Banner
