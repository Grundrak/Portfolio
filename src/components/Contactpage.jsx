import { Container } from "react-bootstrap";
import "../pages/style.css";
import { useForm, ValidationError } from "@formspree/react";

function Contactpage() {
  const [state, handleSubmit] = useForm("mjvnbjnl");

  return (
    <div className="contactbackground min-h-screen flex items-center justify-center ">
      <Container>
        <h2 className="contacthead text-center text-4xl font-bold mb-6">
          Get In Touch
        </h2>
        <section className="w-full max-w-lg mx-auto ">
          <form
            onSubmit={handleSubmit}
            className="from shadow-lg rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fc-generated-1-name"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fc-generated-1-name"
                type="text"
                name="name"
                placeholder="Your first and last name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fc-generated-1-email"
              >
                Your Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fc-generated-1-email"
                type="email"
                name="email"
                placeholder="john@doe.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fc-generated-1-message"
              >
                Your message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fc-generated-1-message"
                name="message"
                placeholder="Enter your message..."
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>
          {state.succeeded && (
            <p className="text-center text-green-500">
              Thanks for your message! I will get back to you soon.
            </p>
          )}
        </section>
        <p className="copyright text-center mt-8">
          © Copyright 2023 Made by <span className="font-bold">Grundrak</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
