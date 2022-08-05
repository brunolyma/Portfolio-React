import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { useRef } from "react";

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fxgin1l",
        "template_jh0w59e",
        form.current,
        "roz5JtUOnHzr3xn_0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" placeholder="Your Full Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={7}
        required
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Send your Message
      </button>
    </form>
  );
}
