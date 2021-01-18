'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { userModel, postModel } = require('../constants');

const postSchema = new Schema(
  {
    createdAt: Number,
    updatedAt: Number,
    postTitle: {
      type: String,
      required: true,
      unique: true,
    },
    postContent: {
      type: String,
      required: true,
      unique: false,
    },
    userId: {
      type: Object,
      ref: userModel,
      required: true
    },
    reviews: [
      {
        description: {
          type: String
        },
        rate: {
          type: Number
        }
      }
    ]
  },
  { timestamps: { currentTime: () => new Date().getTime() } }
);

module.exports = mongoose.model(postModel, postSchema, 'posts');
