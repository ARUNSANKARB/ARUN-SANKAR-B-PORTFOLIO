import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { SectionTitle } from '../components/SectionTitle';
import { FaPhone, FaMailBulk, FaMapMarkerAlt } from 'react-icons/fa';

// Initialize EmailJS with your public key
emailjs.init('letDCCitIBRUVeYFJ'); // Replace with your actual EmailJS Public Key

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email directly to your Gmail
      const response = await emailjs.send(
        'service_bwg7r1v', // Service ID
        'template_rzw8jqo', // Template ID
        {
          to_email: 'arun29112005@gmail.com',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-section-mobile md:py-section">
      <div className="container-custom">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's connect and discuss opportunities"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-poppins mb-6">
                Contact Information
              </h3>
              <p className="text-white/70 mb-8 font-inter">
                Feel free to reach out to me through any of the following channels. I'll try to respond.
              </p>
            </div>

            {/* Contact Methods */}
            {[
              {
                icon: FaMailBulk,
                label: 'Email',
                value: 'arun29112005@gmail.com',
                href: 'mailto:arun29112005@gmail.com',
              },
              {
                icon: FaPhone,
                label: 'Phone',
                value: '+91 8778020619',
                href: 'tel:+918778020619',
              },
              {
                icon: FaMapMarkerAlt,
                label: 'Location',
                value: 'Chennai, Tamil Nadu, India',
                href: 'https://maps.google.com/?q=Chennai,Tamil+Nadu,India',
              },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 glass rounded-card hover:shadow-lg hover:shadow-primary/10 transition-smooth cursor-pointer group"
                >
                  <div className="p-3 bg-primary/10 rounded-button group-hover:bg-primary/20 transition-smooth">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-600 text-white font-poppins">
                      {contact.label}
                    </p>
                    <p className="text-white/70 text-sm font-inter">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm font-600 text-white/60 mb-4">Follow me on</p>
              <div className="flex gap-3">
                {[
                  { name: 'GitHub', url: 'https://github.com/ARUNSANKARB' },
                  {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/arun-sankar-b-4683b3319/',
                  },
                  { name: 'LeetCode', url: 'https://leetcode.com/u/ARUNSANKARB/' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-white/60 hover:text-primary transition-smooth text-sm font-600"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-card rounded-card"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-600 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="arun29112005@gmail.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-600 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-white rounded-button font-600 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-3 bg-green-500/10 border border-green-500/50 rounded-button text-green-400 text-sm text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-3 bg-red-500/10 border border-red-500/50 rounded-button text-red-400 text-sm text-center"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
