import { Rocket } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-xl cursor-pointer">
          <Rocket size={24} />
          <span>My React App</span>
        </div>
        <nav>
          <ul className="flex space-x-6 text-sm font-medium text-slate-600">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Trang chủ</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Giới thiệu</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Liên hệ</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;