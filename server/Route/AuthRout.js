import express from'express';
import UserController from'../Controller/AtherController';
const Route= express.Router();
Route.post('/auth/signup',UserController.UserController.signup);
Route.post('/auth/signin',UserController.UserController.signin);

export default Route;
