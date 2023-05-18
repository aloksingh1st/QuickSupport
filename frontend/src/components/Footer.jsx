import React from 'react'
import {Footer } from "flowbite-react"
import {Twitter, Instagram, Facebook, GitHub} from "@mui/icons-material"

const Foote = () => {
  return (
    <>
   <Footer bgDark={true}>
  <div className="w-full">

    <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright
        href="#"
        by="QuickSupport"
        year={2023}
      />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Footer.Icon
          href="#"
          icon={Facebook}
        />
        <Footer.Icon
          href="#"
          icon={Instagram}
        />
        <Footer.Icon
          href="#"
          icon={Twitter}
        />
        <Footer.Icon
          href="#"
          icon={GitHub}
        />
    </div>
    </div>
  </div>
</Footer>
    </>
  )
}

export default Foote