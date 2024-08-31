import React, {useState} from 'react'
import { Icon } from 'react-icons-kit'
import { zerocard } from '../../constants'
import { FAQzero }  from '../../constants'
import {arrow_up} from 'react-icons-kit/ikons/arrow_up'
import {arrow_down} from 'react-icons-kit/ikons/arrow_down'
import zeroimg3 from '../../assets/images/zeroimg3.webp'
import DarkBlueButton from '../../components/DarkBlueButton'
import Button from '../../components/Button'
import HeadText from '../../components/HeadText'
import headzero from '../../assets/images/headzero.webp'
import zeroimg1 from '../../assets/images/zeroimg1.webp'
import zeroimg2 from '../../assets/images/zeroimg2.webp'


const Zero = () => {

  const [open, setOpen] = useState(false)

  function handleOpen()  {
    setOpen(!open);
  }

  return (
    <div className='w-full'>
      
    <div className='flex justify-center items-center flex-col pt-[100px]'>

      <HeadText title="ИТ-курсы для начинающих" />

        <p className='font-sans my-4 text-center'>
        Бесплатное обучение с нуля. Попробуйте себя в разработке, аналитике и других востребованных ИТ-направлениях
        </p>

        <Button title="Узнать подробнее" />

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={headzero} alt='zero' className='object-cover w-[80%]'/>
      </div>

      <HeadText title="ИТ-курсы от Т‑Образования" />
      <p className='font-sans my-4 text-center'>Для всех желающих. Ждем учеников любого возраста</p>

      <div className='flex justify-center gap-10'>
        {zerocard.map((z, index) => (
          <div className='bg-white rounded-3xl gap-4 shadow-lg mt-10' key={index}>
            <img src={z.icon}  className='object-cover mt-10 mx-6'/>
            <h4 className='font-bold text-[23px] max-w-[300px] mt-10 mx-6'>{z.title}</h4>
            <p className='font-sans max-w-[270px] mt-4 mb-6 mx-6'>{z.para}</p>
          </div>
        ))}
      </div>

      <HeadText title="ИТ-обучение по мобильной разработке, аналитике и другим направлениям" />

      <div className='flex justify-center items-center py-10'>
        <div className='flex md:flex-row flex-col justify-start w-[1104px] bg-darkgrey rounded-3xl'>
          <div className='flex flex-col  max-w-[550px] mx-8'>
            <h4 className='font-bold text-[23px] mt-8'>iOS для начинающих</h4>
            <ul className='mt-2 max-w-[1000px]'>
              <li className='my-2 font-sans'>- Бесплатное онлайн-обучение iOS-разработке с видеоуроками, практическими заданиями и тестами</li>
              <li className='my-2 font-sans'>- Обучение в удобном темпе</li>
              <li className='my-2 font-sans'>- Возможность сделать собственное мобильное приложение</li>
              <li className='my-2 font-sans'>- Преподаватели — ведущие iOS-разработчики Т‑Банка</li>
              <li className='my-2 font-sans'>- Сертификат о прохождении ИТ-обучения в конце курса</li>
            </ul>
            <DarkBlueButton title="Узнать больше" />
          </div>
          <div className='w-full flex items-end justify-end'>
            <img src={zeroimg1} alt='' className='w-[529px] h-[360px] object-cover' />
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center py-10'>
        <div className='flex md:flex-row flex-col justify-start w-[1104px] bg-darkgrey rounded-3xl'>
          <div className='flex flex-col  max-w-[550px] mx-8'>
            <h4 className='font-bold text-[23px] mt-8'>Анализ данных</h4>
            <ul className='mt-2 max-w-[1000px]'>
              <li className='my-2 font-sans max-w-[]'>- Бесплатный курс по анализу данных для начинающих с видеоуроками, практическими заданиями и тестами</li>
              <li className='my-2 font-sans'>- Обучение в удобном темпе</li>
              <li className='my-2 font-sans'>- Преподаватели — опытные аналитики Т‑Банка</li>
              <li className='my-2 font-sans'>- Сертификат о прохождении ИТ-обучения в конце курса</li>
            </ul>
            <DarkBlueButton title="Узнать больше" />
          </div>
          <div className='w-full flex items-end justify-end'>
            <img src={zeroimg2} alt='' className='w-[529px] h-[360px] object-cover' />
          </div>
        </div>
      </div>

      <HeadText title="Часто задаваемые вопросы" />

      <div className='flex justify-center my-10 mx-2'>
        <div className='w-[1100px] flex flex-col justify-evenly bg-white rounded-3xl my-6 px-12'>
          {FAQzero.map((f, index) => (
            <div className='w-full  cursor-pointer my-6 mx-6 ' onClick={handleOpen} key={index}>
              <div className='flex flex-row justify-between transition ease-in hover:opacity-70'>
              <h4 className='font-bold md:text-[23px] text-[14px] transition ease-in hover:opacity-60 '>{f.title}</h4>
              <div className=' mr-6 cursor-pointer pr-8'>
                {open ? <Icon icon={arrow_up} size={28} /> : <Icon icon={arrow_down} size={28} />}
              </div>
              </div>
              <div className={`flex items-center ${open ? "block" : "hidden"}`}>
                <p className='font-sans mt-4 max-w-[950px]'>{f.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <HeadText title="ИТ-курсы для начинающих специалистов" />
      <div className='flex justify-center my-4'>
        <p className='font-sans'>Если не нашли здесь подходящий для вашего уровня курс, посмотрите, что еще у нас есть</p>
      </div>

      <div className='flex justify-center my-10'>
      <div className='flex flex-col md:flex-row h-full bg-white rounded-3xl '>

        <div className='flex flex-col ml-8 mt-6 '>
           <h4 className='font-bold text-[23px]'>Т‑Банк Финтех</h4>
           <p className='font-sans max-w-[500px] my-4'>Бесплатные курсы от топ-менеджеров, техлидов и ведущих разработчиков. Обучаем технологиям, которые используем в компании</p>
          <div className='flex items-end h-full mb-10'>
            <button className=' transition ease-in hover:text-blue-700 text-blue-500'>Узнать больше</button>
          </div>
        </div>

        <div className='flex h-full items-end my-6 mx-6'>
          <img src={zeroimg3} className='object-cover w-[528px] h-[230px]' />
        </div>

      </div>
      </div>

    </div>
  )
}

export default Zero