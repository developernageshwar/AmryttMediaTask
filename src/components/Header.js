import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Appstate } from "../App";

const Header = () => {
  const useAppstate = useContext(Appstate);

  return (
    <div className="sticky z-10 header top-0 text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          Amrytt<span className="text-white">Media</span>
        </span>
      </Link>
      <div className="flex">
        {useAppstate.login ? (
          <>
            <Link to={"/profile"}>
              <h1 className="text-lg cursor-pointer flex items-center">
                <Button>
                  <AddIcon className="mr-1" color="secondary" />
                  <span className="text-white">Create Profile</span>
                </Button>
              </h1>
            </Link>
            <Link to={"/"}>
              <h1 className="text-lg bg-green-500 cursor-pointer flex items-center mr-8 rounded-sm">
                <Button>
                  <span className="text-white font-medium capitalize">
                    Logout
                  </span>
                </Button>
              </h1>
            </Link>
          </>
        ) :  (
          <>
            <Link to={"/login"}>
              <h1 className="text-lg bg-green-500 cursor-pointer flex items-center mr-8 rounded-sm">
                <Button>
                  <span className="text-white font-medium capitalize">
                    Login
                  </span>
                </Button>
              </h1>
            </Link>

            <Link to={"/signup"}>
              <h1 className="text-lg bg-blue-500 cursor-pointer flex items-center rounded-sm">
                <Button>
                  <span className="text-white font-medium capitalize">
                    SignUp
                  </span>
                </Button>
              </h1>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
