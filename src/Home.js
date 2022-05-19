import { useState } from "react";
const Home = () => {
    // let sname = 'benji';
    // const handleClick = function(e){
    //     console.log('hello ninjas',e);
    // }
    // const handleClickAgain = (name)=>{
    //     console.log("hello "+name )
    // }

    const [sname, setName] = useState('mario')
    const [age, setAge] = useState(7);
    
    const dispName = ()=>{
        setName('luigi');
        setAge(24)
    }

    
    return ( 
        <div className="home">
            <h2>HomePage</h2>

            <p>Name: {sname}</p>
            <p>Age: {age}</p>
            <br />
            <button onClick={dispName}>Change Name</button>
            {/* <button onClick={handleClick}>Click me</button> */}
            <br />
            <br />
            {/* <button onClick={()=> handleClickAgain('mario')}>Click me again</button> */}
            <br />
            <br />
        </div>
     );
}
 
export default Home;