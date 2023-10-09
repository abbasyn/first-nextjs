"use client";

import { stringify } from "querystring";
import { useState, useEffect } from "react";

const product = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const res = await response.json();
      setData(res);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2>Client Side Data Fetching</h2>
      <ul>
        {data.map((user: any) => {
          return <p>{user.id}</p>;
        })}
      </ul>
    </div>
  );
};

export default product;
