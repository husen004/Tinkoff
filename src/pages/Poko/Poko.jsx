import React from 'react'
import { Icon } from 'react-icons-kit'
import {arrow_up} from 'react-icons-kit/ikons/arrow_up'
import HeadText from '../../components/HeadText'
import headpoko from '../../assets/images/headpoko.webp'
import pokop1 from '../../assets/images/pokop1.avif'
import Para from '../../components/Para'
import Give from './Give'
import pokop2 from '../../assets/images/pokop2.webp';
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'
import icon4 from '../../assets/icons/icon4.svg'
import Button from '../../components/Button'

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

      <div className='flex flex-wrap justify-center gap-14 py-10' id='cann'>

        <div className='flex flex-col justify-center gap-10'>
          <div className='flex flex-row items-center gap-4'>
            <img src={icon4} className='w-[] h-[] bg-white rounded-3xl shadow-lg' />
            <h1 className='font-bold text-[22px] max-w-[200px]'>Вы — учитель математики </h1>
          </div>
          <div className='bg-white rounded-3xl pl-6 pt-6 h-[400px]'>
            <h1 className='font-bold text-[20px] max-w-[250px]'>Работаете со старшеклассниками</h1>
            <p className='fonst-sans max-w-[250px] mt-6'>Грант могут получить учителя математики, информатики или физики 9—11-х классов из любой школы России или организации дополнительного образования</p>
          </div>
        </div>

        <div className='flex flex-col justify-center gap-10'>
          <div className='flex flex-row items-center gap-4'>
            <img src={icon2} className='w-[] h-[] bg-white rounded-3xl shadow-lg' />
            <h1 className='font-bold text-[22px] max-w-[220px]'>Вы — учитель информатики</h1>
          </div>
          <div className='bg-white rounded-3xl pl-6 pt-6 h-[400px]'>
            <h1 className='font-bold text-[20px] max-w-[250px]'>Есть опыт преподавания</h1>
            <p className='fonst-sans max-w-[250px] mt-6'>Нужно иметь официальный педагогический стаж от года. При этом учебная нагрузка должна быть не менее 9 часов в неделю по одному из предметов: «математика», «информатика» или «физика», из которых в старших классах не менее 1 часа</p>
          </div>
        </div>

        <div className='flex flex-col justify-center gap-10'>
          <div className='flex flex-row items-center gap-4'>
            <img src={icon3} className='w-[] h-[] bg-white rounded-3xl shadow-lg' />
            <h1 className='font-bold text-[22px] max-w-[200px]'>Вы — учитель физики</h1>
          </div>
          <div className='bg-white rounded-3xl pl-6 pt-6 h-[400px]'>
            <h1 className='font-bold text-[20px] max-w-[250px]'>Готовы проводить мероприятия по материалам Т‑Образования</h1>
            <p className='fonst-sans max-w-[250px] mt-6'>В случае победы в конкурсе мы предложим вам провести несколько активностей осенью 2024 года. Например, экскурсию для учеников в один из ИТ-хабов Т‑Банка, математическую игру или лекцию по информатике</p>
          </div>
        </div>

        <img src={pokop2} className='object-cover w-[1104px]' />

      </div>

        <Button title="Подать заявку" />

        <HeadText title="Этапы отбора и календарь проекта" />
        <Para title="Обратите внимание, что получить грант смогут участники, которые официально работают в школе или организации дополнительного образования на момент 1 сентября 2024 года" />


    </div>
  )
}

export default Poko