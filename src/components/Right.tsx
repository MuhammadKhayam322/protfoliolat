'use client';

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export default function Right() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-400/[0.1] dark:bg-white dark:border-white/[0.2] border-white/[0.1] w-auto sm:w-[16rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="100" className="w-full mt-2">
          <Image
            src="/assets/hero/khan.jpeg"  // Correct path without /public
            alt="Your Image Description"
            height={1000}                   // Use integer values for height
            width={1000}                    // Use integer values for width
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
