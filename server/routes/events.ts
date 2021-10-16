import { Router, Request, Response } from 'express';

import EventModel from '../models/event';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const events = await EventModel.find({});
  res.json(events);
});
router.get('/:id', async (req: Request, res: Response) => {
  const event = await EventModel.findById(req.params.id);
  res.json(event);
});
router.post('/', async (req: Request, res: Response) => {
  const event = await EventModel.findById('test');
  res.json(event);
});
router.put('/:id', async (req: Request, res: Response) => {
  const event = await EventModel.findByIdAndUpdate(req.params.id, req.body);
  res.json(event);
});
router.delete('/:id', async (req: Request, res: Response) => {
  const event = await EventModel.findByIdAndDelete(req.params.id);
  res.json(event);
});

export default router;
