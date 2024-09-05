import React, { useState } from 'react'
import HeadText from '../../components/HeadText'
import Button from '../../components/Button'
import stabsp3 from '../../assets/images/stabsp3.webp'
import stabsp4 from '../../assets/images/stabsp4.webp'
import stabsp5 from '../../assets/images/stabsp5.webp'
import stabsp6 from '../../assets/images/stabsp6.webp'
import headschool from '../../assets/images/headschool.webp'
import schoolicon from '../../assets/icons/schoolicon.svg'
import stabsp1 from '../../assets/icons/stabsp1.webp'
import stabsp2 from '../../assets/icons/stabsp2.webp'
import sgrayp from '../../assets/images/sgrayp.webp'
import simg6 from '../../assets/images/simg6.webp'
import simg7 from '../../assets/images/simg7.webp'
import '../../index.css'
import Explore from './Explore'
import Prep from './Prep'
import Compe from './Compe'
import { courseSchool } from '../../constants'
import { sicon } from '../../constants'
import GrayButton from '../../components/GrayButton'
import BlueButton from '../../components/BlueButton'
import WhiteButton from '../../components/WhiteButton'
import FAQ from './FAQ'


const School = () => {

  const [stabs, setstabs] = useState(1)

  function secondHandleTab(i) {
    setstabs(i)
  }
  
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
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => handleTabs(1)}>
             <button className='my-4'>Подготовка к олимпиадам</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => handleTabs(2)}>
             <button className='my-4' >Базовые</button>
          </div>
        </div>
        </div>
        
        

      <div className={`flex flex-col justify-center items-center py-10 cursor-pointer ${tabs === 1 ? "block" : "hidden"}`}>
      <div className='tab-animation'>
          
          <div className='flex flex-col items-center md:flex-row  my-12  bg-white rounded-3xl shadow-lg transition duration-500 ease-in-out hover:scale-105 mx-2'>

            <div className='ml-6'>  
              
              <div className='flex w-[200px] bg-darkgrey rounded-xl p-2'>
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
      </div>

      
      <div className={`flex flex-col justify-center items-center py-10 cursor-pointer ${tabs === 2 ? "block" : "hidden"}`}>
      <div className='tab-animation'>

          <div className='flex flex-col items-center md:flex-row  my-12  bg-white rounded-3xl shadow-lg transition duration-500 ease-in-out hover:scale-105 mx-2'>

            <div className='ml-6'>  
              
              <div className='flex w-[200px] bg-darkgrey rounded-xl p-2'>
                <img src={schoolicon} alt='schoolicon' className='object-cover' />
                <p className='font-sans text-[14px] text-gray-800 ml-2'>Ученики 7 - 11 классов</p>
              </div>
              <h4 className='font-bold text-[22px] mt-12'>Информатика решает</h4>
              <p className='font-sans text-[14px] text-gray-600 mt-2'>Курс для тех, кто хочет познакомиться с олимпиадным программированием на Python</p>
              
              <div className='flex flex-row gap-16 mt-8 mr-8'>
                <div className=''>
                  <h4 className='font-bold text-[16px]'>Онлайн</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[140px]'>Короткие лекции и практические задачи</p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Без отбора</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[160px]'>Курс могут пройти все без исключение</p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Сертификат</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[155px]'>После курсов выдаём сертификаты</p>
                </div>

              </div>

              <div className='mt-12'>
                <Button title="Узнать подробнее" />
              </div>

            </div>

            <div className='flex justify-center items-center'>
              <img src={stabsp3} alt='stabsp3' className='object-cover w-[440px] h-[410] rounded-3xl' />
            </div>

          </div>

          <div className='flex flex-col items-center md:flex-row  my-12  bg-white rounded-3xl shadow-lg transition duration-500 ease-in-out hover:scale-105 mx-2'>

            <div className='ml-6'>  
              
              <div className='flex w-[200px] bg-darkgrey rounded-xl p-2'>
                <img src={schoolicon} alt='schoolicon' className='object-cover' />
                <p className='font-sans text-[14px] text-gray-800 ml-2'>Все желающие</p>
              </div>
              <h4 className='font-bold text-[22px] mt-12'>Анализ данных</h4>
              <p className='font-sans text-[14px] text-gray-600 mt-2'>Базовай курс по анализу данных</p>
              
              <div className='flex flex-row gap-16 mt-8 mr-8'>
                <div className=''>
                  <h4 className='font-bold text-[16px]'>Онлайн</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[140px]'>Видеоуроки тесты, домашние задание </p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Без отбора</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[160px]'>Курс могут пройти все без исключение</p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Сертификат</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[155px]'>После обучение выдаем сертификаты</p>
                </div>

              </div>

              <div className='mt-12'>
                <Button title="Узнать подробнее" />
              </div>

            </div>

            <div className='flex justify-center items-center'>
              <img src={stabsp4} alt='stabsp4' className='object-cover w-[440px] h-[410] rounded-3xl' />
            </div>

          </div>
          
          <div className='flex flex-col items-center md:flex-row  my-12  bg-white rounded-3xl shadow-lg transition duration-500 ease-in-out hover:scale-105 mx-2'>

            <div className='ml-6 '>  
              
              <div className='flex w-[200px] bg-darkgrey rounded-xl mt-2 p-2'>
                <img src={schoolicon} alt='schoolicon' className='object-cover' />
                <p className='font-sans text-[14px] text-gray-800 ml-2'>Ученики 4 - 6 классов</p>
              </div>
              <h4 className='font-bold text-[22px] mt-12'>Математика решает</h4>
              <p className='font-sans text-[14px] text-gray-600 mt-2'>Курс для, тех кто любит или хочеть полюбить математические задание</p>
              
              <div className='flex flex-row gap-16 mt-8 mr-8'>
                <div className=''>
                  <h4 className='font-bold text-[16px]'>Онлайн</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[140px]'>Короткие лекции и разбор типовых задач </p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Без отбора</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[160px]'>Курс могут пройти все без исключение</p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Сертификат</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[155px]'>После обучение выдаем сертификаты</p>
                </div>

              </div>

              <div className='mt-4'>
                <Button title="Узнать подробнее" />
              </div>

            </div>

            <div className='flex justify-center items-center'>
              <img src={stabsp5} alt='stabsp5' className='object-cover w-[440px] h-[410] rounded-3xl' />
            </div>

          </div>

          <div className='flex flex-col items-center md:flex-row  my-12  bg-white rounded-3xl shadow-lg transition duration-500 ease-in-out hover:scale-105 mx-2'>

            <div className='ml-6'>  
              
              <div className='flex w-[200px] bg-darkgrey rounded-xl  p-2'>
                <img src={schoolicon} alt='schoolicon' className='object-cover' />
                <p className='font-sans text-[14px] text-gray-800 ml-2'>Все желающие</p>
              </div>
              <h4 className='font-bold text-[22px] mt-12'>iOS для начинаюших </h4>
              <p className='font-sans text-[14px] text-gray-600 mt-2'>Базовый курс для мобильной разработки</p>
              
              <div className='flex flex-row gap-16 mt-8 mr-8'>
                <div className=''>
                  <h4 className='font-bold text-[16px]'>Онлайн</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[140px]'>Видеоурок, тесты и домашние задание </p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Сертификат</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[160px]'>После обучение выдаем сертификаты</p>
                </div>

                <div className=''>
                  <h4 className='font-bold text-[16px]'>Отбор</h4>
                  <p className='font-sans text-[14px] text-gray-600 max-w-[155px]'>Нужно сдать вступительный экзамен</p>
                </div>

              </div>

              <div className='mt-12'>
                <Button title="Узнать подробнее" />
              </div>

            </div>

            <div className='flex justify-center items-center'>
              <img src={stabsp6} alt='stabsp6' className='object-cover w-[440px] h-[410] rounded-3xl' />
            </div>

          </div>

      </div>
      </div>

      <HeadText title="Мероприятия" />

      <div className='flex justify-center py-6'>
        <div className='flex flex-row gap-6 border-b-[1px] border-gray-300 cursor-pointer'>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => secondHandleTab(1)}>
             <button className='my-4'>Экскурсии</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => secondHandleTab(2)}>
             <button className='my-4' >Подготовка к олимпиадам</button>
          </div>
          <div className='border-b-2 focus-within:border-yellow-400 hover:border-gray-600 transition-all ease-in-out cursor-pointer' onClick={() => secondHandleTab(3)}>
             <button className='my-4' >Соревнование</button>
          </div>
        </div>
      </div>

        <div className={`flex flex-col justify-center items-center py-10 ${stabs === 1 ? "block" : "hidden"}`}>
          <div className='tab-animation'>
            <Explore />
          </div>
        </div>

        <div className={`flex flex-col justify-center items-center py-10 ${stabs === 2 ? "block" : "hidden"}`}>
          <div className='tab-animation'>
            <Prep />
          </div>
        </div>

        <div className={`flex flex-col justify-center items-center py-10   ${stabs === 3 ? "block" : "hidden"}`}>
          <div className='tab-animation'>
           <Compe />
          </div>
        </div>

        <HeadText title="Олимпиады" />

        <div className='flex justify-center my-12'>
        <div className='flex flex-col md:flex-row-reverse bg-darkgray rounded-3xl shadow-xl '>
          
          <div className='h-full flex flex-col justify-start mt-6 mx-6'>
            <h4 className='font-bold text-[22px] text-white'>Олимпиада по промышленной разработке «PROD»</h4>
            <p className='font-sans text-white'>Состязание с практикой по программированию для школьников 9-11 классов</p>
            <p className='font-sans mt-6 max-w-[600px] text-white'>Победители получат допбаллы и другие преимущества при поступлении в НИУ ВШЭ или Центральный университет</p>
            <div className='mt-8'>
              <GrayButton title="Узнать подробнее" />
            </div>
          </div>

          <img src={sgrayp} alt='sgrayp' className='w-[421px] h-[248px]' />
          
        </div>
        </div>

        <div className='flex justify-center md:flex-row flex-col gap-10 mb-10'> 

          <div className='bg-white rounded-3xl shadow-xl p-8'>
            <h5 className='text-gray text-[14px]'>Школьники 9 — 11 классов</h5>
            <h1 className='font-bold text-[22px] max-w-[400px]'>Национальная олимпиада по анализу данных «DANO»</h1>
            <p className='font-sans max-w-[450px]'>Возможность научиться применять анализ данных и получить преимущества для поступления в ВШЭ и вузы-организаторы</p>
            <div className='mt-6'>
              <BlueButton title='Узнать подробностии'/>
            </div>
          </div>

          <div className='bg-white rounded-3xl shadow-xl p-8'>
            <h5 className='text-gray text-[14px]'>Школьники 5 — 8 классов</h5>
            <h1 className='font-bold text-[22px] max-w-[350px]'>Всероссийская олимпиада по информатике им.Келдыша</h1>
            <p className='font-sans max-w-[450px]'>Шанс попасть в сборную России и участвовать в международных соревнованиях</p>
            <div className='mt-12'>
             <BlueButton title='Узнать подробностии'/>
            </div>
          </div>

        </div>

        <HeadText title="Профильный класс Т‑Банк" />
       
        <div className='flex justify-center py-10'>
          <div className='bg-white rounded-3xl shadow-3xl flex md:flex-row-reverse flex-col'>
          <div className='mr-6'>
            <h4 className='font-bold text-[22px] mt-4'>Т-класс в школах России</h4>
            <p className='font-sans mt-4 max-w-[550px]'>Открываем классы с углубленным изучением программирования по всей стране</p>
            <p className='font-sans mt-4'>— Поступить можно с 10-го класса</p>
            <p className='font-sans mt-4'>— Преподаватели программирования — ведущие разработчики Т‑Банка</p>
            <BlueButton title="Узнать плжробности" className="mt-8" />
          </div>
            <img src={simg6} className='object-cover w-[528px] h-[270px] md:mt-6'/>
          </div>
        </div>

          <HeadText title="Партнерские программы Т‑Банка" />

          <div className='flex justify-center py-10'>
            <div className='flex md:flex-row flex-col rounded-3xl shadow-xl bg-darkgrey transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer'>
            <div className='ml-12 mt-12'>
              <h1 className="font-bold text-[34px]">Совместные проекты</h1>
              <p className='font-sans max-w-[400px] mt-2'>Летние лагеря, школы, соревнования и олимпиады, которые мы поддерживаем и проводим совместно c партнерами</p>
              <WhiteButton title="Узнать подробнее" className="mt-[100px]" />
            </div>
             <div>
              <img src={simg7} className='object-cover w-[580px] h-[400px]'/>
            </div>
            </div>
          </div>

          <HeadText title="Часто задаваемые вопросы" />

          <div>
            <FAQ />
          </div>

    </div>

        
  )
}

export default School