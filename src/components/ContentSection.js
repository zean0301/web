import cpp from './img/cpp.jpg'
import js from './img/js.png'
import laravel from './img/laravel.png'
import php from './img/php.png'
import python from './img/python.png'
import react from './img/react.png'

const ContentSection = () => {

    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="grid max-w-xl grid-cols-1  grid-rows-2 gap-8 text-base leading-7 text-gray-300 lg:max-w-none ">
                    <div className="row-start-1 flex items-center justify-center h-full">
                        <p className="text-2xl text-center">擅長語言框架：</p>
                    </div>
                    <div className="row-start-2 flex justify-evenly items-center">
                        <img src={php} className="w-[150px] h-[80px] rounded shadow m-4" />
                        <img src={laravel} className="w-[150px] h-[80px] rounded shadow m-4" />
                        <img src={js} className="w-[80px] h-[80px] rounded shadow m-4" />
                        <img src={react} className="w-[150px] h-[80px] rounded shadow m-4" />
                        <img src={python} className="w-[150px] h-[80px] rounded shadow m-4" />
                        <img src={cpp} className="w-[80px] h-[80px] rounded shadow m-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentSection;