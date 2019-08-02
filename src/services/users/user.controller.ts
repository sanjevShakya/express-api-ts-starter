import { Request, Response } from 'express';

import * as userService from './user.service';
import { User } from './user.model';

export async function fetchUsers(req: Request, res: Response) {
  const users: User[] = await userService.fetchUsers()

  res.status(200).json(users);
}

export async function create(req: Request, res: Response) {
  const user: User = req.body;
  const createdUser = await userService.create(user);
  res.status(201).json(createdUser);
}

export async function update(req: Request, res: Response) {
  const user: User = req.body;
  const userId = req.params.id;
  const updatedUser = await userService.update(user, userId);

  res.status(201).json(updatedUser);
}

export async function remove(req: Request, res: Response) {
  const userId = req.params.userId;

  await userService.remove(userId);
  res.status(200);
}
