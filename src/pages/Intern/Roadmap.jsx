import React from 'react'

const Roadmap = () => {
  return (
    <div className='flex justify-center my-10'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col md:flex-row items-center gap-10 '>
            <span className='text-[35px] flex justify-center items-center bg-yellow-300 rounded-xl w-[60px] h-[60px]'>1</span>
            <div className='bg-white rounded-3xl shadow-xl flex flex-col p-6 text-center'>
            <h4 className='font-semibold text-[20px]'>Оставьте заявку в форме ниже</h4>
            <p className='fons-sans text-[16] mt-4'>Заполните все поля формы до 3 июля включительно</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-10 text-center'>
            <span className='text-[35px] flex justify-center items-center bg-yellow-300 rounded-xl w-[60px] h-[60px]'>2</span>
            <div className='bg-white rounded-3xl shadow-xl flex flex-col p-6 '>
            <h4 className='font-semibold text-[20px]'>Зарегистрируйтесь <span className='cursor-pointer text-blue-400'>на сайте Т‑Образования</span> и заполните анкету </h4>
            <p className='fons-sans text-[16] mt-4'>С 1 апреля по 3 июля включительно</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-10 text-center'>
            <span className='text-[35px] flex justify-center items-center bg-yellow-300 rounded-xl w-[60px] h-[60px]'>3</span>
            <div className='bg-white rounded-3xl shadow-xl flex flex-col p-6 '>
            <h4 className='font-semibold text-[20px]'>Пройдите все отборочные испытания</h4>
            <p className='fons-sans text-[16] mt-4'>С 25 июня по 25 сентября включительно</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-10 text-center'>
            <span className='text-[35px] flex justify-center items-center bg-yellow-300 rounded-xl w-[60px] h-[60px]'>4</span>
            <div className='bg-white rounded-3xl shadow-xl flex flex-col p-6'>
            <h4 className='font-semibold text-[20px]'>Ознакомьтесь с результатами</h4>
            <p className='fons-sans text-[16] mt-4'>Список победителей опубликуем на сайте не позднее 10 октября</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Roadmap