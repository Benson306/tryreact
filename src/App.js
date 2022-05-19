import Navbar  from './Navbar';
import Home from './Home';
import Footer from './Footer'

function App() {
//   const title = 'Benji is Awesome';
//   const likes = 500;
  // const link = "https://kimtech-real-estate.herokuapp.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">  
        <Home />
        
        {/* <h1>{ title }</h1>
        <p>Liked: { likes } times</p>
        <p>{10 + 5}</p>
        <p>{"Hey Ninjas"}</p>
        <p>{ Math.random() +10 }</p>
        <a href={link}>My App</a> */}
      </div>
      <div className='footer' style={{
        backgroundColor: 'black'
      }}>
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
