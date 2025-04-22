"use client"
import { Linkedin, Twitter, Calendar, LinkIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#121218] border-t border-[#6e3adc]/10 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-[#FF0066]">Satender Kumar</h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Information Security Analyst specializing in cloud security, SIEM, and threat detection.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="font-medium mb-2 text-[#3adc9d]">Quick Links</h4>
              <ul className="space-y-1.5 text-sm text-white">
                <li>
                  <a href="#" className="hover:text-[#FF0066] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF0066] transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF0066] transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF0066] transition-colors">
                    Certifications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF0066] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-[#3adc9d]">Connect</h4>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <a
                    href="https://www.linkedin.com/in/satender-singh2430/"
                    className="text-white hover:text-[#FF0066] transition-colors flex items-center gap-1.5"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/SatendeK2430"
                    className="text-white hover:text-[#FF0066] transition-colors flex items-center gap-1.5"
                  >
                    <Twitter className="h-3.5 w-3.5" />
                    Twitter/X
                  </a>
                </li>
                <li>
                  <a
                    href="https://calendly.com/satenderkumar-analyst"
                    className="text-white hover:text-[#FF0066] transition-colors flex items-center gap-1.5"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    Calendly
                  </a>
                </li>
                <li>
                  <a
                    href="https://linktr.ee/satendersingh"
                    className="text-white hover:text-[#FF0066] transition-colors flex items-center gap-1.5"
                  >
                    <LinkIcon className="h-3.5 w-3.5" />
                    Linktree
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-white">Resources</h4>
              <ul className="space-y-1.5 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-[#6e3adc] transition-colors">
                    Request Resume
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6e3adc] transition-colors">
                    Credentials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6e3adc] transition-colors">
                    Certifications
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#6e3adc]/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">© 2025 Satender Kumar. All rights reserved.</p>
          <p className="text-sm text-white/60 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#3adc9d] rounded-full"></span>
            Secured with SSL encryption
          </p>
        </div>
      </div>
    </footer>
  )
}
