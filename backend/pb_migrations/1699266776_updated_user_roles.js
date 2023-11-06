/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvs396xr6r52r49")

  collection.name = "users_roles"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvs396xr6r52r49")

  collection.name = "user_roles"

  return dao.saveCollection(collection)
})
