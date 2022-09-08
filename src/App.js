import { useState } from 'react';
import About from './components/about';
import Coverter from './components/coverter';
import Navbar from './components/navbar';
import Alert from './components/alert';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import DateCard from './components/dateCard';

// Styles
import './App.scss';
import { Resturant } from './components/resturant/Resturant';
import { UseState } from './components/hooks/useState';
import { Todo } from './components/todo/Todo';


const dateCardData = [
  {
    id: '1',
    date: (new Date("2022", "03", "23")),
    title:'First Day Date',
    description: 'Lorem Ipsume hire set name out'
  },
  {
    id: '2',
    date: (new Date("2022", "03", "23")),
    title:'First Day Date',
    description: 'Lorem Ipsume hire set name out'
  }
]

function App() {
  // const [mode, setMode] = useState("light");
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null)
  //   }, 2000);
  // }

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark")
  //     document.body.style.backgroundColor = '#212529';
  //     showAlert("Dark Mode has been enabled", "success");
  //     document.title = "Dark Mode Enabled"
  //   }
  //   else {
  //     setMode("light")
  //     document.body.style.backgroundColor = '#F8F9FA'
  //     showAlert("Light Mode has been enabled", "success");
  //     document.title = "Light Mode Enabled"
  //   }
  // }


  return (
    <div className="App">
      {/* <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className='container mt-5'>
        <CardPrimary title="The Beautyfull City" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
        <About />
        <Coverter showAlert={showAlert} />
      </div> */}

      {/* <div className="container pt-5">
        {dateCardData.map((item, index) => (
          <DateCard
          index={index}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div> */}

      {/* <Resturant/> */}

      <Todo/>

    </div>
  );
}

export default App;

