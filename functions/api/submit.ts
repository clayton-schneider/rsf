export async function onRequestPost(context) {
  try {
    let input = await context.request.formData();
    let pretty = JSON.stringify([...input], null, 2);
    let send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              { email: "clayton@simply-sprout.com", name: "Clayton Schneider" },
            ],
          },
        ],
        from: {
          email: "noreply@simply-sprout.com",
          name: "Workers - MailChannels integration",
        },
        subject: "Look! No Servers",
        content: [
          {
            type: "text/plain",
            value: pretty,
          },
        ],
      }),
    });
    return new Response(pretty, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  } catch (err) {
    return new Response("Error parsing JSON content");
  }
}
