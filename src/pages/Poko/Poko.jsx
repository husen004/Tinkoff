import React from 'react'
import { Icon } from 'react-icons-kit'
import {arrow_up} from 'react-icons-kit/ikons/arrow_up'
import HeadText from '../../components/HeadText'
import headpoko from '../../assets/images/headpoko.webp'
import pokop1 from '../../assets/images/pokop1.avif'
import Para from '../../components/Para'
import Give from './Give'

const Poko = () => {
  return (
    <div className='w-full'>
      
      <div className='flex justify-center items-center flex-col pt-[100px]'>

      <HeadText title="Вклад в поколение" />

        <p className='font-sans my-4 text-center max-w-[730px]'>
        Поддерживаем талантливых преподавателей математики, информатики и физики со всей России Вы получите 150 000 ₽ от Т‑Образования</p>

        <div className='flex justify-center items-center gap-4 '>
            <button type='button' className='transition ease-in h-[55px] my-6 focus:outline-none text-black-100 bg-yellow-300 hover:bg-yellow-400  font-medium rounded-xl text-sm w-[120px]'>Подать заяку</button>
            <button type='button' className='transition ease-in h-[55px] my-6 focus:outline-none text-black-100 font-medium hover:bg-gray-300 bg-gray-200 w-[200px] rounded-xl text-blue-600'>Положение о конкурсе</button>
        </div>

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={headpoko} alt='poko' className='object-cover w-[80%]'/>
      </div>  

      <HeadText title="При поддержке" />

      <div className='flex justify-center py-6'>
        <div className='flex justify-center bg-white rounded-3xl shadow-xl w-[1100px]'>
          <img src={pokop1} alt='pokop1' className='object-cover w-[336px] h-[144px]' />
        </div>
      </div>

      <div className='flex justify-center flex-row flex-wrap pb-20'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
          <a href='#give'>
          <div className='cursor-pointer bg-white rounded-3xl shadow-lg p-4 flex flex-row'>
           <p className='font-sans p-4'>Что вы получите</p>
           <Icon icon={arrow_up} size={40} className='rotate-90 ml-[300px]' />
          </div>
          </a>

        <a href='#otbo'>
        <div className='cursor-pointer bg-white rounded-3xl shadow-lg p-4  flex flex-row'>
          <p className='font-sans p-4'>Этапы отбора и календарь проекта</p>
          <Icon icon={arrow_up} size={40} className='rotate-90 ml-[155px]' />
        </div>
        </a>

        <a href='#cann'>
        <div className='cursor-pointer bg-white rounded-3xl shadow-lg p-4  flex flex-row'>
          <p className='font-sans p-4'>Требование к кандидатам</p>
          <Icon icon={arrow_up} size={40} className='rotate-90 ml-[230px]' />
        </div>
        </a>

        <a href='#ques'>
        <div className='cursor-pointer bg-white rounded-3xl shadow-lg p-4  flex flex-row'>
          <p className='font-sans p-4'>Вопросы и ответы</p>
          <Icon icon={arrow_up} size={40} className='rotate-90 ml-[280px]' />
        </div>
        </a>

        </div>
      </div>

      <HeadText title="Что вы получите" />
      
      <Give />

      <HeadText title="Какие требования к кандидатам" />
      <Para className="py-4 text-center" title="Ждем вас, если вы преподаете один из трех предметов в школе или организации дополнительного образования" />


    </div>
  )
}

export default Poko