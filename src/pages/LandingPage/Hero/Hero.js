import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionDescription } from "components/misc/Typography.js";
import bg from "../../../images/main-bg.jpg"

import Header, {
    NavLink,
    NavLinks,
    PrimaryLink as PrimaryLinkBase,
    LogoLink,
    NavToggle,
    DesktopNavLinks,
} from "../../../components/headers/light";

//Header STYLES
const StyledHeader = styled(Header)`
    ${tw`pt-8 max-w-none w-full`}
    ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
        ${tw`text-gray-100 hover:border-gray-300 hover:text-secondary-900`}
    }
    ${NavToggle}.closed {
        ${tw`text-gray-100 hover:text-primary-500`}
    }
`;

const Description = tw(
    SectionDescription
)`mt-4 lg:text-base text-center text-white max-w-lg`;


//FEEDBACK Button STYLES
const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;

//MAIN BG IMAGE
//const Container = styled.div`
//    ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
 //   background-image: url("");
//`;
const Container = styled.div((props) => [
    `background-image: url("${props.imageSrc}");`,
    tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`,
]);
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
    ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
    span {
        ${tw`inline-block mt-2`}
    }
`;

//CTA BUTTON STYLES
const PrimaryAction = tw.button`
    rounded-full
    px-8 py-3 
    mt-10 
    text-sm sm:text-base 
    sm:mt-16 sm:px-8 sm:py-4 
    font-bold shadow transition duration-300 text-gray-100 hocus:text-gray-200 focus:outline-none focus:shadow-outline bg-gradient-to-r from-secondary-100  to-secondary-400 
hover:from-secondary-100 hover:to-secondary-100
text-gray-100 hover:text-secondary-900`;

const Hero = (props) => {
    const {
        linkButtonText = "Feedback",
        linkButtonsrc = "/#",
        mainButtonText,
        heading,
        subHeading,
    } = props;
    const navLinks = [
        <NavLinks key={2}>
            <PrimaryLink href={linkButtonsrc}>{linkButtonText}</PrimaryLink>
        </NavLinks>,
    ];

    return (
        <Container imageSrc={bg}>
            <OpacityOverlay />
            <HeroContainer>
                <StyledHeader links={navLinks} />
                <Content>
                    <Heading>{heading}</Heading>
                    <Description>{subHeading}</Description>

                    <PrimaryAction>{mainButtonText}</PrimaryAction>
                </Content>
            </HeroContainer>
        </Container>
    );
};

export default Hero;
