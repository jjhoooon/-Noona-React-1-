import { useState } from 'react';
import './App.css';
import Box from './component/Box';

//0319
//1.박스2개 -> title(you, computer), image, result(win, draw, lose)
//2.버튼 3개 -> onClick => 해당 choice 화면에 보여주기.

//0320
//1. 랜덤으로 computer의 "가위바위보" 생성.
//2. user 기준으로 win, lose, tie 결과값 도출
//*3. user, computer 따로 결과값 나타내기.

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
}


function App() {

  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [userResult, setUserResult] = useState("")
  const [computerResult, setComputerResult] = useState("")

  const Play = (userChoice) => {
    setUserSelect(choice[userChoice])

    let computerChoice = randomChoice()

    setComputerSelect(computerChoice)

    if (userSelect && computerSelect) {
      setUserResult(makeUserResult(userSelect, computerSelect))
      setComputerResult(makeComputerResult(userSelect, computerSelect))
    }
  }


  const makeUserResult = (user, computer) => {

    console.log("user : ", user, "computer: ", computer)

    if (user.name == computer.name) {
      return "tie"
    }
    else if (user.name == 'Rock')
      return computer.name == 'Scissors' ? "win" : "lose"
    else if (user.name == 'Scissors')
      return computer.name == 'Paper' ? "win" : "lose"
    else if (user.name == 'Paper')
      return computer.name == 'Rock' ? "win" : "lose"
  }

  const makeComputerResult = (user, computer) => {
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

  const randomChoice = () => {
    let itemArray = Object.keys(choice) // itemArray = [rock, scissors, paper]
    let randomItem = itemArray[Math.floor(Math.random() * itemArray.length)]
    console.log(randomItem)
    let final = choice[randomItem]

    return final
  }


  return (
    <div className='root'>
      <div className='boxContainer'>
        <Box title='you' item={userSelect} result={userResult} />
        <Box title='computer' item={computerSelect} result={computerResult} />
      </div>
      <div className='buttonContainer'>
        <button onClick={() => Play("scissors")}>가위</button>
        <button onClick={() => Play("rock")}>바위</button>
        <button onClick={() => Play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
