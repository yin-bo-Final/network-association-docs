import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">音波文档</h1>
      <p className="text-fd-muted-foreground flex justify-center gap-6">
        <Link
          href="/docs/student_union"
          className="relative inline-block px-4 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:scale-105 transform transition-all duration-200 shadow-lg"
        >
          <span className="absolute inset-0 rounded-md blur-xl opacity-30 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" aria-hidden />
          <span className="relative">关于学生会</span>
        </Link>
        <Link
          href="/docs/network_association"
          className="relative inline-block px-4 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 hover:scale-105 transform transition-all duration-200 shadow-lg"
        >
          <span className="absolute inset-0 rounded-md blur-xl opacity-30 bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500" aria-hidden />
          <span className="relative">关于网络协会</span>
        </Link>
      </p>
    </main>
  );
}
