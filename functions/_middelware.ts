import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = mailChannelsPlugin({
  personalizations: [
    {
      to: [
        { name: "Clayton Schneider", email: "clayton@simply-sprout.com" },
        { name: "behjue", email: "behjue@gmail.com" },
        { name: "Clayton Schneider", email: "schneiderc2016@gmail.com" },
      ],
    },
  ],
  from: {
    name: "Website Form Service",
    email: "noreplay@simply-sprout.com",
  },
  respondWith: () => {
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  },
});
