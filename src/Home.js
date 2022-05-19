import { useState } from "react";
const Home = () => {
    // let sname = 'benji';
    // const handleClick = function(e){
    //     console.log('hello ninjas',e);
    // }
    const [sname, setName] = useState('mario')
    
    const dispName = ()=>{
        setName('luigi');
    }

    const handleClickAgain = (name)=>{
        console.log("hello "+name )
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>

            <p>{sname}</p>
            <br />
            <button onClick={dispName}>Change Name</button>
            {/* <button onClick={handleClick}>Click me</button> */}
            <br />
            <br />
            <button onClick={()=> handleClickAgain('mario')}>Click me again</button>
            <br />
            <br />
        </div>
     );
}
 
export default Home;