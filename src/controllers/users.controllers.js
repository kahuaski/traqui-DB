const User = require("../models/users.models");
const catchAsync = require("../utils/catchASync");
const bcrypt = require("bcrypt");
const generateJWT = require("../utils/appError");
const {token}=require('morgan')
const AppError = require("../utils/appError");
//findall

exports.findAllUser = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    where: {
      status: "available",
    },
    attributes: {
      exclude: ["password", "status"],
    },
  });
  res.status(200).json({
    results: users.length,
    success: "ok",
    users,
  });
});

//create users
exports.createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, phone } = req.body;
  


  const salt = await bcrypt.genSalt(12);

  const encryptedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name: name.toLowerCase(),
    email: email.toLowerCase(),
    password: encryptedPassword,
    phone: phone,
  });

  return res.status(201).json({
    message: "alo...111",
    user,
  });
  const token = await generateJWT(user.id);
  res.status(201).json({
    status: "success",
    token: token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  });
});
//Login Users

exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const users = await User.findOne({
    where: {
      email: email.tolowercase(),
      status: "available",
    },
  });
  if (!users) {
    return next(new AppError(`User with email: ${email} was not found`, 404));
  }
  //password validation with bcrypt
  if (!(await bcrypt.compare(password, users.password))) {
    return next(new AppError(`wrong email or password`, 401));
  }
  const token = await generateJWT(users.id);
  res.status(200).json({
    status: "success",
    token: token,
    users: {
      id: users.id,
      name: users.name,
      email: users.email,
      phone: users.phone,
    },
  });
});
//findOne users

exports.findOneUser = catchAsync(async (req, res, next) => {
  const { users } = req;
  res.status(200).json({
    status: "success",
    message: "Users found",
    users,
  });
});
//Update Users
exports.updateUser = catchAsync(async (req, res, next) => {
  const { users } = req;
  //const {name,email}=req.body
  res.status(200).json({
    status: "success",
    message: `User with id:${users.id} updated`,
    users: {
      id: users.id,
      name: users.name,
      email: users.email,
      phone: users.phone,
    },
  });
});
//Delete users
exports.deleteUSer = catchAsync(async (req, res, next) => {
  const { users } = req;
  await User.update({ status: "disable" });
  res.status(200).json({
    status: "success",
    message: `User with id:${users.id} deleted`,
  });
});
