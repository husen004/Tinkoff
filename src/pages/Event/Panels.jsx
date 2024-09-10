import React from 'react'
import BlueButton from '../../components/BlueButton'
import eventp3 from '../../assets/images/eventp3.webp'
import eventp4 from '../../assets/images/eventp4.webp'
import eventp5 from '../../assets/images/eventp5.webp'

const Panels = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 mb-10'>
        <div className='flex lg:flex-row flex-col bg-white rounded-3xl shadow-xl transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer'>

        <div className='pl-10 pt-10'>
            <h4 className='font-bold text-[23px] max-w-[520px]'>Экскурсии в офисы Т‑Банка для школьников и студентов</h4>
            <ul className='list-none my-4'>
                <li className='font-sans my-4'>— Покажем вам офис</li>
                <li className='font-sans max-w-[550px] my-4'>— Расскажем о том, как попасть к нам в штат: через образовательные программы, стажировки и вакансии</li>
                <li className='font-sans my-4'>— Поговорим о профессиях в Т‑Банке</li>
                <li className='font-sans my-4'>— Ответим на вопросы в неформальной обстановке</li>
            </ul>
            <div className='flex justify-start'>
            <BlueButton className="mt-8 mb-6" title="Подробнее" />
            </div>
        </div>

        <img src={eventp3} className='w-[528px] h-[360px]' />

        </div>

        <div className='flex lg:flex-row flex-col bg-white rounded-3xl shadow-xl transition-all ease-in-out duration-500  hover:scale-105 cursor-pointer'>

        <div className='pl-10 pt-10'>
            <h4 className='font-bold text-[23px] max-w-[520px]'>Проектные смены в «Сириусе» для студентов</h4>
            <ul className='list-none my-4'>
                <li className='font-sans my-4 max-w-[550px]'>Приезжайте в Сочи на проектные смены по ML, продакт-менеджменту, Android-разработке и другим темам</li>
                <li className='font-sans max-w-[550px] my-4'>— Бесплатно</li>
                <li className='font-sans my-4'>— Саммиты и форумы</li>
                <li className='font-sans my-4'>— Офлайн и онлайн: можно учиться в «Сириусе» или дистанционно</li>
            </ul>
            <div className='flex justify-start'>
            <BlueButton className="mt-8 mb-6" title="Подробнее" />
            </div>
        </div>

        <img src={eventp4} className='w-[528px] h-[360px]' />

        </div>

        <div className='flex lg:flex-row flex-col bg-white rounded-3xl shadow-xl transition-all ease-in-out duration-500  hover:scale-105 cursor-pointer'>

        <div className='pl-10 pt-10'>
            <h4 className='font-bold text-[23px] max-w-[520px]'>Мероприятия, которые мы проводим с партнерами</h4>
            <ul className='list-none my-4'>
                <li className='font-sans my-4'>Учитесь, соревнуйтесь и знакомьтесь с другими студентами</li>
                <li className='font-sans max-w-[550px] my-4'>— Чемпионаты: чемпионат по программированию ICPC</li>
                <li className='font-sans my-4'>— Форумы: молодежные дни финтех-форума «Финополис»</li>
                <li className='font-sans my-4'>— Олимпиады: командные и индивидуальные соревнования</li>
            </ul>
            <div className='flex justify-start'>
            <BlueButton className="mt-8 mb-6" title="Подробнее" />
            </div>
        </div>

        <img src={eventp5} className='w-[528px] h-[360px] mx-4' />

        </div>
    </div>

    
  )
}

export default Panels