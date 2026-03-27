import { motion } from 'motion/react'
import { type ReactNode, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useLanguage } from '@/store/language'

import LanguageToggle from '../../atoms/language-toggle'
import NavLink from '../../atoms/nav-link'

const INITIAL_HEADER_Y = -100
const FINAL_HEADER_Y = 0
const SCROLL_THRESHOLD = 50

export default function Navbar(): ReactNode {
  const [scrolled, setScrolled] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    window.addEventListener('scroll', handleScroll)

    return (): void => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  return (
    <motion.header
      animate={{ y: FINAL_HEADER_Y }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: INITIAL_HEADER_Y }}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a className="text-xl font-bold tracking-tighter" href="#home">
          JJS<span className="text-blue-500">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
          <LanguageToggle className="ml-4" language={language} onToggle={toggleLanguage} />
        </nav>
        <div className="md:hidden flex items-center gap-4">
          <LanguageToggle language={language} onToggle={toggleLanguage} />
        </div>
      </div>
    </motion.header>
  )
}
