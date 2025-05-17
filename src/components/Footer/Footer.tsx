'use client'

import { footerLinks, languages } from '@/appData'
import { socials } from '@/appData/personal'
import Logo from '../Navbar/Logo'
import { MsgIcon, PhoneIcon } from '@/utils/icons'

const Footer = () => {
  return (
    <footer className="bg-secondary relative flex flex-col items-center justify-between px-4 py-14 md:p-14">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <Logo width={30} height={24} />
            <span className="text-neutral text-xl font-bold">Daniel Cok</span>
          </div>
          <p className="text-tertiary-content text-center md:text-left text-sm max-w-xs">
            Full-stack web developer. Building modern, scalable, and beautiful web apps.
          </p>
          <div className="flex gap-3 mt-2">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.target}
                rel="noopener noreferrer"
                className="text-neutral hover:text-accent transition-colors duration-200 text-2xl">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center gap-2">
          <h5 className="text-neutral text-lg font-semibold mb-2">Quick Links</h5>
          <ul className="flex flex-col gap-1 text-tertiary-content text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-accent transition-colors duration-200">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <h5 className="text-neutral text-lg font-semibold mb-2">Contact</h5>
          <div className="flex items-center gap-2 text-tertiary-content text-sm">
            <MsgIcon />
            <a href="mailto:cokydano@gmail.com" className="hover:text-accent transition-colors duration-200" onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'footer_email_click', {
                  event_category: 'engagement',
                  event_label: 'Footer Email',
                });
              }
            }}>cokydano@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 text-tertiary-content text-sm">
            <PhoneIcon />
            <a href="tel:+421917387255" className="hover:text-accent transition-colors duration-200" onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'footer_phone_click', {
                  event_category: 'engagement',
                  event_label: 'Footer Phone',
                });
              }
            }}>+421917387255</a>
          </div>
          <div className="flex items-center gap-2 text-tertiary-content text-sm mt-2">
            <span className="font-medium">Location:</span>
            <span>Nitra, Slovakia</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between border-t border-neutral/20 pt-6 mt-6 gap-4">
        <span className="text-tertiary-content text-xs">© {new Date().getFullYear()} Daniel Cok. All rights reserved.</span>
        <div className="flex gap-3 text-xs text-tertiary-content">
          <span>Languages:</span>
          {languages.map((language, idx) => (
            <span
              key={language}
              className={idx === 0 ? 'text-neutral font-semibold' : ''}>
              {language}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
