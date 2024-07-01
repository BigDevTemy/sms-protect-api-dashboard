import { useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import SideBar from './sidebar'
import { Outlet } from 'react-router-dom'
import Title from './titlebar'
const Index = ()=>{

    const [mobileSidebar,setMobileSideBar] = useState(false)
    return (
        
            <div className="w-full h-screen flex">
                {mobileSidebar && <MobileBar setMobileSideBar={setMobileSideBar}/>}
                {/* {!enterpriseUser?.subscription?.active && <PaymentModal />} */}
                <div className='sm:w-[20%] 4xl:w-[35%]'><SideBar setMobileSideBar={setMobileSideBar}/></div>
                <div className=' pt-2 md:w-full lg:w-full lg:w-full xl:w-full 2xl:w-full 4xl:w-full sm:w-[80%]'>
                <div className='w-full h-10 mt-2'><Title/></div>
                    <Outlet/>
                </div>
            </div>
        
    )
}

export default Index;