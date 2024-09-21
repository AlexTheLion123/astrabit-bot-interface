import { StrategyLineChart } from "./_components/StrategyLineChart";

export const Home: any = () => {
  // Example data: Replace with your actual timestamps and USD values.
  const timestamps: string[] = [
    "2024-09-01T12:00:00Z",
    "2024-09-02T12:00:00Z",
    "2024-09-03T12:00:00Z",
    "2024-09-04T12:00:00Z",
  ];

  const usdValues: number[] = [10000, 10500, 10300, 10750];

  return (
    <div>
      <h1>Strategy Performance</h1>
      <StrategyLineChart timestamps={timestamps} usdValues={usdValues} />
    </div>
  );
};

export default Home;
