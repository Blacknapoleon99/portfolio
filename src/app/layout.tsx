import Link from "next/link";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body className="font-sans">
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/interactive" className="hover:underline">
              Interactive
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      </body>
      </html>
  );
}
