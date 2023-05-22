import dark from './img/海報.jpg'
const ImageSection = () => {

    return (
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8 grid grid-cols-2">
            <div className='col-start-1  flex justify-center'>
                <img
                    src={dark}
                    className="h-[600px] w-[450px] xl:rounded-3xl max-w-full"
                />
            </div>
            <div className='col-start-2 flex items-center justify-center h-full'>
                <p className='text-gray-300 text-2xl text-start leading-loose'>
                    我是林則安，目前就讀於國立台中科技大學資管系，
                    目前正在創科實習，在此期間，透過各種專案的開發，
                    使我對前後端的框架更加熟悉，同時對於一個專案實際開發的步驟
                    及過程有更深入的了解。<br />
                    興趣方面，因為個性內向，所以決定加入熱舞社來鍛鍊自己，
                    沒想到跳著跳著就變成了熱舞社幹部，
                    也慢慢對跳舞產生了興趣，有時甚至會聽音樂聽得太過投入而不小心動了起來。
                </p>
            </div>

        </div>
    )
}

export default ImageSection;