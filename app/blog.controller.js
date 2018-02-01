let Blog = require('mongoose').model('Blog');

exports.create = async (req, res) => {
  let blog = new Blog(req.body);

  try {
    let b = await blog.save();
    res.json({ blog: b });
  } catch(err) {
    res.status(500).json({ error: err });
  }
};

exports.delete = async (req, res) => {
  let blog = await Blog.findByIdAndRemove(req.params.blogId);

  try {
    if (!blog) {
      res.status(400).json({ error: 'No blog with the given ID' });
    } else {
      res.json({ blog: blog });
    }
  } catch(err) {
    err => res.status(500).json({ error: err })
  }
};

exports.read = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.blogId).exec();

    if (!blog) {
      res.status(400).json({ error: 'No blog with the given ID' });
    } else {
      res.json({ blog: blog });
    }
  } catch(err) {
    res.status(500).json({ error: err });
  }
};

exports.readAll = async (req, res) => {
  try {
    let blogs = await Blog.find({}).exec();
    res.json({ blogs: blogs });
  } catch(err) {
    res.status(500).json({ error: err })
  }
};

exports.update = async (req, res) => {
  try {
    let blog = await Blog.findByIdAndUpdate(req.params.blogId, req.body, { new: true });

    if (!blog) {
      res.status(400).json({ error: 'No blog with the given ID' });
    } else {
      res.json({ blog: blog });
    }
  } catch(err) {
    err => res.status(500).json({ error: err })
  }
};
