const handleSubmit = async (e) => {
  e.preventDefault();
  onAdd(blog); // This updates the local UI

  try {
    const response = await fetch('http://localhost:5000/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    });

    if (!response.ok) {
      throw new Error('Failed to save blog to MongoDB');
    }

    console.log('✅ Blog saved to MongoDB');
  } catch (error) {
    console.error('❌ Error saving blog:', error.message);
  }

  setBlog({ title: '', content: '' }); // Clear form
};
