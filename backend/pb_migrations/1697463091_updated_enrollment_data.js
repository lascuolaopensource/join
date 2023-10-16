/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4hxw5zovusg306b")

  // remove
  collection.schema.removeField("wifb1lsq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pvmti5k0",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lpiamcu0",
    "name": "num_partecipants_min",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gijmb83w",
    "name": "num_partecipants_max",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4hxw5zovusg306b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wifb1lsq",
    "name": "activity",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1mox62replfmlj3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("pvmti5k0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lpiamcu0",
    "name": "min",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gijmb83w",
    "name": "max",
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

  return dao.saveCollection(collection)
})
