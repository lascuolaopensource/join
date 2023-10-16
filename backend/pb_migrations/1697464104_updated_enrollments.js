/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ko1gbl1ccp5ovh5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fkbaxiwp",
    "name": "requirements_data",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ko1gbl1ccp5ovh5")

  // remove
  collection.schema.removeField("fkbaxiwp")

  return dao.saveCollection(collection)
})
