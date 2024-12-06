import React, {useEffect} from "react";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import PersonalDetails from "./PersonalDetails";
import MySkills from "./MySkills";
import ContactDetails from "./ContactDetails";


export const Home = () => {
 
  return (
    <>
      <Banner />
      <AboutMe />
      <PersonalDetails />
      <MySkills />
      <ContactDetails />
    </>
  );
};

export default Home;
