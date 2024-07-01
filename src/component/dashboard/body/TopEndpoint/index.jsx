const Index = ()=>{
    return (
        <div className="w-full h-full">
            <div className='flex flex-row justify-between w-full mt-3 p-4'>
                        <div className='text-xs font-poppins sm:max-2xl:font-poppins text-xs'>Employees</div>
                        <div className='font-poppins text-xs font-medium cursor-pointer' style={{color:'#07CABC'}} onClick={()=>navigate('/dashboard/user_management')}>Manage Employees</div>
            </div>
            <div className='w-full'>
                    
            </div>
        </div>
    )
}

export default Index