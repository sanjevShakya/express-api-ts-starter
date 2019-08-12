import { getRepository, getConnection } from "typeorm";
import { User } from "../models/user.model";

function pageConversion({ page = 1, pageSize = 10 }) {
  return {
    page,
    pageSize,
    take: pageSize,
    skip: page * pageSize - pageSize,
  }
}

function getFetchResponse(result, page, pageSize, total) {
  return {
    data: result,
    pagination: {
      page: +page,
      pageSize: +pageSize,
      totalCount: total,
      nextPage: (page * pageSize) < total ? (+page + 1) : null,
    }
  }
}

export async function fetchUsers(query) {
  const { take, skip, page, pageSize } = pageConversion(query);

  const [result, total] = await getRepository(User)
    .findAndCount({
      where: { deletedAt: null },
      take,
      skip,
      order: {
        createdAt: 'ASC',
      }
    });

  return getFetchResponse(result, page, pageSize, total);
}

export function create(user) {
  return getRepository(User).save(user);
}

export function update(user, userId) {
  return getConnection().createQueryBuilder()
    .update(User)
    .set(user)
    .where("id = :id", { id: userId })
    .execute();
}

export function remove(userId, deletedAt: string) {
  return getConnection()
    .createQueryBuilder()
    .update(User)
    .set({ deletedAt: deletedAt })
    .where("id = :id", { id: userId })
    .execute();
}
