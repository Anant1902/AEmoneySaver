import './globals.css'
import Navbar from '../components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className ="bg-rose-100">
      <Navbar />
      <main className ="w-full h-screen py-12">{children}</main>
      </body>
    </html>
  );
}