"use client";
import React from "react";
import Work from "../../components/Zelt/Work";
import Detail from "../../components/Zelt/Detail";
import Work2 from "../../components/aunest/Work2";
import Details2 from "../../components/aunest/Details2";
import Work3 from "../../components/visaco/Work3";
import Details3 from "../../components/visaco/Details3";

function Project() {
  return (
    <div div className="h-full w-full space-y-8">
      <Work />
      <Detail />
      <Work2 />
      <Details2 />
      <Work3 />
      <Details3 />
    </div>
  );
}

export default Project;
