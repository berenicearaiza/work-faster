import React , {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [timeLeft, setTimeLeft] = useState(25*60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [encourage, setEncourage] = useState("");

  const cheerMessages = [
    "GOOOOOOO",
    "keep studying baddie",
    "you will get an A",
    "if you can do this, you can do anything",
    "focus, focus, focus",
  ];

  const breakMessages = [
    "adios popo",
    "reel break",
    "pls come back",
    "walk around chat",
    "get sum coffee",
    "get a baguette"
  ];
  //encourage message updater
  useEffect(() => {
    let messageInterval: NodeJS.Timeout;

    if (isRunning) {
      const messages = isBreak ? breakMessages : cheerMessages;
      setEncourage(messages[0]); //set first message initially
      let idx = 1

      messageInterval = setInterval(() => {
        setEncourage(messages[idx]);
        idx = (idx + 1) % messages.length;
      }, 4000); //every 4 secs
    } else {
      setEncourage("");
    }

    return () => clearInterval(messageInterval);
  }, [isRunning, isBreak]);
  

  //countdown timer
  useEffect( () => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval( () => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return() => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');

    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const switchMode = (breakMode: boolean) => {
    setIsBreak(breakMode);
    setIsRunning(false);
    setTimeLeft(breakMode ? 5 * 60 : 25 * 60);
  }
  const handleClick = () => {
    if(!isRunning) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
      setTimeLeft(25*60);
    }
  }
  return (
    <div style={{ position: 'relative' }}>
      <div>
        <button className="closeButton">Close</button>
      </div>

      <div className="home-content">
        <div className="home-controls">
          <button className="image-button" onClick={ () => switchMode(false)}>Work</button>
          <button className="image-button" onClick={ () => switchMode(true)}>Break</button>
        </div>

          <p className={`encourage-text ${isRunning ? "hidden" : ""}`}>{ encourage }</p>
          <h1 className="home-timer">{formatTime(timeLeft)}</h1>

          <button className="home-button" onClick={handleClick}>Start</button>
          </div>
    </div>
  );
}

export default App;
