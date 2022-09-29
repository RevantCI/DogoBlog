import {useState} from 'react';
const Home = () => {
    const [blogs, setBlogs] = useState([
            { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
          ]);
    // const [name, setName]= useState('Beena');
    // const [age, setAge] = useState(33);
    // const handleClick =() => {
    //    setName('Ashish');
    //    setAge(34); 
    // }
    return (  
        <div className="Home">
            {/* <h2>Home Page</h2> */}
            {/* <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                </div>
            ))}
            </div>
    );
}
export default Home;