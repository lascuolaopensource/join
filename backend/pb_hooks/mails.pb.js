/// <reference path="../pb_data/types.d.ts" />

routerAdd("POST", "/send-mail", (c) => {
  const postData = $apis.requestInfo(c).data;
  const admin = $apis.requestInfo(c).admin;

  if (!admin) return;

  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName,
    },
    ...postData,
  });

  $app.newMailClient().send(message);
});
