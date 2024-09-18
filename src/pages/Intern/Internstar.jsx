import React from 'react'
import intern5 from '../../assets/images/intenr5.png'
import intern6 from '../../assets/images/intenr6.webp'

const Internstar = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-4'>

        <div className='flex flex-col md:flex-row justify-center items-center gap-10 my-4'>
            <div className='flex flex-col md:flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>1. Первый день</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Получите рабочий ноутбук, подпишете документы, познакомитесь с командой и с экосистемой Т‑Банка, договоритесь о графике и формате работы</p>
              <BlueButton className="h-full items-end mb-8" title="Выбрать курс" />
              </div>
              <img src={intern5} alt='forschool1' className='object-cover' />
            </div>
            
            <div className='flex flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col justify-start items-start pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>2. Погружение</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Познакомитесь с инструментами и технологиями компании, а ментор расскажет о проекте и даст первые задания</p>
              <BlueButton className="h-full items-end mb-8 mt-[19px]" title="Выбрать курс" />
              </div>
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-10 my-4'> 
            <div className='flex flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col justify-start items-start pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>3. Основная работа над проектом</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Вместе с командой будете шаг за шагом выполнять бизнес-задачи</p>
              <BlueButton className="h-full items-end mb-8 mt-4" title="Попасть в команду" />
              </div>
            </div>

            <div className='flex flex-col md:flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>4. Подведение итогов</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Мы соберем обратную связь от ментора и команды, наметим точки роста для вас и торжественно завершим стажировку. А самых успешных стажеров пригласим в штат</p>
              <BlueButton className="h-full items-end mb-8" title="Выбрать стажировку" />
              </div>
              <img src={intern6} alt='forschool1' className='object-cover' />
            </div>
        </div>

    </div>
  )
}

export default Internstar