import React from 'react'
import {Toast} from "flowbite-react"
// import {HiFire} from "flowbite"

export const Tost = (props) => {
  return (
    <>
    <Toast>
  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
    {/* <HiFire className="h-5 w-5" /> */}
  </div>
  <div className="ml-3 text-sm font-normal">
   {props.msg}
  </div>
  <Toast.Toggle />
</Toast>
    </>
  )
}
