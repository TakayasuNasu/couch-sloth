import React from 'react';
import styled from 'styled-components';

// CSS styling

const Wrapper = styled.section`
    padding: 4em;
    background: black;
`;

const StyledInput = styled.input`
    color: #000;
    background: #d9d9d9;
    width: 25%;
    height: 40px;
    border: 2px solid white;
    border-radius: 15px;
`;

const Title = styled.h2`
    text-align: center;

`;

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {

        return (
            <>
            <Title></Title>
            <Wrapper>
                <form onSubmit={this.handleSubmit} className='video-form'>
                    <div className='searchbar-input'>
                        <StyledInput onChange={this.handleChange} name='video-search' type='text' placeholder=' Search your videos here . . .'></StyledInput>
                    </div>
                </form>
            </Wrapper>
            </>
        )
    }   
}

export default Searchbar;