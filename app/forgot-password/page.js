'use client'
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

export default function ForgotPassword() {
  return (
    <div className="bg-[url('/img/login/background.svg')] min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[75%] h-[400px] p-8">
        <h2 className="text-2xl font-bold mb-6">Quên mật khẩu</h2>
        
        <div className="mb-4">
          <label className="block text-sm mb-2">Nhập Email:</label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Xin vui lòng nhập email vào ô bên trên. Chúng tôi sẽ gửi cho bạn đường dẫn để xem hướng dẫn cụ thể.
        </p>

        <button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg mb-4 transition duration-300"
        >
          Lấy lại mật khẩu
        </button>

        <div className="text-center">
          <Link 
            href="/sign-in" 
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Quay lại đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}
