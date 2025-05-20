// src/components/Blogs.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddBlog from './AddBlog';

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = () => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleBlogAdded = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  return (
    <div>
      <AddBlog onBlogAdded={handleBlogAdded} />

      <h2>Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ul>
          {blogs.map(blog => (
            <li key={blog._id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <p><strong>Tags:</strong> {blog.tags.join(', ')}</p>
              <small>Posted on: {new Date(blog.createdAt).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Blogs;
