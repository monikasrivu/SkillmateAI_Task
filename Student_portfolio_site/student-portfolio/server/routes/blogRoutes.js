const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// POST blog
router.post('/', async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.status(201).send(blog);
});

// GET all blogs
router.get('/', async (req, res) => {
  const blogs = await Blog.find();
  res.send(blogs);
});

module.exports = router;
