/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ko1gbl1ccp5ovh5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kushmezp",
    "name": "enrollment_data",
    "type": "relation",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("ko1gbl1ccp5ovh5")

  // remove
  collection.schema.removeField("kushmezp")

  return dao.saveCollection(collection)
})
