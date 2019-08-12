import * as userDao from "../dao/user.dao";

export function fetchUsers(query) {
    return userDao.fetchUsers(query);
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
