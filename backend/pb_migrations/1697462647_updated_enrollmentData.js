/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4hxw5zovusg306b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qfxk364e",
    "name": "confirmed",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dsfqykpf",
    "name": "enrollments",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ko1gbl1ccp5ovh5",
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
  collection.schema.removeField("qfxk364e")

  // remove
  collection.schema.removeField("dsfqykpf")

  return dao.saveCollection(collection)
})
