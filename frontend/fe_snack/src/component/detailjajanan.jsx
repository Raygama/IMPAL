import React from 'react'
import Risol from "../photo/risol.jpg"
import Logo from "../photo/logo.jpg"
import { Search, Menu, Filter, PlusCircle, Heart } from 'lucide-react';

export default function DetailJajanan() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white">
        <div className="flex h-16 items-center justify-between px-4">
          <img
            src={Logo}
            alt="Snack Hunt Logo"
            className="w-[130px] h-[600px] object-contain"
          />
          <div className="flex w-full max-w-md items-center px-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="mau jajan apa hari ini?"
                className="w-full bg-[#E1E9DB] pr-8 pl-3 py-2 text-center rounded-full"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
          <button className="bg-[#E1E9DB] hover:bg-[#d4dece] rounded-full text-sm px-4 py-2">
            Masuk
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center justify-center space-x-8 px-4 py-2">
          <a href="/" className="flex items-center space-x-1">
            <Menu className="h-4 w-4" />
            <span className="text-sm">Menu</span>
          </a>
          <a href="/filter" className="flex items-center space-x-1">
            <Filter className="h-4 w-4" />
            <span className="text-sm">Filter Jajanan</span>
          </a>
          <a href="/add" className="flex items-center space-x-1">
            <PlusCircle className="h-4 w-4" />
            <span className="text-sm">Tambah Jajanan</span>
          </a>
          <a href="/favorites" className="flex items-center space-x-1">
            <Heart className="h-4 w-4" />
            <span className="text-sm">Favoritku</span>
          </a>
        </nav>
      </header>

    <div className="max-w-5xl mx-auto p-4">
      {/* Food Detail Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img
            src={Risol}
            alt="Risoles Mozzarella"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold">Risoles Momo</h1>
            <button className="p-2 rounded-full hover:bg-gray-100 text-[#70AE6E]">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart-plus">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.96 6.053" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
              </svg>
              </span>
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-500">5/5</span>
          </div>

          {/* Price and Tags */}
          <div className="mt-4">
            <span className="text-lg border border-[#70AE6E] mr-2 py-1 px-4 rounded-lg text-[#70AE6E]">
                Rp. 5000
                </span>
              <span className="text-lg bg-[#70AE6E] mr-2 py-1 px-4 rounded-lg text-white">
                Makanan
              </span>
              <span className="text-lg bg-[#70AE6E] mr-2 py-1 px-4 rounded-lg text-white">
                Asin
              </span>
          </div>

          {/* Location and Contact */}
          <div className="mt-4 space-y-2">
            <p className="flex items-center text-[#70AE6E]">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Sukapura Blok 16
            </p>
            <p className="flex items-center text-[#70AE6E]">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-address-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                <path d="M10 16h6" />
                <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M4 8h3" />
                <path d="M4 12h3" />
                <path d="M4 16h3" />
              </svg>
              </svg>
              082208120322
            </p>
          </div>

          <button className="w-full mt-6 bg-[#70AE6E] text-lg text-white py-2 px-4 rounded-lg hover:bg-transparent hover:text-[#70AE6E] border hover:border-[#70AE6E] transition duration-300">
            Tambahkan Review
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((review) => (
            <div key={review} className="bg-white p-4 border rounded-lg shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium">IQ</span>
                </div>
                <div>
                  <p className="font-medium">Iqbaal</p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Quisque varius suspendisse sed donec imperdiet eget. Commodo nunc cursus iaculis libero hendrerit risus.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

