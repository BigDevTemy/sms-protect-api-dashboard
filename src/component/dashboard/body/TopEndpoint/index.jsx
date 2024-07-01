import { Badge, Button } from 'antd'
import {EyeOutlined} from '@ant-design/icons'
import data from './data'
const Index = ()=>{
    const renderRows = ()=>{
        return data && data?.length > 0 && data.map((d,index)=>{
            return  <div className='w-full mb-2 h-10  flex flex-row items-center text-sm text-black bg-white p-2'>
                        <div className='flex-1 text-smmx'>{d.keyName}</div>
                        <div className='flex-1 text-smmx'>{d.Apikey}</div>
                        <div className='flex-1 text-smmx'><Button type="dashed" color={d.Status == "Active"?'#07CABC':'yellow'}>{d.Status}</Button></div>
                        <div className='flex-1 text-smmx'>{d.createdDate}</div>
                        <div className='flex-1 text-smmx'>{d.lastUsed}</div>
                        <div className='flex-1 cursor-pointer'><EyeOutlined /></div>
                    </div>
            
        })
    }
    return (
        <div className="w-full h-full mt-10" style={{backgroundColor:"#F0F3F6"}}>
            <div className='flex flex-row justify-between w-full mt-3 p-4'>
                        <div className='text-xs font-poppins sm:max-2xl:text-lg font-poppins font-semibold text-black'>Top Endpoints</div>
                        
            </div>
            <div className='w-full'>
                    <div className='w-full mb-2 h-10 bg-red-100 flex flex-row items-center text-sm text-white bg-black p-2'>
                        <div className='flex-1'>Key name</div>
                        <div className='flex-1'>Api Key</div>
                        <div className='flex-1'>Status</div>
                        <div className='flex-1'>Creation Date</div>
                        <div className='flex-1'>Last Used</div>
                        <div className='flex-1'>Action</div>
                    </div>
                    <div>
                        {renderRows()}

                    </div>
            </div>
        </div>
    )
}

export default Index