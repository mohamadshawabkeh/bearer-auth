'use strict';
require('dotenv').config();
const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgresql://localhost:5432/basic-api',{});

module.exports = {sequelize, DataTypes}; 