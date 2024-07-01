import { Button ,Input, Table} from "antd"
import { PlusOutlined,SearchOutlined,EyeOutlined} from '@ant-design/icons'
import { useState } from "react"
const Index = ()=>{

    const rowSelection =()=> {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    }
    const [selectionType, setSelectionType] = useState('checkbox');
    const columns = [
        {
            title: 'SN',
            dataIndex: '',
            render:(text,record,index)=>{
               
                return index + 1
            }
          },
        {
          title: 'Key Name',
          dataIndex: 'keyname',
          key: 'name',
        },
        {
          title: 'Api Key',
          dataIndex: 'apikey',
          key: 'age',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'address',
        },
        {
            title: 'Creation Date',
            dataIndex: 'createdDate',
            key: 'address',
          },
          {
            title: 'Last Used',
            dataIndex: 'lastUsed',
            key: 'address',
          },
          {
            title: 'Action',
            dataIndex: '',
            key: '',
            render:()=>{
                return <EyeOutlined/>
            }

          },
      ];

      const dataSource = [
        {
          key: '1',
          keyname: 'Mike',
          apikey: 32,
          status: '10 Downing Street',
          createdDate: '10 Downing Street',
          lastUsed: '10 Downing Street',
          
        },
        {
          key: '2',
          keyname: 'Mike',
          apikey: 32,
          status: '10 Downing Street',
          createdDate: '10 Downing Street',
          lastUsed: '10 Downing Street',
        },
        {
            key: '3',
            keyname: 'Mike',
            apikey: 32,
            status: '10 Downing Street',
            createdDate: '10 Downing Street',
            lastUsed: '10 Downing Street',
          },
          {
            key: '4',
            keyname: 'Mike',
            apikey: 32,
            status: '10 Downing Street',
            createdDate: '10 Downing Street',
            lastUsed: '10 Downing Street',
          },
          {
            key: '5',
            keyname: 'Mike',
            apikey: 32,
            status: '10 Downing Street',
            createdDate: '10 Downing Street',
            lastUsed: '10 Downing Street',
          },
      ];
      
    return (
        <div className="w-full h-full mt-10">
            <div className="w-full flex justify-between items-center p-4">
                <div>
                    <Button type="primary" className="text-white" style={{backgroundColor:"#07CABC"}} ><PlusOutlined size={20} color="#fff"/> Generate Apikey</Button>
                </div>
                <div>
                    <div className="w-60 h-10 rounded-md flex justify-content items-center p-2">
                        <Input 
                        placeholder="Search Api Key"
                        style={{backgroundColor:"#F0F3F6"}}
                        prefix={
                            <SearchOutlined
                              style={{
                                color: 'rgba(0,0,0,.25)',
                              }}
                            />
                          }
                        
                        />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                        <Table 
                            rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                          }}
                        dataSource={dataSource} columns={columns}/>
            </div>
        </div>
    )
}

export default Index