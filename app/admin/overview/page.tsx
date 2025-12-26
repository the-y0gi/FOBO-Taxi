"use client";

import { motion, type Variants } from "framer-motion";
import { dailyStats } from "@/lib/dummy/stats";
import { StatCard } from "@/components/cards/stat-card";
import { RidesAreaChart } from "@/components/charts/line-chart";
import { RevenueBarChart } from "@/components/charts/bar-chart";
import { RecentTripsTable } from "./recent-trips";
import { Activity, TrendingUp } from "lucide-react";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 50 } },
};

export default function OverviewPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Dashboard
        </h1>
        <p className="text-slate-500">
          Overview of your ride metrics and revenue.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {dailyStats.map((stat, index) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            // index={index}
          />
        ))}
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-600" />
              Rides Per Hour
            </h3>
          </div>
          <div className="h-[300px] w-full">
            <RidesAreaChart />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white p-6 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              Revenue vs Refunds
            </h3>
          </div>
          <div className="h-[300px] w-full">
            <RevenueBarChart />
          </div>
        </motion.div>
      </div>

      {/* Recent Trips */}
      <motion.div variants={itemVariants}>
        <RecentTripsTable />
      </motion.div>
    </motion.div>
  );
}

//api integrate code
// import { StatCard } from "@/components/cards/stat-card";
// import { RidesLineChart } from "@/components/charts/line-chart";
// import { RevenueBarChart } from "@/components/charts/bar-chart";
// import { RecentTripsTable } from "./recent-trips";
// import { adminService } from "@/api/adminService";

// export default async function OverviewPage() {
//   // Parallel data fetching
//   const [statsResponse, ridesResponse, revenueResponse, tripsResponse] = await Promise.all([
//     adminService.dashboard.getStats(),
//     adminService.dashboard.getRidesPerHour(),
//     adminService.dashboard.getRevenueMetrics(),
//     adminService.dashboard.getRecentTrips()
//   ]);

//   // Extract data
//   const stats = statsResponse.data.data;
//   const ridesChartData = ridesResponse.data.data;
//   const revenueChartData = revenueResponse.data.data;
//   const recentTrips = tripsResponse.data.data;

//   // Format stats exactly like your dummy data
//   const dailyStats = [
//     {
//       label: "Total Rides Today",
//       value: stats?.totalRidesToday || 0
//     },
//     {
//       label: "Completed Rides",
//       value: stats?.completedRidesToday || 0
//     },
//     {
//       label: "Cancelled Rides",
//       value: stats?.cancelledRidesToday || 0
//     },
//     {
//       label: "Active Drivers",
//       value: stats?.activeDriversCount || 0
//     },
//     {
//       label: "Offline Drivers",
//       value: stats?.offlineDriversCount || 0
//     },
//     {
//       label: "Total Revenue",
//       value: `₹ ${(stats?.todayRevenue || 0).toLocaleString('en-IN')}`
//     },
//     {
//       label: "Refund Requests",
//       value: stats?.refundRequestsCount || 0
//     }
//   ];

//   return (
//     <div className="space-y-8">
//       {/* Stats Cards - Same as your existing structure */}
//       <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {dailyStats.slice(0, 4).map((stat) => (
//           <StatCard key={stat.label} label={stat.label} value={stat.value} />
//         ))}
//       </div>

//       {/* Mobile Stats View */}
//       <div className="sm:hidden overflow-x-auto pb-2">
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4 min-w-max text-center">
//           {dailyStats.map((stat) => (
//             <div key={stat.label} className="w-38 sm:w-auto">
//               <StatCard label={stat.label} value={stat.value} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Additional Stats Row for Desktop */}
//       <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-4">
//         {dailyStats.slice(4).map((stat) => (
//           <StatCard key={stat.label} label={stat.label} value={stat.value} />
//         ))}
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white p-4 border rounded-lg shadow-sm">
//           <h3 className="text-lg font-semibold mb-4">Rides Per Hour</h3>
//           <RidesLineChart data={ridesChartData} />
//         </div>

//         <div className="bg-white p-4 border rounded-lg shadow-sm">
//           <h3 className="text-lg font-semibold mb-4">Revenue vs Refunds</h3>
//           <RevenueBarChart data={revenueChartData} />
//         </div>
//       </div>

//       {/* Recent Trips Table */}
//       <RecentTripsTable trips={recentTrips} />
//     </div>
//   );
// }
