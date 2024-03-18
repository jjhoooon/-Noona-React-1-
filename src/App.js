import logo from './logo.svg';
import './App.css';

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
    name: "paper",
    image: "https://cdn.crowdpic.net/detail-thumb/thumb_d_BD030450290C2E8F769E16352FDFF090.jpg",
  },
}

//그냥 일반 function() 형식으로 정의하면, React는 렌더링할때 함수를 실행시켜버림.
//따라서, 이를 방지하기 위해 콜백함수 형식 ()=>function() 으로 정의해주면됨.

//UI를 반응하게 하고싶다 -> state 사용.

//Dynamic한 State 값에는 guard 코드가 필요할 가능성 존재. (&&연산자)

function App() {
  return (
    <div>

    </div>
  );
}

export default App;
