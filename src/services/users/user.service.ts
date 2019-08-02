import * as userDao from './user.dao';

export function fetchUsers() {
  return userDao.fetchUsers();
}

export function create(user) {
  return userDao.create(user);
}

export function update(user, userId) {
  return userDao.update(user, userId);
}

export function remove(userId) {
  return userDao.remove(userId);
}
