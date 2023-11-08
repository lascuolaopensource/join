/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1mox62replfmlj3")

  collection.createRule = "@request.auth.id != ''"
  collection.updateRule = "@request.auth.id != ''"
  collection.deleteRule = "@request.auth.id != ''"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1mox62replfmlj3")

  collection.createRule = "@request.auth.role = \"activitiesAdmin\""
  collection.updateRule = "@request.auth.role = \"activitiesAdmin\""
  collection.deleteRule = "@request.auth.role = \"activitiesAdmin\""

  return dao.saveCollection(collection)
})
