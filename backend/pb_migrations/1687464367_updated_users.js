migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "id = @request.auth.id && @request.data.verified = true"
  collection.viewRule = "id = @request.auth.id && @request.data.verified = true"
  collection.updateRule = "id = @request.auth.id && @request.data.verified = true"
  collection.deleteRule = "id = @request.auth.id && @request.data.verified = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = null
  collection.viewRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
