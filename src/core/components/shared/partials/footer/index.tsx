import React from 'react'
import './style.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="flex-1">
          <ul>
            <li className="text-3xl">Service</li>
            <li className="my-2">Mobile Application</li>
            <li className="my-2">Website Application</li>
            <li className="my-2">Server Application</li>
          </ul>
        </div>
        <div className="flex-1">
          <ul>
            <li className="text-3xl">Technology</li>
            <li className="my-2">Frontend: NextJS, ReactJS</li>
            <li className="my-2">Backend: Fiber, NestJS</li>
            <li className="my-2">Mobile: Flutter, React Native</li>
          </ul>
        </div>
        <div className="flex-1">
          <ul>
            <li className="text-3xl">Contact</li>
            <li className="my-2">Email: aurorastudyvn@gmail.com</li>
            <li className="my-2">Address: Đ.TTH20, P.TTH, Q.12, TP HCM</li>
            <li className="my-2">Phone: +84989467834</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
