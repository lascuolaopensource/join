/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1mox62replfmlj3")

  // remove
  collection.schema.removeField("rp6elowv")

  // remove
  collection.schema.removeField("7bkejvf2")

  // remove
  collection.schema.removeField("yu4j0phg")

  // remove
  collection.schema.removeField("zm7saso8")

  // remove
  collection.schema.removeField("scrqfswg")

  // remove
  collection.schema.removeField("d9lzuumm")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1mox62replfmlj3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rp6elowv",
    "name": "price",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7bkejvf2",
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
    "id": "yu4j0phg",
    "name": "users",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zm7saso8",
    "name": "enrollmentMin",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "scrqfswg",
    "name": "enrollmentMax",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d9lzuumm",
    "name": "enrollmentDeadline",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
