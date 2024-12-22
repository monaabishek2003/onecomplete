import { p } from 'framer-motion/client'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made with Love❤️. All Rights are Reserved</p>
      <div className="footer__links">
        {["About", "Privacy Policy", "Licensing", "Contact"].map(
          (item,index)=><Link href={`./${item.toLocaleLowerCase}`} className="footer__link" key={index}>{item}</Link>
        )}
      </div>
    </footer>
  )
}

export default Footer
