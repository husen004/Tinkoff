import React from 'react'
import HeadText from '../components/HeadText'
import Button from '../components/Button'
import headuni from '../assets/images/headuni.webp'

const Uni = () => {
  return (
    <div className='w-full'>

      <div className='flex justify-center items-center flex-col pt-[100px]'>

        <HeadText title="Т‑Банк Академия" />

        <p className='font-sans my-4 text-center'>
        Образовательные проекты в вузах России. Спецкурсы, кафедры по аналитике и разработке, стипендия, проектные лаборатории
        </p>

        <Button title="Выбрать программу"/>

      </div>

      <div className='flex justify-center items-center my-4'>
       <img src={headuni} alt='uni' className='object-cover'/>
      </div> 

    </div>
  )
}

export default Uni