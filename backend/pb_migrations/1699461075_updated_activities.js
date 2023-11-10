/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1mox62replfmlj3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ok0tx2pp",
    "name": "gallery",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "maxSize": 2097152,
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/webp",
        "image/tiff",
        "image/bmp",
        "image/svg+xml"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1mox62replfmlj3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ok0tx2pp",
    "name": "gallery",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 10485760,
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/webp",
        "image/tiff",
        "image/bmp",
        "image/x-icns",
        "image/svg+xml"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
