import "./globals.css";
import Navbar from "./component/Navbar.jsx"
import Footer from "./component/Footer.jsx"


export const metadata = {
  title: "Society of Polymaths",
  description:
    "An interdisciplinary student community exploring ideas across mathematics, science, philosophy, technology, arts and social sciences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}