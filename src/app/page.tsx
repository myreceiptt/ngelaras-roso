"use client";

// External libraries
import React from "react";

// Components
import FeaturedCards from "@/components/FeaturedCards";
import DynamicLoginPage from "@/components/DynamicLoginPage";

const PageOne: React.FC = () => (
  <DynamicLoginPage ContentComponent={FeaturedCards} />
);

export default PageOne;
