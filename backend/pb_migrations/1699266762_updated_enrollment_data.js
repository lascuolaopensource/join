/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4hxw5zovusg306b")

  collection.name = "enrollments_data"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4hxw5zovusg306b")

  collection.name = "enrollment_data"

  return dao.saveCollection(collection)
})
