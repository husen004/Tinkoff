import React from 'react'

const Otbor = () => {
  return (
    <div className='flex flex-col justify-center items-center py-10'>
        <div className='w-[1100px] flex md:flex-row flex-col  items-center border-b-[1px] border-b-gray-400 p-2'>
            <div className='flex justify-start'>
             <h4 className='font-bold w-[200px]'>Прием заявок</h4>
            </div>
            <div className='flex justify-between items-center w-full'>
                <p className='font-sans max-w-[450px]'>До 3 июля 2024 года <br/> Заполнить анкету можно с 1 апреля по 3 июля 2024 года</p>
                <p className='font-sans max-w-[420px]'>Заполните анкету на сайте Т‑Образования и расскажите о себе и вашем опыте работы</p>
            </div>
        </div>

        <div className='w-[1100px] flex flex-row  items-center border-b-[1px] border-b-gray-400 p-2'>
            <div className='flex justify-start'>
             <h4 className='font-bold w-[200px]'>Конкурсный отбор</h4>
            </div>
            <div className='flex justify-between items-center w-full'>
                <p className='font-sans max-w-[450px]'>с 25 июня по 3 июля 2024 года</p>
                <p className='font-sans max-w-[420px]'>Предметное тестирование: пройдите тест и решите задачи по своей дисциплине</p>
            </div>
        </div>
        
        <div className='w-[1100px] flex flex-row  items-center border-b-[1px] border-b-gray-400 p-2'>
            <div className='flex justify-start'>
             <h4 className='font-bold w-[200px]'></h4>
            </div>
            <div className='flex justify-between items-center w-full'>
                <p className='font-sans max-w-[450px]'>с 6 июля (15:00 мск) до 7 июля (21:00 мск) 2024 года </p>
                <p className='font-sans max-w-[420px]'><span className='font-bold'>Педагогический блок по математике:</span> необходимо проанализировать и решить методические предметные задачи.<br/> <br/> Блок доступен в случае успешного прохождения предметного тестирования.</p>
            </div>
        </div>

        <div className='w-[1100px] flex flex-row  items-center border-b-[1px] border-b-gray-400 p-2'>
            <div className='flex justify-start'>
             <h4 className='font-bold w-[200px]'></h4>
            </div>
            <div className='flex justify-between items-center w-full'>
                <p className='font-sans max-w-[450px]'> с 6 июля (00:00 мск) до 9 июля (23:59 мск) 2024 года</p>
                <p className='font-sans max-w-[420px]'><span className='font-bold'>Педагогический блок по физике:</span> необходимо решить методические, творческие и эксперементальные задачи.<br/> <br/> Блок доступен в случае успешного прохождения предметного тестирования.</p>
            </div>
        </div>

        <div className='w-[1100px] flex flex-row  items-center border-b-[1px] border-b-gray-400 p-2'>
            <div className='flex justify-start'>
             <h4 className='font-bold w-[200px]'>Онлайн-интервью с финалистами</h4>
            </div>
            <div className='flex justify-between items-center w-full'>
                <p className='font-sans max-w-[450px]'> с 18 июля по 25 сентября 2024 года</p>
                <p className='font-sans max-w-[420px]'>Кандидатам, которые успешно прошли отборочные испытания, вышлем приглашение на интервью. <br/> <br/> Интервью продлится 40—60 минут. Спросим о вашей мотивации и ценностях, продемонстрируете профессиональные навыки</p>
            </div>
        </div>

        <div className='w-[1100px] flex flex-row  items-center border-b-[1px] border-b-gray-400 p-2'>
            <div className='flex justify-start w-[240px]'>
             <h4 className='font-bold max-w-[160px]'>Видеофрагмент урока и подтверждение статусу чителя</h4>
            </div>
            <div className='flex justify-between items-center w-full'>
                <p className='font-sans max-w-[450px]'>с 1 сентября по 10 октября 2024 года</p>
                <p className='font-sans max-w-[420px]'>Снимите фрагмент вашего урока по математике, информатике или физике в старших классах, который отражает методы и формы работы с учениками. Длина видео — не более 15 минут.<br/> <br/>Потребуется прикрепить сканированную копию трудовой книжки и справку о вашей учебной нагрузке</p>
            </div>
        </div>

        <div className='w-[1100px] flex flex-row  items-center p-2'>
            <div className='flex justify-start w-[240px]'>
             <h4 className='font-bold max-w-[160px]'>Объявление победителей</h4>
            </div>
            <div className='flex justify-between items-center w-full'>
                <p className='font-sans max-w-[450px]'>не позднее 25 октября 2024 года</p>
                <p className='font-sans max-w-[420px]'>Опубликуем список победителей на сайте</p>
            </div>
        </div>
        
        
    </div>
  )
}

export default Otbor