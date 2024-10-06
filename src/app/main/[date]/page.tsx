'use client';  // Добавляем эту строку

import { motion } from 'framer-motion';
import Calendar from "../../components/calendar";
import LeftSide from "../../components/leftSide";
import VerticalBarChart from "../../components/pic";
import Catalog from "../../components/catalog";

export default function Main({ params }: any) {
  const arr = [
    {
      title: 'Date',
      data: '8/02/23',
    },
    {
      title: 'Time',
      data: '2:30 PM',
    },
    {
      title: 'Magnitude',
      data: '5.4',
    },
    {
      title: 'Duration',
      data: '35 s',
    },
    {
      title: 'Depth',
      data: '36 (km)',
    },
    {
      title: 'Intensity',
      data: 'VII (Very Strong)',
    },
  ];

  return (
    <div className="text-2xl bg-gradient-to-b flex flex-row from-blue-500 via-blue-300 to-blue-200 backdrop-blur-sm">
      <div className="bg-opacity-20 w-2/3 flex flex-col items-center justify-around h-screen bg-white backdrop-blur-md shadow-lg">
        <motion.div
          className="h-[60vh] w-full p-4 rounded-3xl overflow-hidden flex relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="absolute z-10 text-lg m-5 bg-white/30 font-semibold backdrop-blur-md p-4 rounded-xl">
            enough to destroy New York
          </h1>

          <motion.div
            className="absolute bottom-10 left-10 right-10 border-white/30 border-2 flex flex-row items-center justify-around z-10 text-lg m-5 bg-white/20 font-semibold backdrop-blur-md p-4 rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {arr.map((item: any, index: number) => (
              <div key={index} className="flex p-5 flex-col">
                <span className="text-lg font-medium text-gray-300">{item.title}</span>
                <h4 className="text-2xl">{item.data}</h4>
              </div>
            ))}
          </motion.div>

          <motion.img
            className="h-full w-full rounded-xl shake"
            src="https://news.mit.edu/sites/default/files/images/202409/MIT-MissMars-01-press.jpg"
            alt="mars-lol"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="h-1/3 p-4 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <VerticalBarChart />
        </motion.div>
      </div>
      <LeftSide />
    </div>
  );
}
