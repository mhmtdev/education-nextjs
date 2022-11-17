import React from 'react'
import { AiOutlineMail, AiOutlineTwitter,AiFillFacebook } from 'react-icons/ai'

const Header = () => {
  return (
    <div className="border-b-2">
      <div className="container mx-auto max-w-4xl p-3 flex flex-row">
        <div className="basis-1/2">
          <AiOutlineMail />
        </div>
        <div className="basis-1/4 flex justify-end text-blue-700">
          <AiOutlineTwitter />
          <AiFillFacebook/>
        </div>
      </div>
    </div>
  )
}

export default Header
