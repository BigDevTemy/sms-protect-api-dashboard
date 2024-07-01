import { PlusOutlined } from "@ant-design/icons"
import { Button, Divider, Input ,Image} from "antd"
import { useSelector,useDispatch } from "react-redux"
import DP from '../../../../src/assets/dp.png'
import ArrowDown from '../../../../src/assets/arrow-down.png'
const Index = ()=>{
  

   
    return (
        <>
            <div className="w-full h-full  flex flex-col justify-center sm:max-2xl:w-full sm:max-2xl:h-full sm:max-2xl:flex sm:max-2xl:flex-row sm:max-2xl:items-center sm:max-2xl:justify-between p-2" style={{backgroundColor:'#f9f9f9'}}>
                
                <div className="ml-6 sm:max-2xl:mr-0">
                    <div className="font-poppins flex flex-row items-center text-xs font-medium sm:max-2xl:text-sm" style={{color:'#222'}}>
                        <div className="font-semibold text-xl">Dashboard</div>
                    </div>
                   
                </div>
                <div className="w-full flex justify-center  mt-2 sm:max-2xl:w-[40%] sm:max-2xl:flex sm:max-2xl:justify-between">
                
                    <div className="font-poppins text-sm flex justify-center items-center gap-1">You have <span className="text-yellow-400">1000</span> Credits left <Button className="bg-smsgreen text-white"><PlusOutlined /></Button> </div>
                    <div className="flex gap-1 items-center">
                        <div>
                            <Image src={DP} alt="DP"/>
                        
                        </div>
                        <div>
                            <div className="text-sm">John Doe</div>
                            <div className="text-smm">johndoe@gmail.com</div>
                        </div>
                        <div>
                        <Image src={ArrowDown}/>
                        </div>
                    </div>
                </div>
               
        </div>
        <Divider/>
        </>
        
    )
}

export default Index