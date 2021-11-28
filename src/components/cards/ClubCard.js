/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import img from "../../assets/images/gre-image.jpg";


//start of STYLED COMPONENTS
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-10 flex flex-wrap justify-center`;


const Column = tw.div`xl:mr-12`;

const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 `;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs `;
const CardImage = styled.div((props) => [
    `background-image: url("${props.imageSrc}");`,
    tw`h-80 bg-cover bg-center rounded drop-shadow`,
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;

//CLUB CARD DETAILS Styles
const CardTitle = tw.h5`text-secondary-100 text-xl mt-4 font-bold`;
const CardCompany = tw.div`text-secondary-200 font-bold text-lg`;
const CardType = tw.div`text-secondary-200 font-semibold text-sm`;

//End of STYLED COMPONENTS

const ClubCard =({}) => {
    const cards = [
        {
            imageSrc: "../../assets/images/gre-image.jpg",
            title: "General Club",
            members: "10",
            camps: "1",
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
            title: "GRE Preparation Club",
            members: "50",
            camps: "4",
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
            title: "Wake Up Early Club",
            members: "89",
            camps: "2",
        },
    ];
    return (
        <Container>
            <Content>
                {cards.map((card, index) => (
                    <CardColumn key={index}>
                        <Card>
                            <CardImage imageSrc={img} />
                            <CardText>
                                <CardTitle>{card.title}</CardTitle>
                                <CardHeader>
                                    <CardCompany>
                                        {card.members} Members
                                    </CardCompany>
                                    <CardType>{card.camps} Camps</CardType>
                                </CardHeader>
                            </CardText>
                        </Card>
                    </CardColumn>
                ))}
            </Content>
        </Container>
    );
};

export default ClubCard