import Link from 'next/link';
import { Users, Globe, Github } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <p className="text-fd-muted-foreground flex justify-center gap-6">
        <Link
          href="/docs/student_union"
          className="btn-apple"
        >
          <Users className="inline-block w-4 h-4 mr-2 align-middle" aria-hidden />
          <span className="align-middle">关于学生会</span>
        </Link>
        <Link
          href="/docs/network_association"
          className="btn-apple"
        >
          <Globe className="inline-block w-4 h-4 mr-2 align-middle" aria-hidden />
          <span className="align-middle">关于网络协会</span>
        </Link>
        <Link
          href="https://github.com/yin-bo-Final/network-association-docs"
          className="btn-apple"
        >
          <Github className="inline-block w-4 h-4 mr-2 align-middle" aria-hidden />
          <span className="align-middle">Github</span>
        </Link>
      </p>
    </main>
  );
}
