import React from 'react';
import { Rocket } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center space-y-4 border border-slate-100">
        <div className="flex justify-center text-blue-600 mb-6">
          <Rocket size={48} />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Xin chào!</h1>
        <p className="text-slate-500">
          Dự án React kết hợp Vite, TypeScript và Tailwind CSS của anh đã thiết lập thành công.
        </p>
      </div>
    </div>
  );
};

export default Index;