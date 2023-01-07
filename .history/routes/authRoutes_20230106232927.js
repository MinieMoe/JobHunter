import express from 'express'
import { register, login, updateUser  } from '../controllers/authController'

//routers
const router = express.Router()

//middleware
router.route('/register').post(register)
router.route('/login').post(login)
router.route('updateUser').patch(updateUser)

export default router