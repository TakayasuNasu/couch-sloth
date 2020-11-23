import React from 'react'
import styled from 'styled-components'

const UL = styled.ul`
  width: 402px;
  background-color: #181818;
`

const ListItem = styled.li`
  display: flex;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
  & > li {
    margin-top: 16px;
  }
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    background-color: ${({bgColor}) => bgColor};
    border-radius: 50%;
  }
  .right {
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
  }
  p.chat {
    line-height: 1.4;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }
`

const items = props => {
  if (props.messages) {
    let count = 0
    return props.messages.map(data => {
      count ++
      return (
        <ListItem bgColor={data.iconColor} key={data.userName + count}>
          <div className="left"><p>{data.userName.charAt(0).toUpperCase()}</p></div>
          <div className="right">
            <p className="chat">{data.messages}</p>
          </div>
        </ListItem>
      )
    })
  } else {
    return (
      <ListItem>
        <div className="left"><p>T</p></div>
        <div className="right">
          <p className="chat">test test test.</p>
        </div>
      </ListItem>
    )
  }
}

const Chats = props => (
  <UL>
    {items(props)}
  </UL>
)

Chats.defaultProps = {
  messages: '',
}

export default Chats