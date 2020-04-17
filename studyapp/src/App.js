import React from 'react';
import Header from './components/Header';
import './styles.css';
import Main from './pages/main';

const App = () => (
  <div className="App">
     <Header />
     <Main />
  </div>
);

/* class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hello Amanda! </h1>
      </div>
    );
  } 
} */

export default App;
