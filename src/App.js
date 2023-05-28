import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const nayks=['alomgir','hero Alom','Akash','salman']
  return (
    <div className="App">
      <header className="App-header">
        <p>i am react developer</p>
        {/* <Person nayok={ nayks[0]} nayka='Mousumi'></Person>
        <Person nayok='salman' nayka='katrina'></Person>
        <Person nayak='josim' nayka='sabana'></Person>
        <Person nayak='sharuk' nayka='kazol'></Person> */}
        <Person name='Munna' job='Football'></Person>
        <Person name='masum' job='Dorsok'></Person>
      </header>
    </div>
  );
}

// function Person(props){
//   const personStyle={
//        border:'1px solid red',
//        margin:'2px'
//   }
//    return (
//    <div style={personStyle}>
//     <h1>Name:{props.nayok}</h1>
//    <h3>Hero Of {props.nayka}</h3>
//    </div>
//    )
// }
function Person(props){

return(
  <div style={{border:'2px solid gold' ,width:'200px',padding:'5px'}}>
    <h3>My Name:{props.name}</h3>
    <p>My Profession:{props.job}</p>
  </div>
)
}

export default App;
