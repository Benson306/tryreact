import Navbar  from './Navbar';
import Home from './Home';
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';

function App() {
//   const title = 'Benji is Awesome';
//   const likes = 500;
  // const link = "https://kimtech-real-estate.herokuapp.com";

  return (
    <Router>

          <div className="App">
      <Navbar />
      <div className="content">  
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>
        </Switch>
        
      </div>
      <div className='footer' style={{
        backgroundColor: 'black'
      }}>
        <Footer />
      </div>

      {/* <h1>{ title }</h1>
        <p>Liked: { likes } times</p>
        <p>{10 + 5}</p>
        <p>{"Hey Ninjas"}</p>
        <p>{ Math.random() +10 }</p>
        <a href={link}>My App</a> */}
      
    </div>

    </Router>
    
  );
}

export default App;
