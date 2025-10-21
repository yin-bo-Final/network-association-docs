import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">音波文档</h1>
      <p className="text-fd-muted-foreground flex justify-center gap-6">
        <Link
          href="/docs/student_union"
          className="btn-apple"
        >
          关于学生会
        </Link>
        <Link
          href="/docs/network_association"
          className="btn-apple"
        >
          关于网络协会
        </Link>
      </p>
    </main>
  );
}
