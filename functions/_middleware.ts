// import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

// export const onRequest: PagesFunction = mailChannelsPlugin({
//   personalizations: [
//     {
//       to: [{ name: "Clayton Schneider", email: "clayton@simply-sprout.com" }],
//     },
//   ],
//   from: {
//     name: "Website Form Submission",
//     email: "no-reply@simply-sprout.com",
//   },
//   respondWith: () => {
//     return new Response(
//       `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
//     );
//   },
// });
import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";

export const onRequest: PagesFunction = staticFormsPlugin({
  respondWith: ({ formData, name }) => {
    const email = formData.get("email");
    return new Response(
      `Hello, ${email}! Thank you for submitting the ${name} form.`
    );
  },
});
