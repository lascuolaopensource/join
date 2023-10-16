/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4hxw5zovusg306b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uystrufy",
    "name": "requirements",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "4puvok0v7tun08p",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4hxw5zovusg306b")

  // remove
  collection.schema.removeField("uystrufy")

  return dao.saveCollection(collection)
})
