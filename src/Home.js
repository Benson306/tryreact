import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // let sname = 'benji';
    // const handleClick = function(e){
    //     console.log('hello ninjas',e);
    // }
    // const handleClickAgain = (name)=>{
    //     console.log("hello "+name )
    // }

    // const [sname, setName] = useState('mario')
    // const [age, setAge] = useState(7);
    
    // const dispName = ()=>{
    //     setName('luigi');
    //     setAge(24)
    // }
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum ....', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum ....', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum ....', author: 'mario', id: 3}
    ]);

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter((blog)=> blog.id!== id)
        setBlogs(newBlogs)
    }

    useEffect(()=>{
        console.log('use effect ran');
        console.log(blogs)
    })

    
    return ( 
        <div className="home">
            {/* <h2>HomePage</h2> 
            <p>Name: {sname}</p>
            <p>Age: {age}</p>
            <br />
            <button onClick={dispName}>Change Name</button>
            <button onClick={handleClick}>Click me</button>
            <br />
            <br />
            <button onClick={()=> handleClickAgain('mario')}>Click me again</button>
            <br />
            <br /> 
            <BlogList blogs={blogs.filter( (blog)=> blog.author === 'mario')} title="Mario's Blogs!"/>
            */}

            <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>
            
            


        </div>
     );
}
 
export default Home;