/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1mox62replfmlj3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dehvfei5",
    "name": "enrollment_data",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "4hxw5zovusg306b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1mox62replfmlj3")

  // remove
  collection.schema.removeField("dehvfei5")

  return dao.saveCollection(collection)
})
