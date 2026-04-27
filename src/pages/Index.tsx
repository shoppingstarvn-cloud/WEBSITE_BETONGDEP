const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-sm p-8 text-center space-y-4 border border-slate-200">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Chào mừng đến với dự án!</h1>
        <p className="text-slate-600 text-lg">
          Cấu trúc Layout cơ bản (Header, Main, Footer) đã được thiết lập thành công bằng React Router và Tailwind CSS.
        </p>
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Đã tối ưu cho React Router</h3>
            <p className="text-sm text-blue-600">Sử dụng tính năng Nested Routes để tái sử dụng Layout trên mọi trang.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-slate-800 mb-2">Thiết kế Responsive</h3>
            <p className="text-sm text-slate-600">Tự động co giãn nội dung phù hợp với mọi kích thước màn hình.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;