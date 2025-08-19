// pages/404.tsx

import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Custom404() {
  return (
    <>
      <Header />
    <section className=" bg-white font-serif page_404">
     
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-center ">
            <div
              className="h-[500] w-screen bg-center bg-no-repeat bg-cover flex items-center justify-center"
              style={{
                backgroundImage:
                  'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
              }}
            >
              <h1 className="text-8xl font-bold text-orange-600">404</h1>
            </div>

            <div className="mt-[-50px]">
              <h2 className="text-3xl font-semibold mb-4 text-orange-600">
                Looks like you are lost
              </h2>
              <p className="mb-5 text-slate-900">
                The page you are looking for is not available!
              </p>
              <Link
                href="/"
                className="inline-block bg-orange-600  font-semibold text-white px-5 py-2 rounded hover:bg-green-700 transition mb-4"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
  )
}
