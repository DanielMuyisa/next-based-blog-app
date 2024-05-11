"use client"

import Nav from '@src/components/Nav'
import "@src/styles/globals.css"

const metadata = {
    title: 'Blogger',
    description: "Plateform web for our community to share different knologies about technology"
}

const RootLaout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Nav />
            <div className=''>{children}</div>
        </body>
    </html>
  )
}

export default RootLaout