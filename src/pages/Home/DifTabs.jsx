import React from 'react'
import forschool1 from '../../assets/icons/forschool1.webp'
import forschool2 from '../../assets/icons/forschool2.webp'
import forschool3 from '../../assets/icons/forschool3.webp'
import BlueButton from '../../components/BlueButton'

const DifTabs = () => {
  return (

    <div className='container flex flex-col justify-center items-center mx-4'>

        <div className='flex flex-row flex-wrap gap-10 my-4'>
            <div className='flex flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col justify-start items-start pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>Т‑Банк Финтех</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Бесплатные трехмесячные курсы по аналитике, разработке, маркетингу и дизайну</p>
              <BlueButton className="h-full items-end mb-8" title="Выбрать курс" />
              </div>
              <img src={forschool1} alt='' className='' />
            </div>
            
            <div className='flex flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col justify-start items-start pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>Т-банк Академия</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Читаем лекции и спецкурсы в вузах России. Предлагаем участвовать в исследовательских проектах</p>
              <BlueButton className="h-full items-end mb-8" title="Выбрать курс" />
              </div>
            </div>
        </div>

        <div className='flex flex-row flex-wrap gap-10 my-4'>
            
            <div className='flex flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col justify-start items-start pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>Т-банк Академия</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Читаем лекции и спецкурсы в вузах России. Предлагаем участвовать в исследовательских проектах</p>
              <BlueButton className="h-full items-end mb-8" title="Выбрать курс" />
              </div>
            </div>

            <div className='flex flex-row bg-white rounded-3xl shadow-xl'>
              <div className='flex flex-col justify-start items-start pt-6 pl-6'>
              <h1 className='font-semibold text-[22px]'>Talents in t-bank</h1>
              <p className='font-sans text-[15px] mt-6 max-w-[300px]'>Программы развития для молодых специалистов. Прокачиваем от джуниора до крутого мидла</p>
              <BlueButton className="h-full items-end mb-8" title="Попасть в команду" />
              </div>
              <img src={forschool1} alt='' className='' />
            </div>
        </div>

        

    </div>
  )
}

export default DifTabs