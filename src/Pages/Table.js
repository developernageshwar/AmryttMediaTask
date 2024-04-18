import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  //to get the Data
  const GetData = () => {
    axios
      .get("https://6620be923bf790e070b07ff6.mockapi.io/landingPage")
      .then((res) => {
        setTableData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  //delete Data
  const deleteData = (id) => {
    GetData();
    axios
      .delete(`https://6620be923bf790e070b07ff6.mockapi.io/landingPage/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

//    Update the Profile 
  const Update =(id)=>{
    console.log(id)
    
    axios.put(`https://6620be923bf790e070b07ff6.mockapi.io/landingPage/${id}`).then((res)=>{
        console.log(res)
    }).catch((error)=>{
        console.log(error)
    })
  }

  return (
    <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Hobbies
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Country
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            State
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            City
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {tableData.map((item) => {
          return (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://i.pravatar.cc/150?img=1"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {item.name} {item.lastName}
                    </div>
                    <div className="text-sm text-gray-500">{`age : ${item.age}`}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.hobbies}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.country}
                </td>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.state}F
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.city}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <button onClick={()=>Update(item.id)} className="ml-2 text-blue-600 hover:text-red-900 ">
                  Edit
                </button>

                <button
                  onClick={() => deleteData(item.id)}
                  className="ml-2 text-red-600 hover:text-red-900 "
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
