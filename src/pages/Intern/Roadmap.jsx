import React from 'react'

const Roadmap = () => {
    <span className='cursor-pointer text-blue-400'></span> 
  return (
    <div className='flex justify-center my-10'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col md:flex-row items-center gap-10 '>
            <span className='text-[35px] flex justify-center items-center bg-yellow-300 rounded-xl w-[60px] h-[60px]'>1</span>
            <div className='bg-white rounded-3xl shadow-xl flex flex-col p-6 text-center'>
            <h4 className='font-semibold text-[20px]'>Подайте заявку </h4>
            <p className='fons-sans text-[16] mt-4'>Выберите направление и подайте заявку на странице нужного направления</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-10 text-center'>
            <span className='text-[35px] flex justify-center items-center bg-yellow-300 rounded-xl w-[60px] h-[60px]'>2</span>
            <div className='bg-white rounded-3xl shadow-xl flex flex-col p-6 '>
            <h4 className='font-semibold text-[20px]'>Зарегистрируйтесь</h4>
            <p className='fons-sans text-[16] mt-4'>Зарегистрируйтесь <span className='cursor-pointer text-blue-400'> в личном кабинете Т-Образования</span></p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-10 text-center'>
            <span className='text-[35px] flex justify-center items-center bg-yellow-300 rounded-xl w-[60px] h-[60px]'>3</span>
            <div className='bg-white rounded-3xl shadow-xl flex flex-col p-6 '>
            <h4 className='font-semibold text-[20px]'></h4>
            <p className='fons-sans text-[16] mt-4'></p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-10 text-center'>
            <span className='text-[35px] flex justify-center items-center bg-yellow-300 rounded-xl w-[60px] h-[60px]'>4</span>
            <div className='bg-white rounded-3xl shadow-xl flex flex-col p-6'>
            <h4 className='font-semibold text-[20px]'></h4>
            <p className='fons-sans text-[16] mt-4'></p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-10 text-center'>
            <span className='text-[35px] flex justify-center items-center bg-yellow-300 rounded-xl w-[60px] h-[60px]'>5</span>
            <div className='bg-white rounded-3xl shadow-xl flex flex-col p-6'>
            <h4 className='font-semibold text-[20px]'></h4>
            <p className='fons-sans text-[16] mt-4'></p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Roadmap