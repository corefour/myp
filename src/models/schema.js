export const schema = {
    "models": {
        "Permission": {
            "name": "Permission",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "permission_name": {
                    "name": "permission_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "permissions": {
                    "name": "permissions",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "roles": {
                    "name": "roles",
                    "isArray": true,
                    "type": {
                        "model": "RolePermission"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "permission"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Permissions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RolePermission": {
            "name": "RolePermission",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "role": {
                    "name": "role",
                    "isArray": false,
                    "type": {
                        "model": "Role"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "roleID"
                    }
                },
                "permission": {
                    "name": "permission",
                    "isArray": false,
                    "type": {
                        "model": "Permission"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "permissionID"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RolePermissions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRole",
                        "fields": [
                            "roleID",
                            "permissionID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPermission",
                        "fields": [
                            "permissionID",
                            "roleID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Role": {
            "name": "Role",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "role": {
                    "name": "role",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "role_description": {
                    "name": "role_description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "RolePermissions": {
                    "name": "RolePermissions",
                    "isArray": true,
                    "type": {
                        "model": "RolePermission"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "role"
                    }
                },
                "userID": {
                    "name": "userID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Roles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUser",
                        "fields": [
                            "userID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Company": {
            "name": "Company",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "company_name": {
                    "name": "company_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "company_description": {
                    "name": "company_description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "userID": {
                    "name": "userID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Companies",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUser",
                        "fields": [
                            "userID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "given_name": {
                    "name": "given_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "family_name": {
                    "name": "family_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "birth_date": {
                    "name": "birth_date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "Companies": {
                    "name": "Companies",
                    "isArray": true,
                    "type": {
                        "model": "Company"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "userID"
                    }
                },
                "Roles": {
                    "name": "Roles",
                    "isArray": true,
                    "type": {
                        "model": "Role"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "userID"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "26373a69f16f872a4754ac0b7c8370a7"
};