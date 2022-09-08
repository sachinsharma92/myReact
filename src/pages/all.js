import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import FatchNews from './components/fatchNews';
import FatchUnsplashImage from './components/fatchUnsplashImage';
import FormCard from './components/formCard';



const students = [
  {
    name: 'sachin sharma',
    marks: 40
  },
  {
    name: 'Aakash sharma',
    marks: 35
  },
  {
    name: 'Ritik sharma',
    marks: 22
  },
  {
    name: 'Sohil sharma',
    marks: 25
  },
  {
    name: 'Anjali sharma',
    marks: 20
  },
]

// For Loop
// for (let i = 0; i < students.length; i++) {
//   students[i].marks = students[i].marks - 10
// }
// console.log(students);


// For Each
// students.forEach((student)=>{
//   student.marks = student.marks - 5; 
//   console.log(students);
// })


// For off
// for (let student of students){
//   student.marks = student.marks - 5
//   console.log(student);
// }

// Filter
// const notEligible = students.filter((student) => {

// Step 1
// if(student.marks < 35) {
//   return true;
// }
// else {
//   return false
// }

// Step 2
// return student.marks < 35
// })

// Step 3
// const notEligible = students.filter((student) => student.marks < 35)


// Map Function
// const finalData = students.map((user) => {
//   return {
//     fullData: user.name + " " + user.marks
//   }
// })


// const moviesName = [
//   {
//     name: 'Raja Babu',
//     budget: 10
//   },
//   {
//     name: 'Mehndi',
//     budget: 20
//   },
//   {
//     name: '1920',
//     budget: 30
//   },
//   {
//     name: 'Hum Aapke hai Kaun',
//     budget: 40
//   },
//   {
//     name: 'Mr. India',
//     budget: 50
//   },
// ]

// let total = 0;

// moviesName.forEach((movie)=> {
//   total = total + movie.budget;
// })


// Reduce
// const total = moviesName.reduce((acc, movie) => {
//   acc = acc + movie.budget
//   return acc;
// }, 0)


// const users = [
//   {
//     name: 'Raja Babu',
//     id: 10
//   },
//   {
//     name: 'Mehndi',
//     id: 20
//   },
//   {
//     name: '1920',
//     id: 30
//   },
//   {
//     name: 'Hum Aapke hai Kaun',
//     id: 40
//   },
//   {
//     name: 'Mr. India',
//     id: 50
//   },
// ]

// const myUsers = users.find((user)=> {
//   return user.name === "Mr. India"; //short fuction
// if(user.id === 10) {
//   return true
// }
// else {
//   return false
// }
// })

// console.log(myUsers)



function App() {
  const [num, setNum] = useState();
  const [name, setName] = useState('Dummy');
  const [move, setMove] = useState('01');
  const [moveName, setMoveName] = useState([0]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/type/${num}`);
      console.log(res.data, 'checki ressss');
      setName(res.data.name.toUpperCase());
      setMove(res.data.moves.length);
      setMoveName(res.data.moves);
    }
    getData();
  }, [num])


  const [apiData, setApiData] = useState();

  useEffect(() => {
    async function callData() {
      const apiResult = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setApiData(apiResult.data);
    }
    callData();
  }, [apiData])


  // const failed = students.filter((student) =>{
  //   if(student.age > 25) {
  //     return true
  //   }
  //   return false
  // })

  // console.log(failed);


  // const languages = ["Javascript", "Python", "C++", "Html"]

  // languages.pop()
  // languages.push('Dart')
  // languages.unshift('CSS')
  // languages.pop()

  // console.log(languages);


  // for(let i = 0; i < 4; i++) {
  //   console.log("*")
  // }


  return (
    <div className="App pb-5">
      {/* <FatchUnsplashImage />

      <br/>
      <br/>
      <br/>

      <FatchNews />

      <FormCard/>

      <br/>
      <br/>
      <br/>

      <div className='container'>
        <h1>My Name is <span style={{ color: 'red'}} className={`${name === "GROUND" ? 'ground-active' : ''}`}>{name}</span></h1>
        <h1>My Moves value is <span style={{ color: 'blue' }}>{move}</span></h1>
        <h1>My Move Name is</h1>
        <div className='d-flex gap-3'>
          {moveName.map((valueMoves) => (
            <div style={{ color: 'red' }}>{valueMoves.name}</div>
          ))}
          </div>
        <select
          value={num}
          onChange={(event) => {
            setNum(event.target.value)
          }}
        >
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </select>
      </div> */}

      {/* <div className='container'>
        <h1>My Name is <span style={{ color: 'red' }}>{name}</span></h1>
        <h1>My Moves value is <span style={{ color: 'blue' }}>{move}</span></h1>
        <h1>My Move Name is <span style={{ color: 'blue' }}>{moveName}</span></h1>
        <select
          value={num}
          onChange={(event) => {
            setNum(event.target.value)
          }}
        >
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </select>

        <div className='table-layout card mt-5'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {apiData &&
              (apiData).map((apiDetails, index) => {
                return (
                  <tr key={index}>
                    <td>{apiDetails.id}</td>
                    <td>{apiDetails.title}</td>
                    <td>{apiDetails.body}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        </div>
      </div> */}
    </div>
  );
}

export default App;
