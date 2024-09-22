// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const url = "https://product-gateway.astrabit.io/product/strategies?limit=5000&page=1";

//     if (req.method === "GET") {
//         try {
//             const response = await fetch(url, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });

//             const json = await response.json();
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             const data = await response.json();
//             console.log("Strategies data:", data);
//         } catch (error) {
//             console.error("Error fetching strategies:", error);
//         }
//     } else {
//         res.status(405).json({ message: "Method Not Allowed" });
//     }

//     if (req.method === "POST") {
//         throw new Error("Method Not Allowed");
//     }
// }
