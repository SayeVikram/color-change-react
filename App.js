import './app.css';
import {useState} from 'react';

function App() {
  
  const[color, setColor] = useState('white');

  const clickLog = (e) => {
    const newColor = e.target.style.backgroundColor;
    setColor(newColor);
  }

  return (
    
    <div className="App" style={{
      backgroundColor: color,
    }}>
      
      <div className="box">

      <div onClick={(e) => clickLog(e)} className="items" style={{
        backgroundColor: 'lightseagreen',
        border: '5px solid black',
        borderRadius: '10px',
        height: '100px',
        width: '100px'
      }}> </div>
      <div onClick={(e) => clickLog(e)} className="items" style={{
        backgroundColor: 'lightblue',
        border: '5px solid black',
        borderRadius: '10px',
        height: '100px',
        width: '100px'
      }}> </div>
      <div onClick={(e) => clickLog(e)} className="items" style={{
        backgroundColor: 'yellow',
        border: '5px solid black',
        borderRadius: '10px',
        height: '100px',
        width: '100px'
      }}> </div>
      <div onClick={(e) => clickLog(e)} className="items" style={{
        backgroundColor: 'green',
        border: '5px solid black',
        borderRadius: '10px',
        height: '100px',
        width: '100px'
      }}> </div>

      </div>
     
      

      
    </div>
  );
}

export default App;
