import { getRepository, getConnection } from 'typeorm';
import { User } from '../models/user.model';

export function fetchUsers() {
  return getRepository(User).find();
}

export function create(user) {
  return getRepository(User).save(user)
}

export function update(user, userId) {
  return getConnection().createQueryBuilder()
    .update(User)
    .set(user)
    .where("id = :id", { id: userId })
    .execute();
}

export function remove(userId) {
  return getConnection().createQueryBuilder().delete().from(User).where("id = :id", { id: userId }).execute();
}
