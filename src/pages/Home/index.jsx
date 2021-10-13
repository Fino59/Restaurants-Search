import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg'

import { Container, Search } from "./style";

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    return (
    <Container>
        <Search>
            <img src={logo} alt="Logo do Restaurante Search" />
            <TextField
                label='Pesquisar'
                outlined
                //  onTrailingIconSelect={{}) => this.setState({value: ''})}
                trailingIcon={<MaterialIcon role="button" icon="search"/>}>
            <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            </TextField>
        </Search>
    </Container>
    );
};

export default Home;