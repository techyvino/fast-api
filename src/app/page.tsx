"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const [result, setResult] = useState<{
    result: string[];
    duration: number;
  }>({
    result: [],
    duration: 0,
  });

  console.log("result:", result);

  useEffect(() => {
    const fetchData = async () => {
      if (!value) return setResult({ result: [], duration: 0 });
      const res = await fetch("/api/search?q=" + value);
      console.log("res:", res);
    };

    fetchData();
  }, [value]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1 className="text-4xl text-center">Search</h1>
        <input
          type="text"
          className="text-2xl rounded-lg p-2"
          name="q"
          id="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </main>
  );
}
