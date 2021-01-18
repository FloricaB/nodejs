'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { userModel } = require('../constants');

const userSchema = new Schema(
  {
    createdAt: Number,
    updatedAt: Number,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: false,
    },
    address: {
      streetName: {
        type: String,
        required: true
      },
      streetNumber: {
        type: String
      },
      city: {
        type: String
      }
    }
  },
  { timestamps: { currentTime: () => new Date().getTime() } }
);

module.exports = mongoose.model(userModel, userSchema, 'users');
