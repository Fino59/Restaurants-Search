import React from "react";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    justify-content: center;    
    width: 120px;
    height: 120px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;    
`;

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #fff;
    font-size: 16px;
    padding: 5px;    
`;

const ImageCard = ({ photo, title }) => (
    <Card photo={photo}>
        <Title>{title}</Title>
    </Card>
);

export default ImageCard;