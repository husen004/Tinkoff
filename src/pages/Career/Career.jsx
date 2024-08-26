import React from 'react'
import Button from '../../components/Button'
import HeadText from '../../components/HeadText'
import headcarer from '../../assets/images/headcarer.webp'


const Career = () => {
  return (
    <div className='w-full'>

      <div className='flex justify-center items-center flex-col pt-[100px]'>

      <HeadText title="Карьера в Т‑Банке" />

      <p className='font-sans my-4 text-center'>
        Присоединяйтесь к команде и меняйте финтех-рынок с нами. У каждого есть возможность проявлять инициативу и влиять на то, каким будет продукт
      </p>

      <Button title="Узнать больше" />

      </div>

      <div className='flex justify-center items-center my-4'>
        <img src={headcarer} alt='carer' className='object-cover w-[80%]'/>
      </div>  

    </div>
  )
}

export default Career