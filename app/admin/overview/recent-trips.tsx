"use client";

import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { recentTrips } from "@/lib/dummy/trips";
import { ArrowRight, Clock, User, MapPin } from "lucide-react";

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    completed: "bg-emerald-50 text-emerald-700 border-emerald-100",
    cancelled: "bg-red-50 text-red-700 border-red-100",
    pending: "bg-amber-50 text-amber-700 border-amber-100",
  };

  const dotStyles = {
    completed: "bg-emerald-500",
    cancelled: "bg-red-500",
    pending: "bg-amber-500",
  };

  const key = (status.toLowerCase() as keyof typeof styles) || "pending";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[key]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[key]}`} />
      <span className="capitalize">{status}</span>
    </span>
  );
};

export function RecentTripsTable() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Recent Trips</h3>
          <p className="text-sm text-slate-500">Manage and view your latest ride data.</p>
        </div>
        <button className="group flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
          View All 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="border-b border-slate-100">
              <TableHead className="w-[100px] font-semibold text-slate-600">Trip ID</TableHead>
              <TableHead className="font-semibold text-slate-600">User</TableHead>
              <TableHead className="font-semibold text-slate-600">Driver</TableHead>
              <TableHead className="font-semibold text-slate-600">Amount</TableHead>
              <TableHead className="font-semibold text-slate-600">Status</TableHead>
              <TableHead className="font-semibold text-slate-600 text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTrips.map((trip, index) => (
              <motion.tr
                key={trip.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
              >
                <TableCell className="font-mono text-xs font-medium text-slate-500">
                  #{trip.id}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">{trip.user}</span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">{trip.driver}</TableCell>
                <TableCell className="font-semibold text-slate-900">{trip.amount}</TableCell>
                <TableCell>
                  <StatusBadge status={trip.status} />
                </TableCell>
                <TableCell className="text-right text-slate-500 text-sm">
                    <div className="flex items-center justify-end gap-2">
                        <Clock className="w-3 h-3" />
                        {trip.date}
                    </div>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards*/}
      <div className="md:hidden p-4 space-y-4 bg-slate-50/50">
        {recentTrips.map((trip, index) => (
          <motion.div
            key={trip.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-mono text-slate-400">#{trip.id}</span>
                <h4 className="font-semibold text-slate-900">{trip.user}</h4>
              </div>
              <StatusBadge status={trip.status} />
            </div>

            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <div>
                <p className="text-xs text-slate-500 mb-1">Driver</p>
                <p className="text-slate-700 font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {trip.driver}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500 mb-1">Amount</p>
                <p className="text-emerald-600 font-bold">{trip.amount}</p>
              </div>
              <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between text-slate-400 text-xs">
                 <span>Trip Date</span>
                 <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {trip.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


// //api integrate code
// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// export function RecentTripsTable({ trips = [] }) {
//   return (
//     <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-soft overflow-hidden">
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
//         <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Recent Trips</h3>
//         <div className="flex items-center gap-2">
//           <span className="text-sm text-muted-dark">Last 10 trips</span>
//           <span className="px-3 py-1 bg-primary-50 text-primary-dark rounded-full text-xs font-medium">
//             Live
//           </span>
//         </div>
//       </div>

//       {/* Mobile Cards View */}
//       <div className="block md:hidden space-y-4">
//         {trips.map((trip, index) => (
//           <div 
//             key={trip.id}
//             className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition-colors duration-150 animate-fade-in"
//             style={{ animationDelay: `${index * 50}ms` }}
//           >
//             <div className="flex justify-between items-start mb-3">
//               <div>
//                 <h4 className="font-semibold text-gray-900 text-sm">Trip ID: {trip.id}</h4>
//                 <p className="text-xs text-muted-dark mt-1">{trip.date}</p>
//               </div>
//               <span
//                 className={`px-2 py-1 rounded-full text-xs font-medium ${
//                   trip.status === "completed"
//                     ? "bg-green-100 text-green-700 border border-green-200"
//                     : trip.status === "cancelled"
//                     ? "bg-red-100 text-red-700 border border-red-200"
//                     : "bg-yellow-100 text-yellow-700 border border-yellow-200"
//                 }`}
//               >
//                 {trip.status}
//               </span>
//             </div>
            
//             <div className="grid grid-cols-2 gap-3 text-sm">
//               <div>
//                 <p className="text-xs text-muted-dark mb-1">User</p>
//                 <p className="font-medium text-gray-700">{trip.user}</p>
//               </div>
//               <div>
//                 <p className="text-xs text-muted-dark mb-1">Driver</p>
//                 <p className="font-medium text-gray-700">{trip.driver}</p>
//               </div>
//               <div>
//                 <p className="text-xs text-muted-dark mb-1">Amount</p>
//                 <p className="font-semibold text-gray-900">{trip.amount}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Desktop Table View */}
//       <div className="hidden md:block overflow-x-auto">
//         <Table>
//           <TableHeader>
//             <TableRow className="border-b border-gray-200 hover:bg-transparent">
//               <TableHead className="font-semibold text-gray-700">Trip ID</TableHead>
//               <TableHead className="font-semibold text-gray-700">User</TableHead>
//               <TableHead className="font-semibold text-gray-700">Driver</TableHead>
//               <TableHead className="font-semibold text-gray-700">Amount</TableHead>
//               <TableHead className="font-semibold text-gray-700">Status</TableHead>
//               <TableHead className="font-semibold text-gray-700">Time</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {trips.map((trip, index) => (
//               <TableRow 
//                 key={trip.id} 
//                 className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 animate-fade-in"
//                 style={{ animationDelay: `${index * 50}ms` }}
//               >
//                 <TableCell className="font-medium text-gray-900">{trip.id}</TableCell>
//                 <TableCell className="text-gray-700">{trip.user}</TableCell>
//                 <TableCell className="text-gray-700">{trip.driver}</TableCell>
//                 <TableCell className="font-semibold text-gray-900">{trip.amount}</TableCell>
//                 <TableCell>
//                   <span
//                     className={`px-3 py-1.5 rounded-full text-xs font-medium ${
//                       trip.status === "completed"
//                         ? "bg-green-100 text-green-700 border border-green-200"
//                         : trip.status === "cancelled"
//                         ? "bg-red-100 text-red-700 border border-red-200"
//                         : "bg-yellow-100 text-yellow-700 border border-yellow-200"
//                     }`}
//                   >
//                     {trip.status}
//                   </span>
//                 </TableCell>
//                 <TableCell className="text-muted-dark text-sm">{trip.date}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       {/* View All Button */}
//       <div className="mt-6 flex justify-center">
//         <button className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium text-sm shadow-sm hover:shadow-md text-center">
//           View All Trips
//         </button>
//       </div>
//     </div>
//   );
// }