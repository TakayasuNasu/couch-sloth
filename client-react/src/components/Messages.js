import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faPlay, faSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { TextField } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

library.add(fab, fas, far, faPlay, faSmile, faPaperPlane)


const Wrapper = styled.section`
    background: black;
    width: 96%;
`;

const Form = styled.form`

`;


const SubmitButton = styled.button`
    margin-left: -94px;
`;

const SmileyButton = styled.button`
    margin-left: 24px;
`;

const FlexBox = styled.div`
    display: flex;
    position: relative;
    .play, .smile {
        cursor: pointer;
        position: relative;
        top: -12px;
        z-index: 10;
        background-color: transparent;
        border: none;
        transition: .2s;
        &:hover {
            transform: scale(1.4, 1.4);
        }
    }
`

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
        if (this.state.value) {
            this.props.sendMessage({userName: this.props.userName, messages: this.state.value, iconColor:this.props.iconColor})
        }
        this.setState({value: ''})
        event.preventDefault()
    }

    render() {
        return (
            <Wrapper>
                <Form>
                    <ThemeProvider theme={createMuiTheme({palette:{type:'dark'}})}>
                        <FlexBox>
                            <TextField
                                required
                                fullWidth
                                label="Write your message here..."
                                id="filled-basic"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <SubmitButton
                                className="play"
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                <FontAwesomeIcon icon={["fas","paper-plane"]} size="2x" color="#fff" />
                            </SubmitButton>
                            <SmileyButton className="smile">
                                <FontAwesomeIcon icon={["far", "smile"]} size="2x" color="#fff" />
                            </SmileyButton>
                        </FlexBox>
                    </ThemeProvider>
                </Form>
            </Wrapper>
        );
    }
}

TextInput.defaultProps = {
    userName: '',
    iconColor: '#0652DD',
    sendMessage: () => []
}

export default TextInput