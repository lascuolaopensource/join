/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hkvwtreh1d6jj73")

  collection.createRule = "@request.auth.id != ''"
  collection.updateRule = "@collection.users.info.id = id &&\n@collection.users.id = @request.auth.id"
  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hkvwtreh1d6jj73")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
