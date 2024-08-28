import React from "react";

function Navbar() {
  return (
    <div className="flex  w-full items-center justify-center fixed z-50  right-0 p-[.5%]  ">
      <div className="flex h-[50px] w-full justify-between items-center ">
        <button>[gmail]</button>
        <button>[instagram]</button>
        <button>[linkdin]</button>
      </div>
    </div>
  );
}

export default Navbar;
