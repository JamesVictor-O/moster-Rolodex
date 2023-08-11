import React, { Component } from 'react'
import CardList from "./components/cardList/cardList.component";
import { SearchField } from './components/searchField/searchfield.component';
// import ProfilePicture from "./components/Tweet/profilePicture"
// import NameWithHandle from './components/Tweet/nameWithHandle.tweet'
// import Message from './components/Tweet/massage.tweet'
// import Time from './components/Tweet/time.tweet'
// import ReactactionIcons from './components/Tweet/reactionIcons.tweet'
import './App.css'


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      monster: [],
      searchField:""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({monster:user}))
  }

  HandleState = (e) => this.setState({ searchField: e.target.value });
  
  render() {
    
    const { monster , searchField } = this.state;
    const filterMonsters = monster.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <div className='App
      bg-gradient-to-r from-[rgba(7,27,62,1)] to-[rgba(0,128,128,1)]
      h-[100%]
      '>
        <h1 className='Bigelow Rules flex justify-center align-middle pb-2 text-7xl
         text-[#0ccac4]
         
         '>Monster Rolodex</h1>
        <SearchField HandleState={ this.HandleState} />
        <CardList monster={filterMonsters}/>
      </div> 
    )
  }
}




// 
// let massage = {
//   name:"Ochewola Victor",
//   firstMessage: "it will be alright",
//   secondMessage: "this to shall pass",
//   retweet: 3,
// }
// function Tweet() {
//   return (
//     <div  className="tweet" >
//       <ProfilePicture />
//       <div className='content'>
//         <NameWithHandle myname={massage.name}/>
//         <Time />
//         <Message massage={ massage } />
//         <ReactactionIcons  retweet={massage.retweet} />
//       </div>
//     </div>
//   )
// }

export default App


