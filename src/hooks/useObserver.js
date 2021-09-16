import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    var cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        // проверка на видимость элемента div.lastElement, который просто невидимка
        // console.log("DIV в зоне видимости");
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
  // для понимания этого useEffect'а смотреть видео Ulbi React - https://www.youtube.com/watch?v=GNrdg3PzpJQ&t=4857s 2.51 минута
};

// Intersection Observer API - для постоянной подгрузки
