/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4puvok0v7tun08p",
    "created": "2023-10-16 13:34:52.197Z",
    "updated": "2023-10-16 13:34:52.197Z",
    "name": "enrollment_requirements",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5ob3om36",
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
        "id": "rklzal00",
        "name": "type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "url",
            "string"
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
  const collection = dao.findCollectionByNameOrId("4puvok0v7tun08p");

  return dao.deleteCollection(collection);
})
