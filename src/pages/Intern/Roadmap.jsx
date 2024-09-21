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
            <h4 className='font-semibold text-[20px]'>Заполните анкету об опыте и мотивации</h4>
            <p className='fons-sans text-[16] mt-4 max-w-[500px]'>Доступ к анкете откроется вместе с экзаменами. Каждую анкету изучают кураторы, поэтому мотивация важна так же, как результаты экзамена. </p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-10 text-center'>
            <span className='text-[35px] flex justify-center items-center bg-yellow-300 rounded-xl w-[60px] h-[60px]'>4</span>
            <div className='bg-white rounded-3xl shadow-xl flex flex-col p-6'>
            <h4 className='font-semibold text-[20px]'>Пройдите онлайн-экзамен</h4><br/>
            <p className='font-sans'>Перед экзаменом можно попробовать свои силы, решив <span className='cursor-pointer text-blue-400'>тренировочный контест</span></p><br/>
            <p className='font-sans'>— Материалы для подготовки ищите в сообществе во ВКонтакте</p>  
            <p className='fons-sans'>— Вопросы можно задать в телеграм-боте @clar_tbot</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-10 text-center'>
            <span className='text-[35px] flex justify-center items-center bg-yellow-300 rounded-xl w-[60px] h-[60px]'>5</span>
            <div className='bg-white rounded-3xl shadow-xl flex flex-col p-6'>
            <h4 className='font-semibold text-[20px]'>Пройдите интервью с одной или несколькими командами</h4>
            <p className='fons-sans text-[16] mt-4 max-w-[500px]'>Координатор пригласит всех, кто успешно справился с отборочными испытаниями. После интервью — свяжется с вами и сообщит результаты</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Roadmap