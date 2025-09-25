import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative max-w-4xl mx-auto px-6 sm:px-10 py-20 
                 bg-white/10 dark:bg-gray-900/40 
                 backdrop-blur-lg rounded-3xl shadow-xl 
                 border border-gray-200/20 my-24"
      aria-labelledby="contact-heading"
    >
      {/* Decorative Gradient Line */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 
                      w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

      {/* Heading */}
      <motion.h2
        id="contact-heading"
        className="text-4xl sm:text-5xl font-extrabold mb-6 
                   text-gray-900 dark:text-white text-center tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      {/* Intro line */}
      <motion.p
        className="text-center text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Have a project in mind or just want to say hello?{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          Let’s connect and collaborate!
        </span>
      </motion.p>

      {/* Contact Info */}
      <motion.div
        className="space-y-5 text-center text-gray-700 dark:text-gray-300 text-lg sm:text-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="flex justify-center items-center gap-3">
          <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <a
            href="mailto:yasirmirza595@gmail.com"
            className="hover:underline font-medium text-blue-600 dark:text-blue-400"
          >
            yasirmirza595@gmail.com
          </a>
        </p>

        <p className="flex justify-center items-center gap-3">
          <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <a
            href="https://linkedin.com/in/yasir-mirza-0b932725a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-medium text-blue-600 dark:text-blue-400"
          >
            linkedin.com/in/yasir-mirza-0b932725a
          </a>
        </p>

        <p className="flex justify-center items-center gap-3">
          <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <a
            href="tel:+923365143531"
            className="hover:underline font-medium text-blue-600 dark:text-blue-400"
          >
            +92 317 4731443
          </a>
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="mt-16 flex flex-col space-y-6"
        aria-label="Contact form"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 
                     bg-gray-50/70 dark:bg-gray-800/60 
                     text-gray-900 dark:text-white placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 
                     transition shadow-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 
                     bg-gray-50/70 dark:bg-gray-800/60 
                     text-gray-900 dark:text-white placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 
                     transition shadow-sm"
        />
        <input
          type="text"
          name="title"
          placeholder="Subject"
          required
          className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 
                     bg-gray-50/70 dark:bg-gray-800/60 
                     text-gray-900 dark:text-white placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 
                     transition shadow-sm"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 
                     bg-gray-50/70 dark:bg-gray-800/60 
                     text-gray-900 dark:text-white placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 
                     transition resize-none shadow-sm"
        ></textarea>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 
                     bg-gradient-to-r from-blue-600 to-purple-600 
                     text-white py-4 rounded-xl 
                     hover:from-blue-700 hover:to-purple-700 
                     shadow-md hover:shadow-xl 
                     transition font-semibold text-lg disabled:opacity-60"
        >
          <Send className="w-5 h-5" />
          {status === "sending" ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Status Messages */}
        {status === "success" && (
          <motion.div
            className="px-4 py-2 rounded-lg bg-green-100/70 dark:bg-green-600/30 
                       text-green-700 dark:text-green-300 text-center font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ✅ Message sent successfully!
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            className="px-4 py-2 rounded-lg bg-red-100/70 dark:bg-red-600/30 
                       text-red-700 dark:text-red-300 text-center font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ❌ Something went wrong. Please try again later.
          </motion.div>
        )}
      </motion.form>
    </section>
  );
}

export default Contact;
