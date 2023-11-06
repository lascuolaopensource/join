/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvs396xr6r52r49")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("2aqvvtbp")

  // remove
  collection.schema.removeField("dsgdnlfu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bu7ykbpa",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvs396xr6r52r49")

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2aqvvtbp",
    "name": "user",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dsgdnlfu",
    "name": "roles",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "admin",
        "enrollments",
        "tools"
      ]
    }
  }))

  // remove
  collection.schema.removeField("bu7ykbpa")

  return dao.saveCollection(collection)
})
