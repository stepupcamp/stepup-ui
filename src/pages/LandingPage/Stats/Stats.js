import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import {
  Container as ContainerBase,
  ContentWithPaddingLg,
} from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";
import Card from "components/cards/ClubCard";


const Container = tw(ContainerBase)`bg-gradient-to-r from-primary-100  to-primary-900 text-stepuptext -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-stepuptext text-center`;
const Description = tw(
  SectionDescription
)`text-gray-400 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`;
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`;
const StatKey = tw.div`text-xl font-medium`;
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`;

const Stats = ({
  subheading = "Fulfill your goal",
  heading = "Join among several active clubs",
  description,
  stats = [
    {
      key: "Active Clubs",
      value: "10+",
    },
    {
      key: "Active Members",
      value: "150+",
    },
    {
      key: "Success Stories",
      value: "50+",
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingLg>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <StatsContainer>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </StatsContainer>
      </ContentWithPaddingLg>
      <Card/>
    </Container>
  );
};

export default Stats;
