"use client";

import { Button } from "flowbite-react";
import React, { useState } from "react";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="container component">
        <Button gradientDuoTone="pinkToOrange" color="blue" className="px-5">
          Explore!
        </Button>
      </div>
    </>
  );
};

export default HomePage;
