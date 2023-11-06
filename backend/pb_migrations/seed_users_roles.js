/// <reference path="../pb_data/types.d.ts" />

migrate((db) => {
  const dao = new Dao(db);
  const recordsCollection = dao.findCollectionByNameOrId("users_roles");

  for (const role of roles) {
    const record = new Record(recordsCollection, role);
    dao.saveRecord(record);
  }
});

/**
 * @typedef {import('../../frontend/src/lib/pocketbase/types').UsersRolesRecord} UsersRolesRecord
 */
/**
 * @type {UsersRolesRecord[]}
 */
const roles = [
  {
    name: "admin",
  },
  {
    name: "activities_manager",
  },
  {
    name: "enrollments_manager",
  },
];
