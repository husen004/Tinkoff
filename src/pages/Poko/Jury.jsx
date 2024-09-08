import React from 'react'
import { jury } from '../../constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Jury = () => {
  return (
    <div className='flex justify-center py-10 '>
    <div className='flex justify-center w-[1000px] '>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
    >
      <div className='flex justify-center flex-col gap-10 '>
      {jury.map((j, i) => (
          <SwiperSlide>
            <div className='flex flex-col justify-center rounded-3xl bg-white p-10 h-[400px]' key={i}>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <h4 className='font-bold text-[20px]'>{j.name}</h4>
                <p className='font-sans text-[14px]'>{j.role}</p>
              </div>
              <div className='flex justify-end'>
               <img src={j.img} className='w-[64px] h-[64px] rounded-full '/>
              </div>
            </div>
            <p className='max-w-[500px] my-10'>{j.para}</p>
          </div>
        </SwiperSlide>
        ))}
      </div>
        </Swiper>
    </div>
    </div>
  )
}

export default Jury