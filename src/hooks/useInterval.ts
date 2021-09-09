import {useEffect, useRef} from "react";

export const UseInterval = (callback: any, delay: number | null) => {
  const savedCallback = useRef();

  function tick() {
    const fn = savedCallback.current as any;
    fn();
  }

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    tick();
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
