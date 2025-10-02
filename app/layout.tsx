import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javier Castro Magro | Portfolio",
  description: "Estudiante de Diseño y Desarrollo de Videojuegos. En este portfolio presento mis habilidades, herramientas y formación, así como proyectos y cursos que respaldan mi desarrollo. Madrid-España",
  icons: {
    icon: [
      { url: "/public/img/Foto_Perfil_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/public/img/Foto_Perfil_64x64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/public/img/Foto_Perfil_64x64.png", // icono en iOS
  },
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