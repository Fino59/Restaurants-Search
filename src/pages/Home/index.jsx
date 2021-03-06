import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png'
import { Card } from '../../components';

import { Wrapper, Container, Search, Logo, Map, CarouselTitle, Carousel } from "./style";

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do Restaurante Search" />
                    <TextField
                        label='Pesquisar Restaurantes'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}>
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} />
                        <Card photo={restaurante} />
                        <Card photo={restaurante} />
                        <Card photo={restaurante} />
                        <Card photo={restaurante} />
                        <Card photo={restaurante} />
                    </Carousel>
                </Search>
            </Container>
            <Map />            
        </Wrapper>
    );
};

export default Home;