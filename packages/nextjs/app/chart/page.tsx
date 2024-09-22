// app/page.tsx
import { StrategyLineChart } from "./_components/StrategyLineChart";

async function getData(strategyPublicId: string) {
  const payload = {
    strategyPublicId,
    amount: 1000,
    leverage: 1,
    startDate: "2022-09-12T21:00:00.001Z",
    endDate: "2024-09-13T20:59:59.999Z",
    strategySignalsOnly: false,
  };

  // const res = await fetch(`/api/calculatePerformance`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(payload),
  // });
  console.log("sending to post");
  const res = await fetch("http://localhost:3001/api/chart", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res) {
    console.log("res worked!");
  }

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const json = await res.json();

  console.log(json);
  return json;
}

export default async function Home() {
  const strategyPublicId = "elevate-solana"; // TODO This could come from user input, URL params, etc.
  const data = await getData(strategyPublicId); // Fetch the data on the server side
  const { timestamps, usdValues } = data;

  return (
    <div>
      <h1>Strategy Performance</h1>
      <StrategyLineChart timestamps={timestamps} usdValues={usdValues} />
    </div>
  );
}

// export const Home: any = () => {
//   // Example data: Replace with your actual timestamps and USD values.
//   const timestamps: string[] = [
//     "2024-09-01T12:00:00Z",
//     "2024-09-02T12:00:00Z",
//     "2024-09-03T12:00:00Z",
//     "2024-09-04T12:00:00Z",
//   ];

//   const usdValues: number[] = [10000, 10500, 10300, 10750];

//   return (
//     <div>
//       <h1>Strategy Performance</h1>
//       <StrategyLineChart timestamps={timestamps} usdValues={usdValues} />
//     </div>
//   );
// };

// export default Home;
