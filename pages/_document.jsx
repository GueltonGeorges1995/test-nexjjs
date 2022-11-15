import { Html, Head, Main, NextScript } from 'next/document';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='text-white container mx-auto'>
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}