import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
      <h1 className="text-8xl font-bold">404</h1>
      <p className=" mt-2 text-2xl font-medium">ページが存在しません</p>
      <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">
        ホームへ戻る
      </Link>
    </div>
  );
};

export default NotFoundPage;
