import * as userDao from "../dao/user.dao";

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
    const deletedAt = new Date().toISOString();
    return userDao.remove(userId, deletedAt);
}
