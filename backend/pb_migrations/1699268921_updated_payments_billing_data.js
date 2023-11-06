/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mxomsby53m24p7b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mjaljt6m",
    "name": "type",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "n5802p74sobtph3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lr6rxhsy",
    "name": "data",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mxomsby53m24p7b")

  // remove
  collection.schema.removeField("mjaljt6m")

  // remove
  collection.schema.removeField("lr6rxhsy")

  return dao.saveCollection(collection)
})
