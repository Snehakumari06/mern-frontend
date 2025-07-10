// export default function Home({age}){  

//   let name = "John";          
//   return (                        // react component return jsx  
//     //react fragment : empty container
//     <>                           
// <div >Hello {name} You are {age} years old.</div>
//   <p>This is a paragraph.</p>
//     </>
//   ) 

//--------------------------------------------------------------------------------------------

// if(age>18) return <h1>Welcome..</h1>
// else return <h1>Sorry..</h1>

//--------------------------------------------------------------------------------------------

// Ternary operator
// return (age>18) ?  <h1>Welcome..</h1> : <h1>Sorry..</h1> 

//--------------------------------------------------------------------------------------------

//These are conditional rendering examples
// return (age>18) && <h1>Welcome..</h1>;

//--------------------------------------------------------------------------------------------

// const handleClick = () => {
//     alert("Button clicked!");
// }

// const handleSubmit = (name) => {
//     alert(`Hello ${name}`);
// }
// return(
//     <>
//     <h2>Hello World</h2>
//     <button onClick={handleClick}>Click</button>
//     <button onClick={() => handleSubmit("Sneha")}>Submit</button>
//     </>
// )
//}

//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------


//Hooks
//increment and decrement score using useState hook
// import { useState } from 'react';
// export default function Home(){ 

//     const [score, setScore] = useState(0);    //variable=score, value=0, function=setScore

//     const increment = () => {
//         setScore(score + 1);  //update the value of score
//     }

//     const decrement = () => {
//         setScore(score - 1);  //update the value of score
//     }

// return(
//     <>
//     <p>{score}</p>
//     <button onClick={increment}>Increment Score</button>
//     <button onClick={decrement}>Decrement Score</button>
//     </>
// )

// }


//--------------------------------------------------------------------------------------------


//create a simple cricket score counter using useState hook
// import { useState } from 'react';
// export default function Home(){ 

//     const [scores, setRun] = useState(0);    //variable=run, value=0, function=setRun

//     const [wickets, setWicket] = useState(0); //variable=wicket, value=0, function=setWicket
//     const [message, setMessage] = useState("");

//     const run = () => {
//         setRun(scores + 1); 
//         setMessage("Well done..")

//     }

//     const wicket = () => {
//         setWicket(wickets + 1)
//         if(wickets >= 9) setMessage("All out");
//         else setMessage("Wicket taken..");
        
//     }

// return(
//     <>
//     <p>{scores}</p>
//     <button onClick={run}>Run</button>
//     <p>{wickets}</p>
//     <button onClick={wicket}>Wicket</button>
//     <p>{message}</p>
//     </>
// )

// }


//-------------------------------------------------------------------------------------------------

import { useState } from "react";
export default function Home() {
  const [wicket, setWicket] = useState(0);
  const [run, setRun] = useState(0);
  const [message, setMessage] = useState();
  const incrementRun = () => {
    if (wicket < 10) {
      setRun(run + 1);
      setMessage("Well Done");
    }
  };
  const incrementWicket = () => {
    if (wicket < 10) {
      setWicket(wicket + 1);
      setMessage("Better Luck Next Time");
    } else {
      setMessage("Game Over");
    }
  };

  return (
    <>
      <button onClick={incrementRun}>Run</button>
      <h3>{run}</h3>
      <button onClick={incrementWicket}>Wicket</button>
      <h3>{wicket}</h3>
      <hr />
      {message}
    </>
  );
}

//-------------------------------------------------------------------------------------------------

//Register a user using useState hook
// import { useState } from 'react';
// export default function Register(){ 

//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] =useState("");
//     const [pass, setPass] = useState("");

//     return(
//         <>
//         </>
//     )

// }