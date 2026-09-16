import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Footer from './common/Footer';
import auth from '../config/firebase';
function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [admin,setadmin] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(function(user){
            if(user){
                if(user.uid === "SracrRaZhdVxtTXLLOIBh5kjFuG2"){
                    setadmin(true)
                }
                axios.get("http://localhost:5000/api/blogs").then((res) => {
                    setBlogs(res.data)
                }).catch(() => {
                    console.log("Error fetching data")
                })
                return
            }
            alert("You have to login to see blogs")
            navigate("/login")
        })
        window.scrollTo(0, 0);
        return unsubscribe
    }, [navigate])



    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');


    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`http://localhost:5000/api/blogs/like/${blog_id}`);
            // After successfully updating the likes count in the backend, fetch the updated list of blogs
            if (response.status === 200) {
                axios.get("http://localhost:5000/api/blogs").then((res) => {
                    console.log(res.data)
                    setBlogs(res.data)
                }).catch(() => {
                    console.log("Error fetching data")
                })
            }
        } catch (error) {
            console.error('Error liking the blog post:', error);
        }
    };

    const handleNewBlogSubmit = (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        const today = new Date();
        const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });


        const likes = 0
        axios.post("http://localhost:5000/api/blogs", { newTitle, date, newContent, likes }).then((res) => {
            console.log(res.data)

            axios.get("http://localhost:5000/api/blogs").then((res) => {
                console.log(res.data)
                setBlogs(res.data)
            }).catch(() => {
                console.log("Error fetching data")
            })

        });




        setNewTitle('');
        setNewContent('');
    };

    return (
        <div className="page-container blog-section inner-page">
            <div className='section-title-row blog-heading'><div><p className='eyebrow'>01 / Field notes</p><h1 className="section-heading">Latest <span className='accent'>blogs.</span></h1></div><p className='section-intro'>Ideas, lessons, and observations from building for the web.</p></div>

            {/* Blog creation form */}
            {admin?
            <div className="blog-creation-form surface">
                <p className='eyebrow'>Admin / New post</p><form onSubmit={handleNewBlogSubmit} className="blog-form">
                    <input
                        type="text"
                        placeholder="Blog Title"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="field"
                        required
                    />
                    <textarea
                        placeholder="Blog Content"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className="field"
                        rows="4"
                        required
                    />
                    <button type="submit" className="button-style">
                        Add Blog
                    </button>
                </form>
            </div>:""}

            <div className="blogs-container">
                {blogs.map((blog) => (
                    <div key={blog._id} className="blog-post surface">
                        <p className='eyebrow'>{blog.date}</p><h3 className="blog-title">{blog.newTitle}</h3>
                        <p className="blog-content">{blog.newContent}</p>
                        <button className="like-button" onClick={() => handleLike(blog._id)}>Like <span>♥</span> {blog.likes}</button>
                    </div>
                ))}
            </div>
<br />
            <Footer/>
        </div>
    );
}

export default Blogs