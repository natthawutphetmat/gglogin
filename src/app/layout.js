import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "โทรศัพท์มือถือ PG V9 เว็บตรง 100%",
  description: "โทรศัพท์มือถือ PG สมาร์ทโฟน 4G หน้าจอกว้าง 6 นิ้ว รองรับ 2 ซิม 4G ",
  image: "https://myshop.m-moviehd.com/img/about/1.jpg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        <script async src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"/>
      </body>
    </html>
  );
}
