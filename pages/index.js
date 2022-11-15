import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="container mx-auto mt-10 bg-black">
      <Navbar />
      <h1 className="mt-10 text-white text-4xl text-center">
       Home Page
      </h1>
      <p className="text-white my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum itaque rem ut ab doloremque quos quia officia, dolorem iure error cumque distinctio sunt eum unde tenetur a illum. Cupiditate harum deserunt aut recusandae! Ipsum unde expedita nulla aliquam obcaecati fugit, asperiores autem tenetur odit repellat eaque illum doloremque laudantium?</p>
      <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum itaque rem ut ab doloremque quos quia officia, dolorem iure error cumque distinctio sunt eum unde tenetur a illum. Cupiditate harum deserunt aut recusandae! Ipsum unde expedita nulla aliquam obcaecati fugit, asperiores autem tenetur odit repellat eaque illum doloremque laudantium?</p>
      
      <div className="mt-10 flex justify-center">
        <Link href="list">
          <Button />
        </Link>
      </div>
      <Footer />
    </div>
  )
}
