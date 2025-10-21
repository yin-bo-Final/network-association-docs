import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">关于本站</h1>
      <p className="text-fd-muted-foreground">
        <Link
          href="/docs/student_union"
          className="text-fd-foreground font-semibold underline"
        >
          关于学生会
        </Link>{' '}
        <Link
          href="/docs/network_association"
          className="text-fd-foreground font-semibold underline"
        >
          关于网络协会
        </Link>
      </p>
    </main>
  );
}
