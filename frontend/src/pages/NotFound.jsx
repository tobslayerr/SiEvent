import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-black">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Halaman yang anda cari tidak tersedia!</h2>
      <p className="text-gray-600 mt-2">Sepertinya halaman yang kamu cari tidak ada.</p>
      <Link to="/" className="mt-4 px-4 py-2 border border-black bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-black transition active:scale-90">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
