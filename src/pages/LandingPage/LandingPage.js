import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "./Hero/Hero";
import Stats from "./Stats/Stats";
import Testimonial from "components/testimonials/Testimonial";
import Footer from "components/footers/Footer.js";
const HighlightedText = tw.span` bg-gradient-to-r from-secondary-100  to-secondary-400 hover:bg-primary-100 text-gray-100 px-4 transform -skew-x-12 inline-block`;

const LandingPage = () => {
    
    return (
        <AnimationRevealPage>
            <Hero
                heading={
                    <>
                        Welcome to
                        <HighlightedText>StepUp Camp.</HighlightedText>
                    </>
                }
                subHeading="Join a camp of awesome people. Discuss your common tasks. Track your daily goals. Do regular
        Spotlight sessions with your camp mates. Become a doer"
                mainButtonText="Try for Free"
            />
            <Stats />
            <Testimonial textOnLeft={true} />
            <Footer />
        </AnimationRevealPage>
    );
};

export default LandingPage;
