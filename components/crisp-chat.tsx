'use client';

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f3b521e9-9ca0-4dae-b621-71c25dbbaa7f");
  }, []);


  return null;
};

export default CrispChat;