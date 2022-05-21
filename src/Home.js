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
    // const [blogs, setBlogs] = useState([
    //     {title: 'My new website', body: 'lorem ipsum ....', author: 'mario', id: 1},
    //     {title: 'Welcome party!', body: 'lorem ipsum ....', author: 'yoshi', id: 2},
    //     {title: 'Web dev top tips', body: 'lorem ipsum ....', author: 'mario', id: 3}
    // ]);

    // const handleDelete = (id)=>{
    //     const newBlogs = blogs.filter((blog)=> blog.id!== id)
    //     setBlogs(newBlogs)
    // }

    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('Benji');

    const [isPending, setIsPending] = useState(true);
   

    // useEffect(()=>{
    //     console.log(name);
    // },[name]);

    useEffect(()=>{
        setTimeout( ()=>{
            fetch('http://localhost:8000/blogs')
            .then( res=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data)
                setBlogs(data)
                setIsPending(false)
            })
        
        }, 2000)
    }, []);
    
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

            {/* {blogs && <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/> } */}

            {isPending &&   <div>Loading ....</div> }
            {blogs && <BlogList blogs={blogs} title='All Blogs!'/>} 
            <br />
            <button onClick={()=>setName('Luigi')}>Change Name</button>
            <p>{name}</p>
            
            


        </div>
     );
}
 
export default Home;