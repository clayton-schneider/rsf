import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = mailchannelsPlugin({
  from: {
    name: "Website Form Submission",
    email: "no-reply@simply-sprout.com",
  },
  personalizations: [
    {
      to: [{ name: "Clayton Schneider", email: "clayton@simply-sprout.com" }],
    },
  ],
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/enquiries/thank-you" },
    }),
  subject: "Form Website Enquiry",
});
