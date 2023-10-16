/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4puvok0v7tun08p")

  // update
  collection.schema.addField(new SchemaField({
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
        "text",
        "boolean"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4puvok0v7tun08p")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
