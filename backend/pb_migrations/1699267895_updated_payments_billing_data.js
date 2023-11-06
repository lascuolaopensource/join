/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mxomsby53m24p7b")

  // remove
  collection.schema.removeField("nyyk3cwn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vb1yihec",
    "name": "address",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "mp8u6dpz7ce9ggs",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mxomsby53m24p7b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nyyk3cwn",
    "name": "address",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("vb1yihec")

  return dao.saveCollection(collection)
})
