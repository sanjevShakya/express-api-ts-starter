import * as userController from '../controllers/user.controller';
import * as validator from '../validators/user.validator';

export default [
  {
    path: '/users',
    method: 'get',
    version: 'v1',
    handler: [
      userController.fetchUsers
    ]
  },
  {
    path: '/users',
    method: 'post',
    version: 'v1',
    handler: [
      validator.userValidator,
      userController.create
    ]
  },
  {
    path: '/users/:id',
    method: 'put',
    version: 'v1',
    handler: [
      userController.update
    ]
  }
]
