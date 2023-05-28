import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const nayoks=['alomgir','hero Alom','Akash','salman','bappy','shubo','habib']
 const Products=[
  {name:'photoshop',price:'$90.99'},
  {name:'ilistrator',price:'$60'},
  {name:'pdf reader',price:'$20'},
  {name:'premier El',price:'$70'}
]
//  const ProductsNames=Products.map(product=>product.name);
//   console.log(ProductsNames);

// const ProductsNames=Products.map(product=>product);
// console.log(ProductsNames);

// const nayoksNames=nayoks.map(nayok=>nayok);
// console.log(nayoksNames);

  return (
    <div className="App">
      <header className="App-header">
        <p>i am react developer</p>
        <Counter></Counter>
        <Users></Users>
        <ul>{
          nayoks.map(nayok =><li>{nayok}</li>)
          }
          {
            Products.map(product=><li>{product.name}</li>)
          }
        </ul>
        {
          Products.map(product=> <Product product={Products[0]}></Product>)
        }
        {/* <Person nayok={ nayks[0]} nayka='Mousumi'></Person>
        <Person nayok='salman' nayka='katrina'></Person>
        <Person nayak='josim' nayka='sabana'></Person>
        <Person nayak='sharuk' nayka='kazol'></Person> */}


        {/* <Product product={Products[0]}></Product>
        <Product product={Products[1]}></Product>     convert to map line 34
        <Product product={Products[2]}></Product> */}


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

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count+1);
  
  return(
    <div>
    <h1>Count:{count}</h1>
    <button onClick={(() => setCount(count-1) )}>Decrease</button> 
    <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
 function Users(){
  const [users, setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => setUsers(data));
  },[])
   return(
    <div>
      <h3> Dynamic users:{users.length}</h3>
      {
       <ul>
      {
        users.map(user=> <li>{user.name}</li>)
      }
      
       </ul>
      }
    </div>
   )
 }
function Product(props){
  const ProductStyle={
    border:'1px solid red',
    borderRadius:'5px',
    backgroundColor:'gray',
    hight:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price}=props.product;
  console.log(name,price)
  return(
    <div style={ProductStyle}>
   <h3>{name}</h3>
   <h5> {price}</h5>
   <button>Buy Now</button>
    </div>
  )
}

function Person(props){

return(
  <div style={{border:'2px solid gold' ,width:'200px',padding:'5px'}}>
    <h3>Name:{props.name}</h3>
    <p>My Profession:{props.job}</p>
  </div>
)
}

export default App;
