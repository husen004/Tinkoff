import React from 'react'
import HeadText from '../../components/HeadText'
import Button from '../../components/Button'
import headevent from '../../assets/images/headevent.webp'
import Panels from './Panels'

const Event = () => {
  return (
    <div>

      <div className='flex justify-center items-center flex-col pt-[100px]'>

        <HeadText title="Мероприятия и партнерские программы" />

        <p className='font-sans my-4 text-center'>
        Для школьников, студентов и начинающих специалистов
        </p>

        <Button title="Узнать подробнее" />

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={headevent} alt='event' className='object-cover w-[80%]'/>
      </div>  

      <Panels />

    </div>
  )
}

export default Event