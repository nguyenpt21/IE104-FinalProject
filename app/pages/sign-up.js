import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-12">
          <h2 className="text-3xl font-bold mb-8">Tạo tài khoản</h2>
          
          {/* Social Login */}
          <div className="flex gap-4 mb-8">
            <button className="p-2 border rounded-full hover:bg-gray-50">
              <FaFacebook className="w-6 h-6 text-blue-600" />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-50">
              <FaTwitter className="w-6 h-6 text-blue-400" />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-50">
              <FaLinkedin className="w-6 h-6 text-blue-700" />
            </button>
          </div>
          
          <div className="text-center mb-8">
            <span className="text-gray-500">Hoặc</span>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Tên người dùng"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors">
              Đăng ký
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-gray-200 p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Chào mừng trở lại!</h2>
          <p className="text-gray-600 mb-6">
            Nếu bạn đã có tài khoản, hãy đăng nhập để tiếp tục kết nối với chúng tôi.
          </p>
          <Link href="/sign-in">
            <button className="px-8 py-2 border-2 rounded-full hover:bg-gray-300 transition-colors">
              Đăng nhập
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 