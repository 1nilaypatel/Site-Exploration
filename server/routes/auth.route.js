import express from 'express';
import {signup, logOut} from '../controllers/auth.controller.js'

const router = express.Router();

router.post('/signup', signup);
router.get('/logout', logOut);

export default router;