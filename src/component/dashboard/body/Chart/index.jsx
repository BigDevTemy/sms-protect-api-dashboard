import { Chart } from "react-google-charts";
const Index = ()=>{
   

    //   const dataLine = [
    //     [
    //       { type: "number", label: "x" },
    //       { type: "number", label: "values" },
    //       { id: "i0", type: "number", role: "interval" },
    //       { id: "i1", type: "number", role: "interval" },
    //       { id: "i2", type: "number", role: "interval" },
    //       { id: "i2", type: "number", role: "interval" },
    //       { id: "i2", type: "number", role: "interval" },
    //       { id: "i2", type: "number", role: "interval" },
    //     ],
    //     [1, 100, 90, 110, 85, 96, 104, 120],
    //     [2, 120, 95, 130, 90, 113, 124, 140],
    //     [3, 130, 105, 140, 100, 117, 133, 139],
    //     [4, 90, 85, 95, 85, 88, 92, 95],
    //     [5, 70, 74, 63, 67, 69, 70, 72],
    //     [6, 30, 39, 22, 21, 28, 34, 40],
    //     [7, 80, 77, 83, 70, 77, 85, 90],
    //     [8, 100, 90, 110, 85, 95, 102, 110],
    //   ];
      
    //   const options = {
    //     title: "Sticks, default",
    //     curveType: "function",
    //     series: [{ color: "#E7711B" }],
    //     intervals: { style: "area" },
    //     legend: "none",
    //      backgroundColor: '#F0F3F6'
    //   };
    const dataLine = [
        ["Year", "Request"],
        ["Mon", 1000],
        ["Tue", 1170],
        ["Wed", 660],
        ["Thur", 1030],
        ["Fri", 1030],
        ["Sat", 1030],
        ["Sun", 1030],
      ];
      
    const options = {
        title: "API Request Analytics",
        curveType: "function",
        legend: { position: "bottom" },
        backgroundColor:"#F0F3F6",
        colors: ["#07CABC"]
      };
      

 const data = [
    ["Task", "Hours per Day"],
    ["Successful Api Requests", 11],
    ["Failed Api Calls", 2],
  
  ];
  
   const optionsII = {
    title: "API Usage Status",
    is3D: true,
     backgroundColor: '#F0F3F6',
     slices: {
        0: { color: '#4DA93E' }, // Successful Api Requests
        1: { color: '#EB942E' }, // Failed Api Calls
      },
  };
    return (
        <div className="w-full mt-12 flex flex-row gap-4">
                <div className="w-[50%]">
                    <div className="flex justify-between p-2" style={{backgroundColor:"#F0F3F6"}}>
                        <div className="text-md font-poppins font-semibold text-black">API Request</div>
                        <div className="form-group">
                           <select className="form-control text-sm font-poppins" style={{backgroundColor:"#F0F3F6"}}><option className="text-sm">7days</option></select>
                        </div>
                    </div>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="300px"
                        data={dataLine}
                        options={options}
                        />
                
                </div>
                <div className="w-[50%]">
                    <div className="flex justify-between p-2" style={{backgroundColor:"#F0F3F6"}}>
                        <div className="text-md font-poppins font-semibold text-black">API Usage Status</div>
                        <div className="form-group">
                           <select className="form-control text-sm font-poppins" style={{backgroundColor:"#F0F3F6"}}><option className="text-sm">7days</option></select>
                        </div>
                    </div>
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={optionsII}
                    width={"100%"}
                    height={"300px"}
                    />
                
                </div>
        </div>
    )
}

export default Index