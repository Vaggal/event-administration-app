import { Router } from 'express';
import { getAllEvents, getEventWithId, createEvent, updateEventWithId, deleteEventWithId } from '../controllers/events';
import { body, param } from 'express-validator';

const router = Router();

router.get('/', getAllEvents);

router.get(
  '/:id',
  param('id').isLength({
    min: 24,
    max: 24,
  }),
  getEventWithId
);

router.post(
  '/',
  body('organizer').isString(),
  body('title').isString(),
  body('description').isString(),
  body('address').isString(),
  body('date').isISO8601(),
  createEvent
);

router.put(
  '/:id',
  param('id').isLength({
    min: 24,
    max: 24,
  }),
  body('title').isString(),
  body('organizer').isString(),
  body('description').isString(),
  body('address').isString(),
  body('date').isISO8601(),
  updateEventWithId
);

router.delete(
  '/:id',
  param('id').isLength({
    min: 24,
    max: 24,
  }),
  deleteEventWithId
);

export default router;
