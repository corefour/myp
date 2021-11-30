import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PermissionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RolePermissionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompanyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Permission {
  readonly id: string;
  readonly permission_name: string;
  readonly permissions?: string[];
  readonly roles?: (RolePermission | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Permission, PermissionMetaData>);
  static copyOf(source: Permission, mutator: (draft: MutableModel<Permission, PermissionMetaData>) => MutableModel<Permission, PermissionMetaData> | void): Permission;
}

export declare class RolePermission {
  readonly id: string;
  readonly role: Role;
  readonly permission: Permission;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<RolePermission, RolePermissionMetaData>);
  static copyOf(source: RolePermission, mutator: (draft: MutableModel<RolePermission, RolePermissionMetaData>) => MutableModel<RolePermission, RolePermissionMetaData> | void): RolePermission;
}

export declare class Role {
  readonly id: string;
  readonly role: string;
  readonly role_description?: string;
  readonly RolePermissions?: (RolePermission | null)[];
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Role, RoleMetaData>);
  static copyOf(source: Role, mutator: (draft: MutableModel<Role, RoleMetaData>) => MutableModel<Role, RoleMetaData> | void): Role;
}

export declare class Company {
  readonly id: string;
  readonly company_name: string;
  readonly company_description?: string;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Company, CompanyMetaData>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company, CompanyMetaData>) => MutableModel<Company, CompanyMetaData> | void): Company;
}

export declare class User {
  readonly id: string;
  readonly email?: string;
  readonly phone?: string;
  readonly given_name?: string;
  readonly family_name?: string;
  readonly birth_date?: string;
  readonly Companies?: (Company | null)[];
  readonly Roles?: (Role | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}