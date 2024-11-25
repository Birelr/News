import React, { useEffect, useState } from "react";

const Newlist = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/src/Components/HeroSection/news.json")
      .then((response) => response.json())
      .then((data) => {
        const lastThreeItems = data.slice(-3).reverse();
        setNews(lastThreeItems);
      });
  }, []);

  return (
    <div className="bg-slate-900 rounded-lg  m-2 ">
      <h2 className="p-4 text-4xl  text-amber-600">News</h2>
      <div className="">
        {news.map((item) => (
          <div key={item.id} className="p-4  py-5">
            <h3 className="text-2xl">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newlist;
