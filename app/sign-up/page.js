'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

export default function SignUp() {
  return (
    <div className="bg-[url('/img/login/background.svg')] min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full flex bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side - Welcome back section */}
        <div className="bg-[url('/img/login/register.svg')] w-1/2 p-12 flex flex-col items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
          <h2 className=" text-3xl font-bold text-white mb-4 transition-all duration-500 hover:-translate-y-1">
            Chào mừng trở lại!
          </h2>
          <p className="text-white mb-8 transition-all duration-500">
            Nếu bạn đã có tài khoản, hãy đăng nhập để tiếp tục kết nối với chúng tôi.
          </p>
          <Link 
            href="/sign-in" 
            className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            Đăng nhập
          </Link>
        </div>

        {/* Right side - Sign up form */}
        <div className="w-1/2 p-12 transform transition-all duration-500">
          <h1 className="text-3xl font-bold text-center mb-8 transition-all duration-500">
            Tạo tài khoản
          </h1>
          
          {/* Social login buttons */}
          <div className="flex justify-center space-x-4 mb-4">
            <button className="p-2 rounded-full border hover:bg-gray-50 transition-all duration-300 transform hover:scale-110">
              <FaFacebook className="w-6 h-6 text-blue-600" />
            </button>
            <button className="p-2 rounded-full border hover:bg-gray-50 transition-all duration-300 transform hover:scale-110">
              <FaTwitter className="w-6 h-6 text-blue-400" />
            </button>
            <button className="p-2 rounded-full border hover:bg-gray-50 transition-all duration-300 transform hover:scale-110">
              <FaLinkedin className="w-6 h-6 text-blue-700" />
            </button>
          </div>

          {/* Divider with "Hoặc" text */}
          <div className="flex items-center justify-center text-gray-500 mb-8">
            <div className="flex-grow max-w-[80px] border-t border-gray-300"></div>
            <span className="mx-4">Hoặc</span>
            <div className="flex-grow max-w-[80px] border-t border-gray-300"></div>
          </div>

          {/* Sign up form */}
          <form className="space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Tên người dùng"
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
