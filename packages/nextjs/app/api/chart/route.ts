import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    name: "Bishal Shrestha",
    age: "27",
  };

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const url = "https://strategy-performance-gateway.astrabit.io/strategy-performance/calculate";

  // Make sure strategyPublicId is provided

  // const payload = {
  //     strategyPublicId: "elevate-boreas",
  //     amount: 1000,
  //     leverage: 1,
  //     startDate: "2022-09-12T21:00:00.001Z",
  //     endDate: "2024-09-13T20:59:59.999Z",
  //     strategySignalsOnly: false,
  // };

  const body = await request.json(); // Parse the incoming request body
  // const { strategyPublicId, amount, leverage, startDate, endDate, strategySignalsOnly } = body;  // Extract values

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const res = await response.json();
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
