import "./css/globals.css";

export const metadata = {
  title: "Society of Polymaths",
  description:
    "An interdisciplinary student community exploring ideas across mathematics, science, philosophy, technology, arts and social sciences.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
