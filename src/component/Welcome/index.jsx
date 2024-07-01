import { Button } from "antd"
import { Link } from "react-router-dom"

const Index = ()=>{
    return (
        <div className="w-full h-full flex justify-center items-center">
                <Link to="/dashboard/app">
                    <Button type="dashed" color="#07CABC"  className="bg-green-300">Welcome Home!</Button>
                </Link>
        </div>
    )
}

export default Index