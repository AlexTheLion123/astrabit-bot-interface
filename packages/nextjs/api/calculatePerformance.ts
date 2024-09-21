import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = "https://strategy-performance-gateway.astrabit.io/strategy-performance/calculate";

  const payload = {
    strategyPublicId: "elevate-boreas",
    amount: 1000,
    leverage: 1,
    startDate: "2022-09-12T21:00:00.001Z",
    endDate: "2024-09-13T20:59:59.999Z",
    strategySignalsOnly: false,
  };

  if (req.method === "POST") {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: "error.message " });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
