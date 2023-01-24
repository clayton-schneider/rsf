import React, { useState } from "react";
interface Props {
  name: string;
  message: string;
  error: string;
  fields: {
    fieldType: string;
    id: string;
    name: string;
  }[];
}
type FormState = "ready" | "pending" | "success" | "error";

const ContactForm = ({ name, message, error, fields }: Props) => {
  function initializeForm(fields: Props["fields"]) {
    const form = {};
    // @ts-ignore
    fields.forEach((field) => (form[field.id] = ""));
    return form;
  }
  const [formData, setData] = useState(initializeForm(fields));
  const [formState, setFormState] = useState<FormState>("ready");

  const sendOptions = {
    to: [
      { email: "clayton@simply-sprout.com", name: "Clayton Schneider" },

      { email: "tonyb@abresearchct.com", name: "Tony Benivegna" },
      {
        email: "roxburyscholarshipfoundation@gmail.com",
        name: "Roxbury Scholarship Foundation",
      },
    ],
    from: {
      email: "noreply@simply-sprout.com",
      Name: "Website Email Bot",
    },
    subject: "Email Form Submission",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fetchBody = JSON.stringify({
      form: {
        name,
        data: formData,
      },
      sendOptions,
    });

    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json;charset=UTF-8" },
      body: fetchBody,
    };

    setFormState("pending");

    try {
      await fetch(
        "https://send-email.simplysprout.workers.dev/",
        requestOptions
      );
      setFormState("success");
    } catch (err) {
      setFormState("error");
    }
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = event.target;
    //@ts-ignore
    formData[id] = value;
    setData(formData);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="my-5 mt-10 grid w-full grow grid-cols-1 gap-4 lg:grid-cols-2"
    >
      {fields.map((field, key) => (
        <div className="relative col-span-full" key={`input-${key}`}>
          <label htmlFor={field.id} className="font-bold">
            {field.name}
          </label>
          {field.fieldType === "textarea" ? (
            <textarea
              onChange={handleChange}
              name={field.name}
              id={field.id}
              className="h-[150px] w-full resize-none rounded border-2 border-secondary bg-transparent p-2 text-textColor focus:outline-none"
            />
          ) : (
            <input
              onChange={handleChange}
              type={field.fieldType}
              name={field.name}
              id={field.id}
              className="w-full  rounded border-2 border-secondary bg-transparent px-2 py-1 focus:outline-none"
            />
          )}
        </div>
      ))}

      {formState === "ready" && (
        <button className="col-span-full block w-full rounded border-2 border-transparent border-white bg-primary py-2 px-4 text-center text-sm uppercase tracking-widest text-white transition duration-300 hover:border-2 hover:border-primary hover:bg-transparent hover:font-bold hover:text-primary xl:inline xl:w-auto">
          Send Message
        </button>
      )}
      {formState === "pending" && <p>sending...</p>}
      {formState === "success" && <p>{message}</p>}
      {formState === "error" && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default ContactForm;
