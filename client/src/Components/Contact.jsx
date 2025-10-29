import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ ...status, error: "Please fill in all fields." });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch("https://formspree.io/f/myzbwvzq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus({
          loading: false,
          success: "Message sent successfully!",
          error: null,
        });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: "Something went wrong. Try again later.",
      });
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section className="flex flex-col gap-4" id="contact">
        <h2 className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Get In Touch
        </h2>

        <div className="p-4">
          <div className="rounded-xl border border-[#324467]/50 bg-[#192233]/70 p-8">
            <p className="text-center text-[#E0E0E0] mb-8 max-w-xl mx-auto">
              Have a project in mind or just want to say hello? My inbox is
              always open. Fill out the form below, and I'll get back to you as
              soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="flex-1 bg-[#0f172a]/80 border border-[#324467] text-white rounded-lg px-4 py-2 focus:ring-primary focus:border-primary placeholder:text-[#92a4c9]"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 bg-[#0f172a]/80 border border-[#324467] text-white rounded-lg px-4 py-2 focus:ring-primary focus:border-primary placeholder:text-[#92a4c9]"
                  placeholder="Your Email"
                  type="email"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-[#0f172a]/80 border border-[#324467] text-white rounded-lg px-4 py-2 focus:ring-primary focus:border-primary placeholder:text-[#92a4c9]"
                placeholder="Your Message"
                rows="5"
              ></textarea>

              <button
                type="submit"
                disabled={status.loading}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] self-center mt-4 hover:bg-primary/90 transition-colors w-full sm:w-auto hover:shadow-[0_0_20px_#135bec] hover:scale-105 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>

              {status.error && (
                <p className="text-red-400 text-center mt-2 text-sm">
                  {status.error}
                </p>
              )}
              {status.success && (
                <p className="text-green-400 text-center mt-2 text-sm">
                  {status.success}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-16 md:mt-24 text-center py-8 border-t border-solid border-[#232f48]">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/MudiaZuwa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#92a4c9] hover:text-primary transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/mudiazuwa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#92a4c9] hover:text-primary transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://x.com/mudia_zuwa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#92a4c9] hover:text-primary transition-colors"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>

        <p className="text-sm text-[#92a4c9]">
          © {new Date().getFullYear()} Mudia Osazuwa. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;
