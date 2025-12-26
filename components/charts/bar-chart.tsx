"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { day: "Mon", revenue: 1800, refunds: 120 },
  { day: "Tue", revenue: 2200, refunds: 80 },
  { day: "Wed", revenue: 1950, refunds: 110 },
  { day: "Thu", revenue: 2500, refunds: 150 },
  { day: "Fri", revenue: 2700, refunds: 200 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-slate-200 p-3 rounded-xl shadow-xl min-w-[150px]">
        <p className="text-sm font-semibold text-slate-700 mb-2">{label}</p>
        <div className="space-y-1">
            <div className="flex justify-between text-sm">
                <span className="text-slate-500">Revenue:</span>
                <span className="font-bold text-emerald-600">${payload[0].value}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-slate-500">Refunds:</span>
                <span className="font-bold text-red-500">${payload[1].value}</span>
            </div>
        </div>
      </div>
    );
  }
  return null;
};

export function RevenueBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
        <XAxis
          dataKey="day"
          tick={{ fill: "#64748B", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          tick={{ fill: "#64748B", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip content={<CustomTooltip />} cursor={{fill: '#f8fafc'}} />
        <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
        <Bar
          dataKey="revenue"
          fill="#059669"
          name="Revenue"
          radius={[6, 6, 0, 0]}
          barSize={32}
          animationDuration={1500}
        />
        <Bar
          dataKey="refunds"
          fill="#EF4444"
          name="Refunds"
          radius={[6, 6, 0, 0]}
          barSize={32}
          animationDuration={1500}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}


// //api integrate code...

// "use client";

// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

// export function RevenueBarChart({ data = [] }) {
//   return (
//     <ResponsiveContainer width="100%" height={270}>
//       <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
//         <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//         <XAxis 
//           dataKey="day" 
//           tick={{ fill: '#64748B', fontSize: 12 }}
//           axisLine={{ stroke: '#E2E8F0' }}
//         />
//         <YAxis 
//           tick={{ fill: '#64748B', fontSize: 12 }}
//           axisLine={{ stroke: '#E2E8F0' }}
//         />
//         <Tooltip 
//           contentStyle={{ 
//             backgroundColor: 'white', 
//             border: '1px solid #E2E8F0',
//             borderRadius: '8px',
//             boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//           }}
//           formatter={(value) => [`₹${value}`, '']}
//         />
//         <Legend 
//           wrapperStyle={{ 
//             paddingTop: '10px',
//             fontSize: '12px'
//           }}
//         />
//         <Bar 
//           dataKey="revenue" 
//           fill="#059669" 
//           name="Revenue"
//           radius={[4, 4, 0, 0]}
//         />
//         <Bar 
//           dataKey="refunds" 
//           fill="#EF4444" 
//           name="Refunds"
//           radius={[4, 4, 0, 0]}
//         />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// }