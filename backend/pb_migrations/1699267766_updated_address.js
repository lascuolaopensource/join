/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mp8u6dpz7ce9ggs")

  collection.name = "addresses"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mp8u6dpz7ce9ggs")

  collection.name = "address"

  return dao.saveCollection(collection)
})
