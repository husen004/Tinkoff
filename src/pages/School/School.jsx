import React, { useState } from 'react'
import HeadText from '../../components/HeadText'
import Button from '../../components/Button'
import headschool from '../../assets/images/headschool.webp'
import schoolicon from '../../assets/icons/schoolicon.svg'
import stabsp1 from '../../assets/icons/stabsp1.webp'
import stabsp2 from '../../assets/icons/stabsp2.webp'
import { courseSchool } from '../../constants'
import { sicon } from '../../constants'

const School = () => {

  const [tabs, setTabs] = useState(1)

  function handleTabs(i) {
    setTabs(i)
  }

  return (
    <div className='w-full'>

      <div className='flex justify-center items-center flex-col pt-[100px]'>

        <HeadText title="Т‑Банк Поколение" />

        <p className='font-sans my-4 text-center'>
        Бесплатные курсы и мероприятия для школьников, подготовка к олимпиадам по математике, информатике и анализу данных
        </p>

        <Button title="Выбрать направление"/>

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={headschool} alt='headschool' className='object-cover w-[80%]'/>
      </div> 

      <div className='flex flex-wrap justify-center items-cetner gap-10 my-10'>
      {courseSchool.map((c, index) => (
        <div className='flex flex-row md:px-0 px-4'  key={index}>
          <img src={c.icon} className='bg-white shadow-lg rounded-3xl object-contain w-[64px] h-[64px]'/>
          <div className='flex flex-col ml-6 max-w-[450px]'>
          <h1 className='font-bold text-[22px]'>{c.title}</h1>
          <p className='font-sans max-w-[450px] mt-2 text-[15px]'>{c.para}</p>
          </div>
        </div>
        ))}
      </div>

      <div className='flex justify-center'>
        <div className='flex flex-row justify-evenly bg-white shadow-lg rounded-3xl gap-6 px-10 pt-3 pb-6 '>
          {sicon.map((s, index) => (
            <div className='h-full flex flex-col justify-center items-center' key={index} >
              <img src={s.icon} alt='sicon' className='mt-2 object-cover w-[25px] h-[25px]'/>
              <div className='flex justify-center text-center h-[30px] cursor-pointer'>
                <p className='font-sans text-[12px] max-w-[80px] hover:opacity-80 transition-all duration-300 ease-in-out'>{s.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <HeadText title="Курсы" />

      <div className='flex justify-center py-6'>
        <div className='flex flex-row gap-6 border-b-[1px] border-gray-300 '>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer'>
             <button className='my-4' onClick={() => handleTabs(1)}>Подготовка к олимпиадам</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer'>
             <button className='my-4' onClick={() => handleTabs(2)}>Базовые</button>
          </div>
        </div>
        </div>

      <div className={`flex flex-col justify-center items-center py-10 cursor-pointer ${tabs === 1 ? "block" : "hidden"}`}>
          <div className='flex flex-col items-center md:flex-row  my-12  bg-white rounded-3xl shadow-lg transition duration-500 ease-in-out hover:scale-105 mx-2'>

            <div className='ml-6 mt-4'>  
              
              <div className='flex w-[200px] bg-darkgrey rounded-xl mt-4 p-2'>
                <img src={schoolicon} alt='schoolicon' className='object-cover' />
                <p className='font-sans text-[14px] text-gray-800 ml-2'>Ученики 5 - 11 классов</p>
              </div>
              <h4 className='font-bold text-[22px] mt-12'>Алгоритмы и структура данных</h4>
              <p className='font-sans text-[14px] text-gray-600 mt-2'>Подготовим к олимпиадам по информатике и программированию</p>
              
              <div className='flex flex-row gap-16 mt-8 mr-8'>
                <div className=''>
                  <h4 className='font-bold text-[16px]'>Очно и онлайн</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[140px]'>занятие раз в неделю с 16:00 до 21:00</p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Много практики</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[160px]'>Каждую неделю решаем тематические задачи</p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Отбор</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[155px]'>Нужно сдать вступительный экзамен</p>
                </div>

              </div>

              <div className='mt-8'>
                <Button title="Узнать подробнее" />
              </div>

            </div>

            <div className='flex justify-center items-center'>
              <img src={stabsp1} alt='stabsp1' className='object-cover w-[440px] h-[410] rounded-3xl' />
            </div>

          </div>

          <div className='flex flex-col md:flex-row bg-white rounded-3xl shadow-lg transition duration-500 ease-in-out hover:scale-105 mx-2 cursor-pointer'>

            <div className='ml-6 mt-4'>  
              
              <div className='flex w-[200px] bg-darkgrey rounded-xl mt-4 p-2'>
                <img src={schoolicon} alt='schoolicon' className='object-cover' />
                <p className='font-sans text-[14px] text-gray-800 ml-2'>Ученики 7 - 11 классов</p>
              </div>
              <h4 className='font-bold text-[22px] mt-12'>Олимпиадная математика</h4>
              <p className='font-sans text-[14px] text-gray-600 mt-2'>Научим решать математические задачи на любые темы</p>
              
              <div className='flex flex-row gap-16 mt-8 mr-8'>
                <div className=''>
                  <h4 className='font-bold text-[16px]'>олимпиадамнлайн</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[140px]'>занятие два раза в неделю 2-3 часа </p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Много практики</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[160px]'>Разбор и тренировочные олимпиады</p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Отбор</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[155px]'>Нужно сдать вступительный экзамен</p>
                </div>

              </div>

              <div className='mt-4'>
                <Button title="Узнать подробнее" />
              </div>

            </div>

            <div className='flex justify-center items-center'>
              <img src={stabsp2} alt='stabsp1' className='object-cover w-[430px] h-[410] rounded-3xl' />
            </div>

          </div>

      </div>

      <div className={`${tabs === 2 ? "block" : "hidden"}`}>

      </div>

    </div>
  )
}

export default School