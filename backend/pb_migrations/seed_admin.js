const email = "join@lascuolaopensource.xyz";

migrate(
  (db) => {
    const admin = new Admin();
    admin.email = email;
    admin.setPassword("lascuolaopensource");
    return Dao(db).saveAdmin(admin);
  },
  (db) => {
    const dao = new Dao(db);
    const admin = dao.findAdminByEmail(email);
    return dao.deleteAdmin(admin);
  }
);
