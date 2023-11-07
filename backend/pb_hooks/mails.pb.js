/// <reference path="../pb_data/types.d.ts" />

routerAdd("POST", "/send-mail", (c) => {
  const postData = $apis.requestInfo(c).data;
  const requestUser = $apis.requestInfo(c).authRecord;

  if (!requestUser) return;
  // if (requestUser.get('roles'))

  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName,
    },
    ...postData,
  });

  $app.newMailClient().send(message);
});
