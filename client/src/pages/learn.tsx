import React from 'react';

import { MatrixBackground } from "@/components/MatrixBackground";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


const learn = () => {
  return (
    <h1 className="text-center text-[40px] md:text-[72px] font-bold my-10 text-pink-500">
        90 days of cybersecurity
      </h1
  );  
};

export default learn;
