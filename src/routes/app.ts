import express from 'express';
import PagesController from '../controllers/pages_controller';

const router = express.Router();

router.get('/', PagesController.call('index'));

export default router;
