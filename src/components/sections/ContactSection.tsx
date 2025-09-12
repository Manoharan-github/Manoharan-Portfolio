import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    emailjs.sendForm(
      "service_odrdk2t",    // Your EmailJS Service ID
      "template_m8fbhjb",   // Your EmailJS Template ID
      formRef.current,
      "LeYKFBS023XNfWtBp"   // Your EmailJS Public Key
    ).then(
      (result) => {
        console.log("Message sent:", result.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
      },
      (error) => {
        console.log("EmailJS error:", error.text);
        setIsSubmitting(false);
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
        });
      }
    );
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "manoharan200384@gmail.com", href: "mailto:manoharan200384@gmail.com" },
    { icon: Phone, label: "Phone", value: "+916374580818", href: "tel:+916374580818" },
    { icon: MapPin, label: "Location", value: "Karaikudi, Tamil Nadu", href: "https://www.google.com/maps/place/Karaikudi,+Tamil+Nadu" }
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient">Get In Touch</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass p-8 rounded-2xl border-glow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-electric mb-8">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleInputChange} required
                    className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300 outline-none"
                    placeholder="Enter your name"
                  />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleInputChange} required
                    className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300 outline-none"
                    placeholder="Enter your mail id"
                  />
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Subject</label>
                <input
                  type="text" name="subject" value={formData.subject} onChange={handleInputChange} required
                  className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300 outline-none"
                  placeholder="Enter the subject here..."
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                <textarea
                  name="message" value={formData.message} onChange={handleInputChange} required rows={6}
                  className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all duration-300 outline-none resize-none"
                  placeholder="Enter your message..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${isSubmitted ? "bg-green-600 hover:bg-green-700" : "btn-neon"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting && <motion.div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />}
                {isSubmitted && <CheckCircle className="w-5 h-5" />}
                {!isSubmitting && !isSubmitted && <Send className="w-5 h-5" />}
                <span>{isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info + CTA */}
          <motion.div className="space-y-8" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
            <div className="glass p-8 rounded-2xl border-glow">
              <h3 className="text-2xl font-bold text-electric mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities, collaborations, and exciting projects. Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/20 transition-all duration-300 group"
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }} viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div className="p-3 bg-gradient-neon rounded-lg group-hover:shadow-neon transition-all duration-300" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                      <info.icon className="w-5 h-5 text-background" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-neon-cyan transition-colors duration-300">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              className="glass p-8 rounded-2xl border-glow text-center"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px hsl(var(--neon-cyan) / 0.2)" }}
            >
              <h4 className="text-xl font-bold text-electric mb-4">Ready to Start Your Project?</h4>
              <p className="text-muted-foreground mb-6">Let's discuss your vision and turn it into reality.</p>
              <motion.a href="tel:+916374580818" className="btn-electric" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Schedule a Call
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
