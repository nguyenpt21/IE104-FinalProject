import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaLock } from 'react-icons/fa';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden">
        {/* Right Section - Moving this first to match the image */}
        <div className="w-1/2 p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Đăng nhập</h2>
          
          {/* Social Login - Updated styling */}
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
          
          {/* Divider with text - Updated with shorter lines */}
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
                className="w-full px-4 py-2 pl-10 border rounded-lg bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-full px-4 py-2 pl-10 border rounded-lg bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center">
              <a href="/forgot-password" className="text-sm text-gray-600 hover:underline">
                Quên mật khẩu?
              </a>
            </div>
            <button className="mx-auto px-12 bg-[#E9ECEF] text-black py-1.5 rounded-full hover:bg-gray-300 block transition duration-300 ease-in-out transform hover:scale-110">
              Đăng nhập
            </button>
          </form>
        </div>

        {/* Left Section - Updated to gray background */}
        <div className="w-1/2 bg-gray-300 p-12 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Xin chào!</h2>
          <p className="text-gray-700 mb-6">
            Đăng ký ngay để nhận thông tin ưu đãi độc quyền chúng tôi nếu bạn chưa có tài khoản.
          </p>
          <Link href="/sign-up">
            <button className="px-8 py-2 border-2 border-gray-600 rounded-full text-gray-700 hover:bg-gray-400">
              Đăng ký
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 