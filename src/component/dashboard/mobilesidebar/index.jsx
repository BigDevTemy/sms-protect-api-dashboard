import { HomeOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import LogoSidebar from '../../../assets/logosidebar.png'
import { useEffect, useState } from 'react'
import { useLocation,matchRoutes,Link } from 'react-router-dom'
const Index = ({setMobileSideBar})=>{
    const [active,setActive] = useState('app')
    
    const location = useLocation()

  
    useEffect(()=>{
            console.log(location.pathname)
            if(location.pathname){
                let pathname = location.pathname
                const desiredPart = pathname.substring(pathname.lastIndexOf("/") + 1);
                setActive(desiredPart)
            }
    },[location])

    const activeClass = 'flex flex-row h-full items-center border-r-4 border-smsgreen'
    const InactiveClass = 'flex flex-row h-full items-center text-xs'
    const activeClassText = 'font-poppins h-[100%] text-smsgreen flex items-center mt-1 text-xs'
    const InactiveClassText = 'font-poppins h-[100%] text-white flex items-center mt-1 text-xs'
    return (
        <div className='w-full h-screen bg-black/60 absolute z-10' >
            <div className="w-[40%] h-screen bg-lightBlack">
                <div className='w-full flex flex-col justify-center items-center pt-10'>
                <div className='text-xl text-white cursor-pointer' onClick={()=>{setMobileSideBar(false)}}>X</div>
                <div className='w-[80%] h-10 mb-5'>
                    <img src={LogoSidebar}/>
                </div>
            </div>
               
            <div className='mt-5 w-[95%] pl-5'>
                     <hr/>
            </div>
            <div className='w-full  h-[50%] flex flex-col items-center justify-start mt-10'>
                 
                 <div className='w-[100%] h-10 mb-2 pl-5 cursor-pointer' onClick={()=>setMobileSideBar(false)}>
                 <Link to="app">
                     <div className={active === "app" ? activeClass:InactiveClass}>
                         <div className='h-[100%] w-6 flex items-center'><HomeOutlined className={active === "app"?'text-smsgreen':'text-white'}/></div>
                         <div className={active === "app" ? activeClassText:InactiveClassText}>Dashboard</div>
                     </div>
                 </Link>
                    
                 </div>
                 
                 <div className='w-[100%] h-10 mb-2 pl-5 cursor-pointer' onClick={()=>setMobileSideBar(false)}>
                     <Link to="user_management">
                         <div className={active === "user_management" ? activeClass:InactiveClass}>
                             <div className='h-[100%] w-6 flex items-center'><UserOutlined  className={active === "user_management"?'text-smsgreen text-xs':'text-white text-xs'}/></div>
                             <div className={active === "user_management" ? activeClassText:InactiveClassText}>User management</div>
                         </div>
                     </Link>
                 </div>
                 
                
                 
                 <div className='w-[100%] h-10 mb-5 pl-5 cursor-pointer' onClick={()=>setMobileSideBar(false)}>
                     <Link to="settings">
                         <div className={active === "settings" ? activeClass:InactiveClass}>
                             <div className='h-[100%] w-6 flex items-center'><SettingOutlined  className={active === "settings"?'text-smsgreen':'text-white'}/></div>
                             <div className={active === "settings" ? activeClassText:InactiveClassText}>Settings</div>
                         </div>
                     </Link>
                     
                 </div>
                
              
 
            </div>
 
            <div className='mt-10 w-[95%] pl-5'>
                     <hr/>
                     <Link to='/'>
                         <div className='mt-5 text-xs text-red-400 font-poppins'>
                             <LogoutOutlined className='text-red-400'/> Logout    
                         </div>
                     </Link>
                     
            </div>
               
        </div>
        </div>
       
    )
}

export default Index