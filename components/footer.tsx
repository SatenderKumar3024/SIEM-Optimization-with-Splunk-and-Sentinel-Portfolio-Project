"use client"
import { Linkedin, Twitter, Calendar, LinkIcon, Shield } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a12] border-t border-[#6e3adc]/10 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-[#FF0066]">Satender Kumar</h3>
            <p className="text-[#3adc9d] text-sm leading-relaxed max-w-md">
              Information Security Analyst specializing in cloud security, SIEM, and threat detection.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="font-medium mb-2 text-[#3adc9d]">Quick Links</h4>
              <ul className="space-y-1.5 text-sm text-white">
                <li>
                  <Link href="#" className="hover:text-[#FF0066] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FF0066] transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FF0066] transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FF0066] transition-colors">
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-[#FF0066] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-[#3adc9d]">Connect</h4>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <a
                    href="https://www.linkedin.com/in/satender-singh2430/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FF0066] transition-colors flex items-center gap-1.5"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/SatendeK2430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FF0066] transition-colors flex items-center gap-1.5"
                  >
                    <Twitter className="h-3.5 w-3.5" />
                    Twitter/X
                  </a>
                </li>
                <li>
                  <a
                    href="https://calendly.com/satenderkumar-analyst"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FF0066] transition-colors flex items-center gap-1.5"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    Calendly
                  </a>
                </li>
                <li>
                  <a
                    href="https://linktr.ee/satendersingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FF0066] transition-colors flex items-center gap-1.5"
                  >
                    <LinkIcon className="h-3.5 w-3.5" />
                    Linktree
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-[#3adc9d]">Resources</h4>
              <ul className="space-y-1.5 text-sm text-white/70">
                <li>
                  <Link href="#" className="hover:text-[#6e3adc] transition-colors">
                    Request Resume
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#6e3adc] transition-colors">
                    Credentials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#6e3adc] transition-colors">
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#6e3adc]/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#3adc9d]">© 2025 Satender Kumar. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <p className="text-sm text-[#3adc9d] flex items-center gap-2">
              <Shield className="h-3.5 w-3.5" />
              Secured with SSL encryption
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-[#3adc9d] hover:text-[#FF0066]">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-[#3adc9d] hover:text-[#FF0066]">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-[#3adc9d] hover:text-[#FF0066]">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
