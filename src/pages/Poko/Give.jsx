import React from 'react'
import icon1 from '../../assets/icons/icon1.svg'
import pokoicon1 from '../../assets/icons/pokoicon1.svg'
import sicon4 from '../../assets/icons/sicon4.svg'

const Give = () => {
  return (
    <div className='flex flex-wrap flex-row justify-center gap-8 py-6' id='give'>

        <div className='bg-white rounded-3xl shadow-xl p-6 h-[400px]'>
            <img src={icon1} />
            <h4 className='font-bold text-[22px] max-w-[260px] mt-8'>Методическую поддержку</h4>
            <p className='fons-sans max-w-[300px] mt-10'>Мы предлагаем доступ к курсам и дополнительным материалам, которые можно использовать на занятиях с учениками. Примеры — на сайте Т‑Образования</p>
        </div>

        <div className='bg-yellow-400 rounded-3xl shadow-xl p-6 h-[400px]' >
            <img src={pokoicon1} />
            <h4 className='font-bold text-[22px] max-w-[400px] mt-14'>Грант на 150 000₽</h4>
            <p className='fons-sans max-w-[300px] mt-10'>Деньги можно потратить на что угодно, мы никак не ограничиваем</p>
        </div>

        <div className='bg-white rounded-3xl shadow-xl p-6 h-[400px]'>
            <img src={sicon4} />
            <h4 className='font-bold text-[22px] max-w-[260px] mt-12'>Возможность общаться с талантливыми педагогами</h4>
            <p className='fons-sans max-w-[300px] mt-10'>Мы пригласим вас в сообщество и на онлайн-мероприятия, где вы сможете общаться с другими преподавателями и обмениваться опытом</p>
        </div>

    </div>
  )
}

export default Give