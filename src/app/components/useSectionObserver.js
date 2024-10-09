import { useEffect } from "react";
import useCursorStore from "../store/cursorStore";

const useSectionObserver = (ref) => {
  const { setHoverState } = useCursorStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHoverState(true);
        } else {
          setHoverState(false);
        }
      },
      { threshold: 0.5 } // Adjust as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, setHoverState]);
};

export default useSectionObserver;
