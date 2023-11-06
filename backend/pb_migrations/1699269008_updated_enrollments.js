/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ko1gbl1ccp5ovh5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zm9jyfet",
    "name": "payment",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7da4wctwgrjfl5r",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ko1gbl1ccp5ovh5")

  // remove
  collection.schema.removeField("zm9jyfet")

  return dao.saveCollection(collection)
})
