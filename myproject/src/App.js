// import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello.js';
import Message from './components/Message.js';
// import Profile from './components/Profile.js';

function App() {
  return (
    <div className="App">
      <Message messagecontent="This is a message from props"/>
    </div>
  );
}

export default App;
