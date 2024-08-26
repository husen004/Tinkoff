import React from 'react';
import { course } from '../../constants';
import { payment } from '../../constants'
import Button from '../../components/Button';
import prog from '../../assets/images/prog.webp';
import HeadText from '../../components/HeadText'
import flower from '../../assets/images/flower.webp'
import BlueButton from '../../components/BlueButton'
import forschool from '../../assets/images/forschool.webp';

const Home = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-center items-center flex-col pt-[100px]'>

      <HeadText title="Т‑Банк Образование" />

        <p className='font-sans my-4 text-center'>
        Бесплатные образовательные программы для школьников, студентов и ИТ-специалистов
        </p>

        <Button title="Выбрать программу" />

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={prog} alt='Программы' className='object-cover h-460'/>
      </div>  
      
    <div className='flex flex-wrap justify-center items-cetner gap-10 my-10'>
      {course.map((c, index) => (
        <div className='flex flex-row md:px-0 px-4'  key={index}>
          <img src={c.icon} className='bg-white shadow-lg rounded-3xl object-contain w-[64px] h-[64px]'/>
          <div className='flex flex-col ml-6 max-w-[450px]'>
          <h1 className='font-bold text-[22px]'>{c.title}</h1>
          <p className='font-sans max-w-[450px] mt-2 text-[15px]'>{c.para}</p>
          </div>
        </div>
      ))}
      </div>

        <div className='flex justify-center items-center flex-col'>
        <HeadText title="Вклад в поколение" />
        <p className='font-sans my-4'><span className='transition ease-in text-blue-400 hover:text-blue-500 cursor-pointer'>Грантовый конкурс </span>для талантливых педагогов со всей России</p>
        </div>

      <div className=''>
        <div className='flex md:flex-row  flex-col justify-center'>
        <div className='bg-darkgrey rounded-3xl'>
         <img src={flower} alt='flowerhome' className='w-[720px] h-[560px] object-contain ' />
        </div>
        <div className='flex flex-col items-center gap-6 md:mx-10 mx-10 mt-6'>
          {payment.map((pay, index) => (
            <div className='max-w-[320px]' key={index}>
              <h1 className='font-bold text-[22px]'>{pay.title}</h1>
              <p className='font-sans mt-2 text-[15px]'>{pay.para}</p>
            </div>
          ))}
          </div>
        </div>
          
        <div className='flex justify-center my-8'>
          <BlueButton title="Узнать потробнее о проекте"/>
        </div>

      </div>

      <div className='flex flex-col justify-center items-center'>

        <div className='flex flex-col items-center'> 
         <HeadText title="Центральный университет" />
          <p className='font-sans my-4 text-center'><span className='transition ease-in text-blue-400 hover:text-blue-500 cursor-pointer'>Запустили</span> частный университет на основе STEM-модели</p>
        </div>

        <div className='max-w-[800px] flex flex-col items-center'>
        <iframe
        src="https://www.youtube.com/embed/vBeypCq8c6Y?si=k7anpMLNxu31pSCH" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen 
        className='player'
        ></iframe>

        <div className=''>
        <h1 className='font-bold text-[20px] my-2'>О Центральном университете</h1>
        <p className='font-sans max-w-[860px]'>Рассказываем о будущем технического образования, рынка труда в эпоху нейросетей и первой программе университета</p>
        </div>

        <BlueButton title="Узнать подтробнее про обучение"/>

        </div>

      </div>

        <HeadText title="Для школьников" />
        
      <div className='flex justify-center items-center py-10 transition ease-in hover:scale-105'>
        <div className='flex md:flex-row flex-col justify-start w-[1104px] bg-darkgrey rounded-3xl'>
          <div className='flex flex-col  max-w-[550px] mx-8'>
            <h4 className='font-bold text-[23px] mt-8'>Бесплатные проекты для разных уровней подготовки</h4>
            <ul className='my-2 max-w-[350px]'>
              <li className='my-4 font-sans'>- Курсы по сфере ИТ</li>
              <li className='my-4 font-sans'>- Подготовка к олипиадам и подкурсам по программированию и математики</li>
              <li className='my-4 font-sans'>- Мурояприятие, тематическое соревнование и партнерские программы</li>
            </ul>
            <button className='flex justify-start transition ease-in hover:text-blue-700 text-blue-500 my-6'>Выбрать напровление</button>
          </div>
          <div className='flex items-end'>
            <img src={forschool} alt='' className='w-[456px] h-[222px] object-cover bottom-0' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home