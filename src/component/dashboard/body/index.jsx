import { MessageOutlined, SecurityScanOutlined, UserOutlined, UserSwitchOutlined } from '@ant-design/icons'

import { Table } from 'antd'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import Sidebar from '../mobilesidebar'
import { message } from 'antd'
import Analysis from './Analysis'
import Chart from './Chart'
import TopEndPoint from './TopEndpoint'

const Index = ()=>{
    
  
   
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [allSms,setAllSms] =useState(0)
    const [allSpam,setAllSpam] =useState(0)
    const [allFradulentLink,setAllFradulentLink] =useState(0)
    const [activeEmployee,setActiveEmployee] = useState(0);
    const [non_activeEmployee,setNonActiveEmployee] = useState(0);
    const [whatsappSpam,setWhatsappSpam] = useState(0)
    


    const navigate = useNavigate();

    return (
        <div className="w-full h-screen overflow-scroll">
            {/* {mobilesidebar && <Sidebar/>} */}
           
            <div className='w-full h-full p-2'>
                <div className='p-4'><h1 className="font-poppins text-2xl font-semibold mt-2">Welcome, Temiloluwa</h1></div>
                   <div id="section1" className='w-full h-[85%] flex flex-col justify-between items-center p-2 mt-4 sm:max-4xl:w-full  sm:max-4xl:h-auto sm:max-4xl:flex sm:max-4xl:flex-row sm:max-4xl:justify-start sm:max-4xl:items-center mt-4 sm:max-4xl:gap-4 sm:max-4xl:flex-wrap'>
                        <Analysis/>
                   </div>
                   {/* w-full h-[100%] flex flex-col items-center */}
                   <div id="section2"  className='hidden sm:max-4xl:w-[100%] sm:max-4xl:h-[55%] sm:max-4xl:flex sm:max-4xl:flex-row sm:max-4xl:items-center sm:max-4xl:mt-5' >
                       <Chart/>
                   </div>
                   <div id="section3"  className='w-full h-auto flex flex-col bg-white rounded-xl mt-5 shadow-lg' >
                       <TopEndPoint/>
                   </div>
            </div>

            
                
        </div>
    )
}

export default Index