import React from 'react'
import forschool1 from '../../assets/icons/forschool1.webp'
import forschool2 from '../../assets/icons/forschool2.webp'
import forschool3 from '../../assets/icons/forschool3.webp'
import BlueButton from '../../components/BlueButton'

const DifTabs = () => {
  return (

    <div className='flex flex-col justify-center items-center mx-4'>

        <div className='flex flex-col md:flex-row justify-center items-center gap-10 my-4'>
            <div className='flex flex-col md:flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>Т‑Банк Финтех</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Бесплатные трехмесячные курсы по аналитике, разработке, маркетингу и дизайну</p>
              <BlueButton className="h-full items-end mb-8" title="Выбрать курс" />
              </div>
              <img src={forschool1} alt='forschool1' className='object-cover' />
            </div>
            
            <div className='flex flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col justify-start items-start pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>Т-банк Академия</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Читаем лекции и спецкурсы в вузах России. Предлагаем участвовать в исследовательских проектах</p>
              <BlueButton className="h-full items-end mb-8 mt-[19px]" title="Выбрать курс" />
              </div>
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-10 my-4'> 
            <div className='flex flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col justify-start items-start pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>Talents in t-bank</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Программы развития для молодых специалистов. Прокачиваем от джуниора до крутого мидла</p>
              <BlueButton className="h-full items-end mb-8 mt-4" title="Попасть в команду" />
              </div>
            </div>

            <div className='flex flex-col md:flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>Т-Банк Старт</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Стажировки по направлениям: аналитика, бэкенд- и фронтенд-разработка</p>
              <BlueButton className="h-full items-end mb-8" title="Выбрать стажировку" />
              </div>
              <img src={forschool2} alt='forschool1' className='object-cover' />
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-10 my-4'> 

            <div className='flex flex-col md:flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>Стипендия</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Поддерживаем талантливых студентов со всей России.</p>
              <BlueButton className="h-full items-end mb-8" title="Подробнее" />
              </div>
              <img src={forschool3} alt='forschool3' className='object-cover' />
            </div>

            <div className='flex flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col justify-start items-start pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>Программы в Сириусе</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Проводим образовательные смены <br /> в Сочи или онлайн для школьников, студентов и выпускников</p>
              <BlueButton className="h-full items-end mb-8 mt-4" title="Выбрать смену" />
              </div>
            </div>

        </div>

    </div>
  )
}

export default DifTabs