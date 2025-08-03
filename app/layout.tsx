import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javier Castro Magro | Portfolio",
  description: "Estudiante de Diseño y Desarrollo de Videojuegos. En este portfolio presento mis habilidades, herramientas y formación, así como proyectos y cursos que respaldan mi desarrollo. Madrid-España",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  );
}