import Navbar from '../components/Navbar';
import 'tailwindcss/tailwind.css';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className ="bg-rose-100">
        <Navbar />
      <main className ="w-screen h-screen py-12">{children}</main>
      </body>
    </html>
  );
}