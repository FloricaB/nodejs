'use strict';

const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const helpersCtrl = require('../helpers');

//route level middleware
router.get(
  '/posts',
  postsCtrl.getPosts,
  helpersCtrl.responseToJson('posts')
);

router.get(
  '/posts/:postId',
  postsCtrl.getPostsById,
  helpersCtrl.responseToJson('posts')
);

router.post(
  '/posts',
  postsCtrl.createPost,
  helpersCtrl.responseToJson('posts')
);

router.delete(
  '/posts/:postId',
  postsCtrl.getPostsById,
  postsCtrl.deletePostsById,
  helpersCtrl.responseToJson('posts')
);

router.put('/posts', function (req, res, next) {
  console.log('posts route PUT');
  return res.json({ text: 'Hello PUT' });
});

module.exports = router;
