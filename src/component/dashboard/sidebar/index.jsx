import { HomeOutlined, LogoutOutlined, SettingOutlined, UserOutlined,MenuOutlined,CustomerServiceOutlined,BookOutlined,CreditCardOutlined } from '@ant-design/icons'
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

    const activeClass = 'flex flex-row h-full items-center border-r-4 border-smsgreen rounded-md'
    const InactiveClass = 'flex flex-row h-full items-center'
    const activeClassText = 'font-poppins h-[100%] text-smsgreen flex items-center mt-1 text-xs'
    const InactiveClassText = 'font-poppins h-[100%] text-white flex items-center mt-1 text-xs'
    const logout = 'font-poppins h-[100%] text-red-400 flex items-center mt-1 text-xs'
    return (
        <>
            <div className='w-10 pt-4 absolute sm:max-4xl:hidden'> 
            <MenuOutlined  className="m-2 text-2xl sm:max-4xl:hidden" onClick={()=>setMobileSideBar(true)} />
            </div>
         <div className="hidden sm:max-4xl:block sm:max-4xl:w-[100%] sm:max-4xl:h-screen sm:max-4xl:bg-lightBlack">
              <div className='w-full flex flex-row justify-center items-center pt-10'>
                  
                 <div className='w-[80%] h-10 mb-5'>
                    <img src={LogoSidebar}/>
                </div>
              </div>
              
              <div className='mt-10 w-[95%] pl-5'>
                    <hr/>
              </div>
            <div className='w-full  h-[50%] flex flex-col items-center justify-start mt-10'>
                
                <div className='w-[80%] h-10  pl-0 cursor-pointer'>
                <Link to="app">
                    <div className={active === "app" ? activeClass:InactiveClass}>
                        <div className='h-[100%] w-6 flex items-center'><HomeOutlined className={active === "app"?'text-smsgreen':'text-white'}/></div>
                        <div className={active === "app" ? activeClassText:InactiveClassText}>Home</div>
                    </div>
                </Link>
                   
                </div>
                
                <div className='w-[80%] h-10  pl-0 cursor-pointer'>
                    <Link to="apikey">
                        <div className={active === "apikey" ? activeClass:InactiveClass}>
                            <div className='h-[100%] w-6 flex items-center'><UserOutlined  className={active === "apikey"?'text-smsgreen':'text-white'}/></div>
                            <div className={active === "apikey" ? activeClassText:InactiveClassText}>API Keys</div>
                        </div>
                    </Link>
                </div>
                
               
                
                <div className='w-[80%] h-10  pl-0 cursor-pointer'>
                    <Link to="app">
                        <div className={active === "settings" ? activeClass:InactiveClass}>
                            <div className='h-[100%] w-6 flex items-center'><BookOutlined  className={active === "settings"?'text-smsgreen':'text-white'}/></div>
                            <div className={active === "settings" ? activeClassText:InactiveClassText}>Documentation</div>
                        </div>
                    </Link>
                    
                </div>
                <div className='w-[80%] h-10  pl-0 cursor-pointer'>
                    <Link to="app">
                        <div className={active === "settings" ? activeClass:InactiveClass}>
                            <div className='h-[100%] w-6 flex items-center'><CreditCardOutlined  className={active === "settings"?'text-smsgreen':'text-white'}/></div>
                            <div className={active === "settings" ? activeClassText:InactiveClassText}>API Credits</div>
                        </div>
                    </Link>
                    
                </div>

               
             

            </div>

            <div className='mt-[-10] w-[80%] pl-5'>
                  
                    
                <div className='w-[80%] h-10 pl-0 cursor-pointer'>
                        <Link to="app">
                            <div className={active === "settings" ? activeClass:InactiveClass}>
                                <div className='h-[100%] w-6 flex items-center'><CustomerServiceOutlined  className={active === "settings"?'text-smsgreen':'text-white'}/></div>
                                <div className={active === "settings" ? activeClassText:InactiveClassText}>Support</div>
                            </div>
                        </Link>
                        
                </div>
                <div className='w-[80%] h-10  pl-0 cursor-pointer'>
                    <Link to="app">
                        <div className={active === "settings" ? activeClass:InactiveClass}>
                            <div className='h-[100%] w-6 flex items-center'><SettingOutlined  className={active === "settings"?'text-smsgreen':'text-white'}/></div>
                            <div className={active === "settings" ? activeClassText:InactiveClassText}>Settings</div>
                        </div>
                    </Link>
                    
                </div>
                    
                <hr/>
                <div className='w-[80%] h-10  pl-0 cursor-pointer'>
                    <Link to="app">
                        <div className={active === "settings" ? activeClass:InactiveClass}>
                            <div className='h-[100%] w-6 flex items-center'><LogoutOutlined  className="text-red-400"/></div>
                            <div className={logout}>Logout</div>
                        </div>
                    </Link>
                    
                </div>
                {/* <Link to='/'>
                        <div className='mt-5 mb-5 text-xs text-red-400 font-poppins'>
                            <LogoutOutlined className='text-red-400'/> Logout    
                        </div>
                </Link> */}
                    
              </div>
              
              
        </div>
        </>
       
    )
}

export default Index