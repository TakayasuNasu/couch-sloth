import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
    padding: 4em;
    background: black;
`;

const StyledInput = styled.input`
    color: gray;
    background: #d9d9d9;
    width: 50%;
    height: 40px;
    border: 6px solid white;
    border-radius: 12px;
`;

const SubmitInput = styled.input`
    height: 52px;
`;

// const Messages = props => (
//     <h1>This is Messages component</h1>
// )


// quoted from https://reactjs.org/docs/forms.html
class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Your name',
            message: 'Write your message here...'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({message: event.target.message});
    }

    handleSubmit(event) {
        alert('A message was submitted: ' + this.state.message);
        event.preventDefault();
    }

    render() {
        return (
            <Wrapper>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        {/*Name:*/}
                        {/*<input type="text" value={this.state.name} onChange={this.handleChange} />*/}
                        Message:
                        <StyledInput id="message" type="text" value={this.state.message} onChange={this.handleChange} />
                        {/*<textarea value={this.state.message} onChange={this.handleChange}>*/}

                        {/*</textarea>*/}
                    </label>
                    <SubmitInput type="submit" value="Submit" />
                </form>
            </Wrapper>
        );
    }
}

export default TextInput