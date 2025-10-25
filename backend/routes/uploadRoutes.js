import express from 'express';
import { uploadProfilePicture, upload } from '../controllers/uploadController.js';

const router = express.Router();

// POST /api/upload-profile/:userId
router.post('/upload-profile/:userId', upload.single('profilePicture'), uploadProfilePicture);

export default router;