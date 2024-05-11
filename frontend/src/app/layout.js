import { Oxygen } from 'next/font/google';
import './globals.css';
import NavBar from '../components/navigation/NavBar';

const oxygen = Oxygen({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Detect Obesity Level',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oxygen.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
