import data from './data'
import {UserOutlined} from '@ant-design/icons'
const Index = ()=>{
    const createCards = ()=>{
        return data?.length > 0 && data.map((d,index)=>{
            return <div className="w-full mb-2 bg-white rounded-xl h-full flex flex-row items-start sm:max-4xl:w-[30%] sm:max-4xl:h-32 sm:max-4xl:border border-gray-200 sm:max-4xl:bg-white sm:max-4xl:rounded-xl sm:max-4xl:h-full sm:max-4xl:flex sm:max-4xl:flex-row sm:max-4xl:items-start p-2">
                    <div className='flex flex-col w-full h-full relative'>
                        <div className='flex items-center gap-2'>
                            <div className='w-10 h-10 rounded-full flex justify-center items-center' style={{backgroundColor:d.background}}>
                                <UserOutlined/>
                            </div>
                            <div className='text-sm font-poppins font-semibold'>{d.title}</div>
                        </div>

                        <div className='font-bold flex w-full bottom-0  justify-end absolute text-xl'>{d.number}</div>
                    </div>
                    
                    
            </div>
        })
    }
    return (
        <>
        
           {createCards()}
        
        </>
                
        
    )
}

export default Index