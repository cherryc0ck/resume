import { useEffect, useState } from "react";

export default function useScrollPercent() {
  const [scrollPercent, setScrollPercent] = useState(0);

  const updateScrollPercentage = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    const percentage = (scrollY / (fullHeight - windowHeight)) * 100;
    setScrollPercent(percentage);
  };

  useEffect(() => {
    const handleScroll = () => {
      updateScrollPercentage();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollPercent,
  };
}
