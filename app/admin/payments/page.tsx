"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PaymentsView from "./payments-view";
import RefundsView from "./refunds-view";
import AnalyticsView from "./analytics-view";

export default function PaymentsPage() {
  return (
    <Tabs defaultValue="payments-analytics" className="w-full">
      <div className="space-y-6  bg-background min-h-screen">

       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Payments & Refunds
          </h1>

          {/* SINGLE TABS LIST */}
          <TabsList className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden ">
            <TabsTrigger
              value="payments-analytics"
              className="
                px-4  text-sm font-medium transition rounded-lg
                data-[state=active]:bg-primary 
                data-[state=active]:text-white
              "
            >
              Payments & Analytics
            </TabsTrigger>

            <TabsTrigger
              value="refunds"
              className="
                px-4 py-2 text-sm font-medium transition rounded-lg
                data-[state=active]:bg-primary 
                data-[state=active]:text-white
              "
            >
              Refund Center
            </TabsTrigger>
          </TabsList>
        </div>


        {/* Payments + Analytics */}
        <TabsContent value="payments-analytics" className="space-y-6">

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-3xl font-bold text-primary mt-1">₹12,450</p>
            </div>

            <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500">Successful Payments</p>
              <p className="text-3xl font-bold text-primary mt-1">89</p>
            </div>

            <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500">Pending Refunds</p>
              <p className="text-3xl font-bold text-yellow-600 mt-1">3</p>
            </div>
          </div>

          <AnalyticsView />
          <PaymentsView />
        </TabsContent>

        {/* Refunds */}
        <TabsContent value="refunds">
          <RefundsView />
        </TabsContent>

      </div>
    </Tabs>
  );
}

//api integrate

// "use client";

// import { useState, useEffect } from "react";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import PaymentsView from "./payments-view";
// import RefundsView from "./refunds-view";
// import AnalyticsView from "./analytics-view";
// import { adminService } from "@/api/adminService";

// export default function PaymentsPage() {
//   const [stats, setStats] = useState({
//     totalRevenue: 0,
//     successfulPayments: 0,
//     pendingRefunds: 0
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchPaymentStats();
//   }, []);

//   const fetchPaymentStats = async () => {
//     try {
//       const response = await adminService.payments.getStats();
//       setStats(response.data.data);
//     } catch (error) {
//       console.error("Error fetching payment stats:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Tabs defaultValue="payments-analytics" className="w-full">
//       <div className="space-y-6 bg-background min-h-screen p-4">

//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//             Payments & Refunds
//           </h1>

//           {/* SINGLE TABS LIST */}
//           <TabsList className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
//             <TabsTrigger
//               value="payments-analytics"
//               className="px-4 text-sm font-medium transition rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
//             >
//               Payments & Analytics
//             </TabsTrigger>

//             <TabsTrigger
//               value="refunds"
//               className="px-4 py-2 text-sm font-medium transition rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
//             >
//               Refund Center
//             </TabsTrigger>
//           </TabsList>
//         </div>

//         {/* Payments + Analytics */}
//         <TabsContent value="payments-analytics" className="space-y-6">

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition">
//               <p className="text-sm text-gray-500">Total Revenue</p>
//               {loading ? (
//                 <div className="animate-pulse h-8 bg-gray-200 rounded mt-1"></div>
//               ) : (
//                 <p className="text-3xl font-bold text-primary mt-1">₹{stats.totalRevenue.toLocaleString()}</p>
//               )}
//             </div>

//             <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition">
//               <p className="text-sm text-gray-500">Successful Payments</p>
//               {loading ? (
//                 <div className="animate-pulse h-8 bg-gray-200 rounded mt-1"></div>
//               ) : (
//                 <p className="text-3xl font-bold text-primary mt-1">{stats.successfulPayments}</p>
//               )}
//             </div>

//             <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition">
//               <p className="text-sm text-gray-500">Pending Refunds</p>
//               {loading ? (
//                 <div className="animate-pulse h-8 bg-gray-200 rounded mt-1"></div>
//               ) : (
//                 <p className="text-3xl font-bold text-yellow-600 mt-1">{stats.pendingRefunds}</p>
//               )}
//             </div>
//           </div>

//           <AnalyticsView />
//           <PaymentsView />
//         </TabsContent>

//         {/* Refunds */}
//         <TabsContent value="refunds">
//           <RefundsView />
//         </TabsContent>

//       </div>
//     </Tabs>
//   );
// }