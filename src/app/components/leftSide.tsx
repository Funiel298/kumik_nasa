import { useState } from 'react';
import Image from 'next/image';
import picf from '@/public/pic1.jpg'
import pics from '@/public/pic2.jpg'
import pict from '@/public/pic3.jpg'
import { FaPlay } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { motion } from 'framer-motion';

const images = [
  { src: picf, alt: 'Example 1' },
  { src: pics, alt: 'Example 2' },
  { src: pict, alt: 'Example 3' },
];

export default function LeftSide() {
  const [selectedIndex, setSelectedIndex] = useState(0); // Состояние для выбранной вкладки

  return (
    <div className="h-screen p-10 w-1/3 overflow-y-auto overflow-x-hidden bg-gray-700 bg-opacity-20 backdrop-blur-md shadow-lg flex flex-col items-center justify-center">
      
      <div className='flex justify-center mb-4 w-full'>
        {images.map((image, index) => (
          <button 
            key={index} 
            onClick={() => setSelectedIndex(index)} 
            className={`w-full p-4 rounded-lg ${selectedIndex === index ? 'bg-blue-500 text-white' : 'bg-blue-300'}`}
          >
            Image {index + 1}
          </button>
        ))}
      </div>

      <motion.div 
        className='w-full relative' // Добавьте relative, чтобы кнопка была в нужном месте
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <button className='text-xl bg-gray-500 bg-opacity-50 m-2 z-30 backdrop-blur-md rounded-xl p-3 absolute'>
          <FaPlay />
        </button>
        <Image 
          src={images[selectedIndex].src} 
          alt={images[selectedIndex].alt} 
          layout="responsive" 
          className="rounded-2xl" 
        />
      </motion.div>

      <motion.div 
        className='flex flex-row bg-black/20 w-full p-5 rounded-2xl m-5'
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <div className='w-1/2 border-r-2 border-black border-dotted'>
          <FaEarthAsia className='text-green-500 w-full h-full p-10' />
        </div>
        
        <div className='w-1/2 p-2'>
          <h1 className='text-2xl font-semibold mb-5'>In Earth conditions</h1>
          <h1 className='text-2xl font-semibold'>Magnitude: 7.1</h1>
          <h1 className='text-2xl font-semibold'>Pressure: 1013 hPa</h1>
          <h1 className='text-2xl font-semibold'>Duration: 45s</h1>
          <h1 className='text-2xl font-semibold'>Impact: Severe damage to buildings</h1>
        </div>
      </motion.div>

      <motion.h1 
        className='text-gray-200 font-bold'
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4 }}
      >
        Overview
      </motion.h1>
      
      <motion.p 
        className='text-lg font-medium'
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.6 }}
      >
        This earthquake, if it occurred on Earth, would have caused significant damage to infrastructure, shaking buildings, and potentially disrupting daily life in urban areas. Given its magnitude of 7.1, this event could result in strong seismic activity felt over a large area, with aftershocks that might continue for hours or even days.
      </motion.p>
    </div>
  );
}
