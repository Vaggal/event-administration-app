import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import EventModel from '../models/event';

const getAllEvents = async (req: Request, res: Response): Promise<void> => {
  const events = await EventModel.find({});
  res.json(events);
};

const getEventWithId = async (req: Request, res: Response): Promise<Response<unknown, Record<string, unknown>>> => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const event = await EventModel.findById(req.params.id);

    if (event === null) {
      return res.status(404).json({ errors: [{ msg: `The resource with id ${req.params.id} does not exist` }] });
    }
    return res.json(event);
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: `An error occurred` }] });
  }
};

const createEvent = async (req: Request, res: Response): Promise<Response<unknown, Record<string, unknown>>> => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const event = await EventModel.create(req.body);
  return res.json(event);
};

const updateEventWithId = async (req: Request, res: Response): Promise<Response<unknown, Record<string, unknown>>> => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const event = await EventModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (event === null) {
      return res.status(404).json({ errors: [{ msg: `The resource with id ${req.params.id} does not exist` }] });
    }
    return res.json(event);
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: `An error occurred` }] });
  }
};

const deleteEventWithId = async (req: Request, res: Response): Promise<Response<unknown, Record<string, unknown>>> => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const event = await EventModel.findByIdAndDelete(req.params.id);
    if (event === null) {
      return res.status(404).json({ errors: [{ msg: `The resource with id ${req.params.id} does not exist` }] });
    }
    return res.json(event);
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: `An error occurred` }] });
  }
};

export { getAllEvents, getEventWithId, createEvent, updateEventWithId, deleteEventWithId };
