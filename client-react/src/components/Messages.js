import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faPlay, faSmile } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas, far, faPlay, faSmile)


const Wrapper = styled.section`
    padding: 4em;
    background: black;
`;

const Form = styled.form`
    
`;

const StyledInput = styled.input`
    color: gray;
    background: #d9d9d9;
    width: 80%;
    height: 50px;
    border: 6px solid white;
    border-radius: 12px;
    vertical-align:top;
`;

const SubmitButton = styled.button`
    margin-left: -109px;
    margin-top: 6px;
    border-style: none;
    border-radius: 12px;
    background: #d9d9d9;
    color: white;
    height: 52px;
    width: 50px
`;

const SmileyButton = styled.button`
    margin-left: 2px;
    margin-top: 6px;
    border-style: none;
    border-radius: 12px;
    background: #d9d9d9;
    color: white;
    height: 52px;
    width: 50px
`;


// const Messages = props => (
//     <h1>This is Messages component</h1>
// )




// quoted from https://reactjs.org/docs/forms.html
class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A message was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <Wrapper>
                <Form>
                    <label>
                        {/*Message:*/}
                        <StyledInput id="message" type="text" value={this.state.message} placeholder="Write your message here..." onChange={this.handleChange} />
                    </label>
                    <SubmitButton onClick={this.handleSubmit} type="submit" value="Submit" ><FontAwesomeIcon icon="play" size="2x" color="black" /></SubmitButton>
                    <SmileyButton><FontAwesomeIcon icon={["far", "smile"]} size="2x" color="black" /></SmileyButton>
                </Form>
            </Wrapper>
        );
    }
}

export default TextInput