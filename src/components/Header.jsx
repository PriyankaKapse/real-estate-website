import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [pageState, setPageState] = useState("Sign In");
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setPageState("Profile")
      }
      else {
        setPageState("Sign In")
      }
    })
  }, [auth]);

  function matchPathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            className="h-5 cursor-pointer"
            src="http://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
              ${matchPathRoute("/") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                ${matchPathRoute("/offers") && "text-black border-b-red-500"}`}
                onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                ${(matchPathRoute("/sign-in") || matchPathRoute("/profile")) && "text-black border-b-red-500"}`}
                onClick={() => navigate("/profile")}
            >
              { pageState }
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
