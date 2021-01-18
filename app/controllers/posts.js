'use strict';

const Post = require('../models/posts');

const deletePostsById = (req, res, next) => {
  const { postId } = req.params;

  Post.deleteOne({ _id: postId }, (err, result) => {
    if (err) {
      return next(err);
    }

    return next();
  });
};

const getPostsById = (req, res, next) => {
  const { postId } = req.params;

  Post.findById({ _id: postId }, (err, result) => {
    if (err) {
      return next(err);
    }

    req.resources.posts = result;
    return next();
  });
};

const getPosts = (req, res, next) => {
  Post
    .find()
    .populate('userId', 'email name')
    .exec((err, result) => {
      if (err) {
        return next(err);
      }

      req.resources.posts = result;
      return next();
    });
};

const createPost = (req, res, next) => {
  const post = new Post(req.body);

  post.save((err, result) => {
    if (err) {
      return next(err);
    }

    req.resources.posts = result;
    return next();
  });
};

module.exports = {
  createPost,
  getPosts,
  getPostsById,
  deletePostsById,
};
