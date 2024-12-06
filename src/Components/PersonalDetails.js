import React from 'react'

const PersonalDetails = () => {
  return (
    <React.Fragment>
      {/* <!-- My Experience Start --> */}
            <section class="my_experience" id="MyExperience">
                <div class="header_wrap" data-aos="fade-down"
                    data-aos-duration="1500">
                    <div class="h_wrap"></div>
                    <p data-aos="fade-down"> Education & Wrok Experience </p>
                </div>
                <div class="title_wrap" data-aos="fade-down"
                    data-aos-duration="1500">
                    <h1> My <span> <i> Academic and <br/> Professional </i>
                        </span>
                        Journey </h1>
                </div>
                <div class="container">
                    <div class="experience_details">
                        {/* <!-- Education Start --> */}
                        <div class="details_wrap" data-aos="fade-up"
                            data-aos-duration="2000">
                            <div class="details_head">
                                <img src="./assets/images/education.png"
                                    alt="education.png"
                                    title="Education Icon" />
                                <h3> Education </h3>
                            </div>
                            <div class="experience_info">
                                <p> 2024 - Present </p>
                                <h5> MSc.CA (Master of Science - Computer
                                    Application) </h5>
                                <p> SDJ International College </p>
                            </div>
                            <div class="experience_info">
                                <p> 2022 - 2024 </p>
                                <h5> BCA (Bachelor of Computer Application)
                                </h5>
                                <p> Bhagwan Mahavir University </p>
                            </div>
                            <div class="experience_info">
                                <p> 2019 - 2020 </p>
                                <h5> 12th (HSC Board) </h5>
                                <p> Shree Sadguru Vidyalaya </p>
                            </div>
                        </div>
                        {/* <!-- Education End --> */}

                        {/* <!-- Work Experience Start --> */}
                        <div class="details_wrap" data-aos="fade-up"
                            data-aos-duration="2000">
                            <div class="details_head">
                                <img src="./assets/images/work_experience.png"
                                    alt="work_experience.png"
                                    title="Education Icon" />
                                <h3> Work Experience </h3>
                            </div>
                            <div class="experience_info">
                                <p> 2023 - 2024 </p>
                                <h5> Elite Technocrats </h5>
                                <p> Web & UI/UX Designing </p>
                            </div>
                            <div class="experience_info">
                                <p> 2023 - 2024 </p>
                                <h5> Elite Technocrats </h5>
                                <p> Internship - 3 Month (React Framework) </p>
                            </div>
                            <div class="experience_info">
                                <p> 2022 - 2023 </p>
                                <h5> Elite Technocrats </h5>
                                <p> Training (3 Month) in Web & UI/UX Designing
                                    Course </p>
                            </div>
                        </div>
                        {/* <!-- Work Experience End --> */}
                    </div>
                </div>
            </section>
            {/* <!-- My Experience End --> */}
    </React.Fragment>
  )
}

export default PersonalDetails
