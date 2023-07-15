
import './App.css';
import Decision from './Decision';

function App() {
  return (
   <>
    <Decision>
    {(boolean) => {
      return (
        <h1>Am I going out tonight?? {boolean ? "Yes!" : "Nope!"}</h1>
      )
    }} 
    </Decision>
   </>
  );
}

export default App;
