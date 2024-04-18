import React, { useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import swal from "sweetalert";
import { Appstate } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const useAppstate = useContext(Appstate);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    img: "",
    age: "",
    hobbies: "",
    country: "",
    state: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);

  const HandleChange = async () => {
        
    setLoading(true);
    try {
      if (useAppstate.login) {
        axios.post("https://6620be923bf790e070b07ff6.mockapi.io/landingPage",form ).then((res)=>{
          console.log(res)  
        }).catch((error)=>{
          console.log(error.message)
        })

        swal({
          title: "Successfully Added",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        navigate("/dashbord");
        setForm({
          title: "",
          lastName: "",
          img: "",
          age: "",
          hobbies: "",
          country: "",
          state: "",
          city: "",
        });
      } else {
        navigate("/login");
      }
    } catch (err) {
      swal({
        title: err,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-xl font-medium title-font mb-4 text-white">
              Profile Form
            </h1>
          </div>

          {/* //First Name  */}
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* LastName  */}
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label for="lastName" className="leading-7 text-sm text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Profile Img  */}
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label for="img" className="leading-7 text-sm text-gray-300">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    id="img"
                    name="img"
                    value={form.img}
                    onChange={(e) => setForm({ ...form, img: e.target.value })}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              {/* Age  */}
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label for="age" className="leading-7 text-sm text-gray-300">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Hobies  */}
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label for="hobbies" className="leading-7 text-sm text-gray-300">
                    Hobbies
                  </label>
                  <input
                    type="text"
                    id="hobbies"
                    name="hobbies"
                    value={form.hobbies}
                    onChange={(e) =>
                      setForm({ ...form, hobbies: e.target.value })
                    }
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Country  */}
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label for="country" className="leading-7 text-sm text-gray-300">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={(e) =>
                      setForm({ ...form, country: e.target.value })
                    }
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* State  */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="state" className="leading-7 text-sm text-gray-300">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={form.state}
                    onChange={(e) =>
                      setForm({ ...form, state: e.target.value })
                    }
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* City  */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="city" className="leading-7 text-sm text-gray-300">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>


              <div className="p-2 w-full">
                <button
                  onClick={HandleChange}
                  className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
                >
                  {loading ? <TailSpin height={25} color="white" /> : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
