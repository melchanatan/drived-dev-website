"use client";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4800);
  });
  if (loading) return <Loading />;
};

export default Loader;
