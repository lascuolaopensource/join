/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4puvok0v7tun08p")

  collection.name = "enrollments_requirements"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4puvok0v7tun08p")

  collection.name = "enrollment_requirements"

  return dao.saveCollection(collection)
})
