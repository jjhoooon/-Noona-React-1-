import React, { Component } from 'react'
import './App.css';
import BoxClass from './component/BoxClass';

const choice = {
    rock: {
      name: "Rock",
      image: "https://cdn.crowdpic.net/detail-thumb/thumb_d_2081D21AA2F78D094C9E409DB7046F2B.jpg",
    },
    scissors: {
      name: "Scissors",
      image: "https://th.bing.com/th/id/R.01b8b514046794f229bcb1b1b80e896f?rik=bL8%2frVFN26Wumg&riu=http%3a%2f%2ffile3.instiz.net%2fdata%2fcached_img%2fupload%2f2023%2f02%2f24%2f0%2f300294919ead99c794acdb9955730d0e.jpg&ehk=yMSiYelavdGEcwmWqq1bjrg5Pp70ED8F%2f%2fv6WHkLsls%3d&risl=&pid=ImgRaw&r=0",
    },
    paper: {
      name: "Paper",
      image: "https://cdn.crowdpic.net/detail-thumb/thumb_d_BD030450290C2E8F769E16352FDFF090.jpg",
    },
    default: {
      name: "Ready",
      image: "/ready.png"
    }
  }

export default class AppClass extends Component {
    
      
    constructor(props) {
        super(props);
        this.state = {
            userSelect: choice.default,
            computerSelect: choice.default,
            userResult: "",
            computerResult: "",
        }
    }
 
    Play = (userChoice) => { 
        this.setState({userSelect: choice[userChoice]})
        
        //[Error] -> randomChoice() 무한 루프.
        let computerChoice = this.randomChoice() 
        this.setState({computerSelect: computerChoice})

        this.setState({userResult: this.makeUserResult(choice[userChoice], computerChoice)})
        this.setState({computerResult: this.makeComputerResult(choice[userChoice], computerChoice)})        
    }

    makeUserResult = (user, computer) => {
        if(user.name == computer.name) return "tie"
        else if(user.name == "Rock")
            return computer.name == 'Scissors' ? "win" : "lose"
        else if (user.name == 'Scissors')
            return computer.name == 'Paper' ? "win" : "lose"
        else if (user.name == 'Paper')
            return computer.name == 'Rock' ? "win" : "lose"
    }

    makeComputerResult = (user, computer) => {
        if (user.name == computer.name) {
          return "tie"
        }
        else if (computer.name == 'Rock')
          return user.name == 'Scissors' ? "win" : "lose"
        else if (computer.name == 'Scissors')
          return user.name == 'Paper' ? "win" : "lose"
        else if (computer.name == 'Paper')
          return user.name == 'Rock' ? "win" : "lose"
      }


    randomChoice = () => {
        let itemArray = Object.keys(choice) // itemArray = [rock, scissors, paper]
        console.log("choice : ", choice)
        let randomItem = itemArray[Math.floor(Math.random() * (itemArray.length - 1))]
        console.log(randomItem)
        let final = choice[randomItem]
    
        return final
    }

    render() {
        return (
            <div className='root'>
                <div className='boxContainer'>
                    <BoxClass title='you' item={this.state.userSelect} result={this.state.userResult} />
                    <BoxClass title='computer' item={this.state.computerSelect} result={this.state.computerResult} />
                </div>
                <div className='buttonContainer'>
                    <button onClick={() => this.Play("scissors")}>가위</button>
                    <button onClick={() => this.Play("rock")}>바위</button>
                    <button onClick={() => this.Play("paper")}>보</button>
                </div>
          </div>
        )
    }
}
