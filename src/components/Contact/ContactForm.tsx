import emailjs from "emailjs-com";
import { useRef } from "react";

export function ContactForm() {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
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

    console.log(form, form.current);
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Full Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
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
