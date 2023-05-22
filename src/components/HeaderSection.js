import pic from './img/pic.jpg'
const HeaderSection = () => {

    return (
        <div className="px-6 pt-20 lg:px-8  grid-cols-2  flex justify-evenly items-center">
            <div className="col-start-1">
                <img src={pic} className="w-[380px] h-[350px] rounded shadow" />
            </div>
            <div className="col-start-2 text-white">
                <p className='text-4xl'>林則安 Andrew</p><br />
                <p className='text-3xl'>就讀於國立台中科技大學 資管系</p>
            </div>
        </div>
    )
}

export default HeaderSection;