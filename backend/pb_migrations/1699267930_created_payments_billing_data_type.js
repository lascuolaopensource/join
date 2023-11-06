/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n5802p74sobtph3",
    "created": "2023-11-06 10:52:10.545Z",
    "updated": "2023-11-06 10:52:10.545Z",
    "name": "payments_billing_data_type",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pkl1hsyd",
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
        "id": "u9rckjeq",
        "name": "schema",
        "type": "json",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("n5802p74sobtph3");

  return dao.deleteCollection(collection);
})
