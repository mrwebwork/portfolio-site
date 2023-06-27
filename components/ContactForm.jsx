import React, { useState } from "react";

//* This component maintains state for form fields, error messages, validation errors, success/failure messages, and the button text.
export default function ContactForm() {
  //* Initialize state variables for each form field with empty strings.
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errorMsg, setErrorMsg] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  //* Form validation state
  const [errors, setErrors] = useState({});

  //* Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  //* Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  //* Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let tempErrorMsg = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      tempErrorMsg["fullname"] = "Full Name is required.";
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      tempErrorMsg["email"] = "Email is required.";
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      tempErrorMsg["subject"] = "Subject is required.";
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      tempErrorMsg["message"] = "Message is required.";
      isValid = false;
    }

    setErrors({ ...tempErrors });
    setErrorMsg({ ...tempErrorMsg });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");

      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();

      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
      } else {
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Send");
        setFullname("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    }
  };
  return (
    <main>
      <section className="container mx-auto">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-2xl flex flex-col px-10 py-8 bg-white dark:bg-slate-800 mx-auto w-11/12 lg:w-6/12"
        >
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Send a message
          </h1>

          {/* Display success or failure message */}
          {showSuccessMessage && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
          {showFailureMessage && (
            <p className="text-red-500">
              Oops! Something went wrong. Please try again.
            </p>
          )}

          <label
            htmlFor="fullname"
            className="text-black font-light mt-8 dark:text-sky-50"
          >
            Full name<span className="text-red-500 ps-1">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            placeholder="Enter your first and last name"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className={`bg-transparent dark:text-white border-b py-2 pl-4 focus:outline-none rounded-md focus:ring-1 ${
              errors.fullname ? "ring-red-500" : "ring-green-500"
            } font-light text-gray-500`}
          />
          {errors.fullname && (
            <p className="text-red-500">{errorMsg.fullname}</p>
          )}

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-red-500 ps-1">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email here"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={`bg-transparent dark:text-white  border-b py-2 pl-4 focus:outline-none rounded-md focus:ring-1 ${
              errors.email ? "ring-red-500" : "ring-green-500"
            } font-light text-gray-500`}
          />
          {errors.email && <p className="text-red-500">{errorMsg.email}</p>}

          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Subject<span className="text-red-500 ps-1">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            placeholder="Enter your subject"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className={`bg-transparent dark:text-white  border-b py-2 pl-4 focus:outline-none rounded-md focus:ring-1 ${
              errors.subject ? "ring-red-500" : "ring-green-500"
            } font-light text-gray-500`}
          />
          {errors.subject && <p className="text-red-500">{errorMsg.subject}</p>}

          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Message<span className="text-red-500 ps-1">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            placeholder="Type your message here"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className={`bg-transparent dark:text-white rounded-md border-b py-5 pl-4 focus:outline-none  focus:ring-1 ${
              errors.message ? "ring-red-500" : "ring-green-500"
            } font-light text-gray-500`}
          ></textarea>
          {errors.message && <p className="text-red-500">{errorMsg.message}</p>}

          <div className="flex flex-row items-center justify-start">
            <button
              role="button"
              aria-label="Submit form button on Contact page"
              type="submit"
              className="px-10 mt-8 py-2 bg-gray-800 hover:bg-gray-950 dark:bg-gray-50 dark:hover:bg-gray-100 dark:text-black font-light rounded-md text-lg flex flex-row items-center"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
