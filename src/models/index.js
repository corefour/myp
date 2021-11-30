// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Permission, RolePermission, Role, Company, User } = initSchema(schema);

export {
  Permission,
  RolePermission,
  Role,
  Company,
  User
};