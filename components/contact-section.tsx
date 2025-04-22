"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Linkedin, Twitter, Calendar, LinkIcon, Mail, Phone, Shield } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FingerprintScan from "@/components/fingerprint-scan"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
    }, 1500)
  }

  return (
    <motion.section
      id="contact"
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">Contact Me</h2>
        <p className="text-lg text-[#3adc9d] max-w-2xl mx-auto font-light leading-relaxed">
          I'm always open to discussing new projects, cybersecurity challenges, or opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-[#1a0d20]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Get In Touch</h3>

            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger
                  value="general"
                  className="data-[state=active]:bg-[#FF0066]/20 data-[state=active]:text-[#FF0066]"
                >
                  General Inquiry
                </TabsTrigger>
                <TabsTrigger
                  value="resume"
                  className="data-[state=active]:bg-[#FF0066]/20 data-[state=active]:text-[#FF0066]"
                >
                  Request Resume
                </TabsTrigger>
                <TabsTrigger
                  value="project"
                  className="data-[state=active]:bg-[#FF0066]/20 data-[state=active]:text-[#FF0066]"
                >
                  Project Discussion
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                {isSubmitted ? (
                  <div className="bg-[#121218] p-6 rounded-md text-center">
                    <div className="text-[#3adc9d] text-4xl mb-4">✓</div>
                    <h4 className="text-lg font-medium mb-2">Message Sent!</h4>
                    <p className="text-white/80 leading-relaxed">
                      Thank you for reaching out. I'll get back to you shortly.
                    </p>
                    <Button className="mt-4 bg-[#6e3adc] hover:bg-[#6e3adc]/80" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#3adc9d]">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="bg-[#121218] border-[#FF0066]/20 focus:border-[#FF0066]/50 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#3adc9d]">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="bg-[#121218] border-[#FF0066]/20 focus:border-[#FF0066]/50 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#3adc9d]">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="bg-[#121218] border-[#FF0066]/20 focus:border-[#FF0066]/50 min-h-[120px] text-white"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-[#FF0066] hover:bg-[#FF0066]/80"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#3adc9d] text-center mt-4 leading-relaxed">
                      <Shield className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>
                        This form is protected by reCAPTCHA and implements strict CSP headers, input validation, and
                        DOMPurify sanitization.
                      </span>
                    </div>
                  </form>
                )}
              </TabsContent>

              <TabsContent value="resume">
                <div className="space-y-4">
                  <p className="text-[#3adc9d] leading-relaxed">
                    Please fill out this form to request a copy of my resume with detailed experience and
                    qualifications.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#3adc9d]">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="bg-[#121218] border-[#6e3adc]/20 focus:border-[#6e3adc]/50 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#3adc9d]">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="bg-[#121218] border-[#6e3adc]/20 focus:border-[#6e3adc]/50 text-white"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-[#3a8ddc] hover:bg-[#3a8ddc]/80"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Requesting..." : "Request Resume"}
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#3adc9d] text-center mt-4 leading-relaxed">
                      <Shield className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>
                        This form is protected by reCAPTCHA and implements strict CSP headers, input validation, and
                        DOMPurify sanitization.
                      </span>
                    </div>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="project">
                <div className="space-y-4">
                  <p className="text-[#3adc9d] leading-relaxed">
                    Let's discuss your cybersecurity project or challenge. Please provide some details below.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#3adc9d]">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="bg-[#121218] border-[#6e3adc]/20 focus:border-[#6e3adc]/50 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#3adc9d]">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="bg-[#121218] border-[#6e3adc]/20 focus:border-[#6e3adc]/50 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#3adc9d]">
                        Project Details
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please describe your project or security challenge"
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="bg-[#121218] border-[#6e3adc]/20 focus:border-[#6e3adc]/50 min-h-[120px] text-white"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-[#3adc9d] hover:bg-[#3adc9d]/80"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Project Details"}
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#3adc9d] text-center mt-4 leading-relaxed">
                      <Shield className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>
                        This form is protected by reCAPTCHA and implements strict CSP headers, input validation, and
                        DOMPurify sanitization.
                      </span>
                    </div>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-[#1a0d20]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Professional Profiles</h3>
              <div className="w-16 h-16">
                <FingerprintScan size={64} color="#6e3adc" scanColor="#3adc9d" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium text-[#3adc9d] border-b border-[#6e3adc]/20 pb-2">Contact Information</h4>
                <div className="space-y-3 text-[#3adc9d]">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#6e3adc]" />
                    <a href="mailto:satenderkumar.analyst@gmail.com" className="hover:text-[#6e3adc] transition-colors">
                      satenderkumar.analyst@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#3adc9d]" />
                    <span>+1 (226) 637-****</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-[#3adc9d] border-b border-[#6e3adc]/20 pb-2">Connect With Me</h4>
                <div className="flex flex-col space-y-3">
                  <motion.a
                    href="https://www.linkedin.com/in/satender-singh2430/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#3adc9d] hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-[#6e3adc]/10 group-hover:bg-[#6e3adc]/20"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Linkedin className="h-5 w-5 text-[#6e3adc]" />
                    </motion.div>
                    <span>linkedin.com/in/satender-singh2430</span>
                  </motion.a>

                  <motion.a
                    href="https://x.com/SatendeK2430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#3adc9d] hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-[#3a8ddc]/10 group-hover:bg-[#3a8ddc]/20"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Twitter className="h-5 w-5 text-[#3a8ddc]" />
                    </motion.div>
                    <span>@SatendeK2430</span>
                  </motion.a>

                  <motion.a
                    href="https://calendly.com/satenderkumar-analyst"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#3adc9d] hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-[#3adc9d]/10 group-hover:bg-[#3adc9d]/20"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Calendar className="h-5 w-5 text-[#3adc9d]" />
                    </motion.div>
                    <span>calendly.com/satenderkumar-analyst</span>
                  </motion.a>

                  <motion.a
                    href="https://linktr.ee/satendersingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#3adc9d] hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-[#6e3adc]/10 group-hover:bg-[#6e3adc]/20"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <LinkIcon className="h-5 w-5 text-[#6e3adc]" />
                    </motion.div>
                    <span>linktr.ee/satendersingh</span>
                  </motion.a>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="outline"
                  className="w-full border-[#6e3adc]/30 hover:bg-[#6e3adc]/20 hover:border-[#6e3adc]/50 text-[#3adc9d]"
                  onClick={() => window.open("https://calendly.com/satenderkumar-analyst", "_blank")}
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}
