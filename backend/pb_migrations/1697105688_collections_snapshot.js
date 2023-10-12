/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-06-22 10:28:12.343Z",
      "updated": "2023-07-14 15:33:49.703Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": 2,
            "max": 30,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "lddgjl9m",
          "name": "surname",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": 2,
            "max": 30,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ay3f39ux",
          "name": "roles",
          "type": "select",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "admin"
            ]
          }
        },
        {
          "system": false,
          "id": "itudrh8k",
          "name": "phone",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [
        "CREATE UNIQUE INDEX `idx_qKd5Fwn` ON `users` (`created`)"
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id && verified = true",
      "deleteRule": "id = @request.auth.id && verified = true",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": false,
        "allowUsernameAuth": false,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "1mox62replfmlj3",
      "created": "2023-06-23 15:52:56.552Z",
      "updated": "2023-07-17 15:40:12.931Z",
      "name": "activities",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "h3oobvni",
          "name": "name",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "i2zxmmdo",
          "name": "description",
          "type": "editor",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        },
        {
          "system": false,
          "id": "rp6elowv",
          "name": "price",
          "type": "number",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "noDecimal": false
          }
        },
        {
          "system": false,
          "id": "7bkejvf2",
          "name": "confirmed",
          "type": "bool",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "yu4j0phg",
          "name": "users",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "ok0tx2pp",
          "name": "gallery",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 10485760,
            "mimeTypes": [
              "image/png",
              "image/jpeg",
              "image/gif",
              "image/webp",
              "image/tiff",
              "image/bmp",
              "image/x-icns",
              "image/svg+xml"
            ],
            "thumbs": [],
            "protected": false
          }
        },
        {
          "system": false,
          "id": "zm7saso8",
          "name": "enrollmentMin",
          "type": "number",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": 0,
            "max": null,
            "noDecimal": false
          }
        },
        {
          "system": false,
          "id": "scrqfswg",
          "name": "enrollmentMax",
          "type": "number",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": 0,
            "max": null,
            "noDecimal": false
          }
        },
        {
          "system": false,
          "id": "d9lzuumm",
          "name": "enrollmentDeadline",
          "type": "date",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "eob43qtc",
          "name": "slug",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": 2,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `idx_d099cED` ON `activities` (`created`)"
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "@request.auth.role = \"activitiesAdmin\"",
      "updateRule": "@request.auth.role = \"activitiesAdmin\"",
      "deleteRule": "@request.auth.role = \"activitiesAdmin\"",
      "options": {}
    },
    {
      "id": "ko1gbl1ccp5ovh5",
      "created": "2023-07-14 15:36:13.225Z",
      "updated": "2023-07-17 16:45:07.545Z",
      "name": "enrollments",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "bmlia7wl",
          "name": "owner",
          "type": "relation",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "sozgg7gy",
          "name": "activity",
          "type": "relation",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "1mox62replfmlj3",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "fthbwctz",
          "name": "state",
          "type": "select",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "pending",
              "rejected",
              "accepted",
              "payment"
            ]
          }
        }
      ],
      "indexes": [],
      "listRule": "owner.id = @request.auth.id || @request.auth.roles ?= 'admin'",
      "viewRule": "owner.id = @request.auth.id || @request.auth.roles ?= 'admin'",
      "createRule": "@request.auth.id != ''",
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
