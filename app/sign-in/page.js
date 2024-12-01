import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaLock } from 'react-icons/fa';
import Image from 'next/image';

export default function SignIn() {
  return (
    <div className="bg-[url('/img/login/background.svg')] min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden">
        {/* Right Section */}
        <div className="w-1/2 p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Đăng nhập</h2>
          
          {/* Social Login */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="p-2 border rounded-full hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-110">
              <FaFacebook className="w-5 h-5 text-blue-600" />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-110">
              <FaTwitter className="w-5 h-5 text-blue-400" />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-110">
              <FaLinkedin className="w-5 h-5 text-blue-700" />
            </button>
          </div>
          
          {/* Divider with text */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Hoặc</span>
            <div className="w-24 border-t border-gray-300"></div>
          </div>

          <form className="space-y-4">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-center">
              <a href="/forgot-password" className="text-sm text-gray-600 hover:underline">
                Quên mật khẩu?
              </a>
            </div>
            <button className="mx-auto px-8 text-white bg-blue-500 py-2 rounded-full ml-28 hover:bg-blue-600 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              Đăng nhập
            </button>
          </form>
        </div>

        {/* Left Section */}
        <div className="bg-[url('/img/login/login.svg')] w-1/2 bg-gray-300 p-12 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Xin chào!</h2>
          <p className="text-white mb-6">
            Đăng ký ngay để nhận thông tin ưu đãi độc quyền chúng tôi nếu bạn chưa có tài khoản.
          </p>
          <Link href="/sign-up">
            <button className="px-8 py-2 border-2 border-white  rounded-full text-white hover:bg-white hover:text-blue-600 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              Đăng ký
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 