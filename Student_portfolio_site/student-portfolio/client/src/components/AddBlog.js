// src/components/AddBlog.js
import React, { useState } from 'react';
import axios from 'axios';

function AddBlog({ onBlogAdded }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim()),
    };

    try {
      const res = await axios.post('http://localhost:5000/api/blogs', newBlog);
      onBlogAdded(res.data);

      // Clear form
      setTitle('');
      setContent('');
      setTags('');
    } catch (err) {
      console.error('Error adding blog:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Blog</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={e => setTags(e.target.value)}
      />

      <button type="submit">Add Blog</button>
    </form>
  );
}

export default AddBlog;
