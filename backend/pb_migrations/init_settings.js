/// <reference path="../pb_data/types.d.ts" />

migrate((db) => {
  const dao = new Dao(db);
  const settings = dao.findSettings();

  // GENERAL
  settings.meta.appName = "☠️ JOIN ☠️";
  settings.meta.appUrl = "http://localhost:7173";
  settings.logs.maxDays = 2;

  // EMAIL
  settings.meta.senderName = "☠️ JOIN ☠️";
  settings.meta.senderAddress = "join@lascuolaopensource.xyz";
  settings.meta.verificationTemplate.actionUrl =
    "{APP_URL}/register/verify/{TOKEN}";
  settings.meta.resetPasswordTemplate.actionUrl =
    "{APP_URL}/password-reset/{TOKEN}";

  // SMTP
  settings.smtp.enabled = true;
  settings.smtp.host = "lascuolaopensource.xyz";
  settings.smtp.port = 587;
  settings.smtp.username = "join@lascuolaopensource.xyz";
  settings.smtp.password = "";
  settings.smtp.tls = false;
  settings.smtp.authMethod = "LOGIN";

  dao.saveSettings(settings);
});
