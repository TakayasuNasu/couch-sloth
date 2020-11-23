import ChatsComponent from '../components/Chats'

const data = [
  {userName: 'Yasu', messages: 'that we here highly resolve'},
  {userName: 'Yuki', messages: 'that these dead shall not have died in vain—that this nation,'},
  {userName: 'Nico', messages: 'under God, shall have a new birth of freedom—and that government of the people, by the people,'},
  {userName: 'Derrick', messages: 'by the people, for the people, shall not perish from the earth.'},
  {userName: 'Shin', messages: 'that we here highly resolve'},
  {userName: 'Taro', messages: 'that these dead shall not have died in vain—that this nation,'},
  {userName: 'beckham', messages: 'under God, shall have a new birth of freedom—and that government of the people, by the people,'},
  {userName: 'amazon', messages: 'by the people, for the people, shall not perish from the earth.'},
  {userName: 'google', messages: 'that we here highly resolve'},
  {userName: 'facebook', messages: 'that these dead shall not have died in vain—that this nation,'},
  {userName: 'apple', messages: 'under God, shall have a new birth of freedom—and that government of the people, by the people,'},
  {userName: 'microsoft', messages: 'by the people, for the people, shall not perish from the earth.'},
]

const Chats = props => (
  <ChatsComponent messages={data} />
)

export default Chats