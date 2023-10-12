/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cvs396xr6r52r49",
    "created": "2023-10-12 11:01:54.576Z",
    "updated": "2023-10-12 11:01:54.576Z",
    "name": "userRoles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2aqvvtbp",
        "name": "user",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "dsgdnlfu",
        "name": "roles",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "admin",
            "enrollments",
            "tools"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cvs396xr6r52r49");

  return dao.deleteCollection(collection);
})
