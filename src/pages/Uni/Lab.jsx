import React from 'react'
import BlueButton from '../../components/BlueButton'
import Button from '../../components/Button'
import icon4 from '../../assets/icons/icon4.svg'
import unip3 from '../../assets/images/unip3.webp'
import unip4 from '../../assets/images/unip4.webp'
import unip5 from '../../assets/images/unip5.webp'
import unip6 from '../../assets/images/unip6.webp'

const Lab = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-10 tab-animation'>
      
      <div className='flex lg:flex-row flex-col bg-white rounded-3xl shadow-xl transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer'>

        <div className='pl-10 pt-10'>
            <h4 className='font-bold text-[23px] max-w-[520px]'></h4>
            <ul className='list-none my-4'>
                <li className='font-sans my-4'>— Покажем вам офис</li>
                <li className='font-sans max-w-[550px] my-4'>— Расскажем о том, как попасть к нам в штат: через образовательные программы, стажировки и вакансии</li>
                <li className='font-sans my-4'>— Поговорим о профессиях в Т‑Банке</li>
                <li className='font-sans my-4'>— Ответим на вопросы в неформальной обстановке</li>
            </ul>
            <div className='flex justify-start'>
            <Button title="Узнать подробнее"/>
            </div>
        </div>

        <img src={unip3} className='object-cover w-[440px] h-[416px]' />

      </div>

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
            <Button title="Узнать подробнее"/>
            </div>
        </div>

        <img src={unip4} className='object-cover w-[440px] h-[416px]' />

      </div>

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
            <Button title="Узнать подробнее"/>
            </div>
        </div>

        <img src={unip5} className='object-cover w-[440px] h-[416px]' />

      </div>

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
            <Button title="Подать заявку"/>
            </div>
        </div>

        <img src={unip6} className='object-cover w-[440px] h-[416px]' />

      </div>

    </div>
  )
}

export default Lab