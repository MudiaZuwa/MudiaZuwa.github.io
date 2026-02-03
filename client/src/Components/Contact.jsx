import React, { useState } from "react";
import { motion } from "framer-motion";
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
      <section className="flex flex-col gap-4" id="contact">
        <motion.h2
          className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="py-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-xl border border-border bg-overlay/70 p-8">
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
                  className="flex-1 bg-tungsten/80 border border-border text-white rounded-lg px-4 py-2 focus:ring-brand-frontend focus:border-brand-frontend placeholder:text-muted transition-colors"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 bg-tungsten/80 border border-border text-white rounded-lg px-4 py-2 focus:ring-brand-frontend focus:border-brand-frontend placeholder:text-muted transition-colors"
                  placeholder="Your Email"
                  type="email"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-tungsten/80 border border-border text-white rounded-lg px-4 py-2 focus:ring-brand-frontend focus:border-brand-frontend placeholder:text-muted transition-colors"
                placeholder="Your Message"
                rows="5"
              ></textarea>

              <motion.button
                type="submit"
                disabled={status.loading}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gradient-to-r from-brand-agent to-brand-frontend text-white text-base font-bold leading-normal tracking-[0.015em] self-center mt-4 hover:opacity-90 transition-all w-full sm:w-auto hover:shadow-[0_0_20px_rgba(97,218,251,0.4)] hover:scale-105 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status.loading ? "Sending..." : "Send Message"}
              </motion.button>

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
        </motion.div>
      </section>

      <motion.footer
        className="mt-16 md:mt-24 text-center py-8 border-t border-solid border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/MudiaZuwa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-brand-frontend transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/mudiazuwa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-brand-frontend transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://x.com/mudia_zuwa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-brand-frontend transition-colors"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Mudia Osazuwa. All Rights Reserved.
        </p>
      </motion.footer>
    </>
  );
};

export default Contact;
