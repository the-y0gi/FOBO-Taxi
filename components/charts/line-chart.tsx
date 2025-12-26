"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { hour: "6 AM", rides: 5 },
  { hour: "8 AM", rides: 12 },
  { hour: "10 AM", rides: 18 },
  { hour: "12 PM", rides: 22 },
  { hour: "2 PM", rides: 16 },
  { hour: "4 PM", rides: 26 },
  { hour: "6 PM", rides: 30 },
  { hour: "8 PM", rides: 24 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-slate-200 p-3 rounded-xl shadow-xl">
        <p className="text-sm font-semibold text-slate-700">{label}</p>
        <p className="text-sm text-emerald-600 font-bold">
          {payload[0].value} Rides
        </p>
      </div>
    );
  }
  return null;
};

export function RidesAreaChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorRides" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#059669" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#059669" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
        <XAxis
          dataKey="hour"
          tick={{ fill: "#64748B", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          tick={{ fill: "#64748B", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#cbd5e1", strokeWidth: 1, strokeDasharray: "4 4" }} />
        <Area
          type="monotone"
          dataKey="rides"
          stroke="#059669"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorRides)"
          animationDuration={1500}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// //api integrate code

// "use client";

// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

// export function RidesLineChart({ data = [] }) {
//   return (
//     <ResponsiveContainer width="100%" height={270}>
//       <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
//         <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//         <XAxis
//           dataKey="hour"
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
//         />
//         <Line
//           type="monotone"
//           dataKey="rides"
//           stroke="#059669"
//           strokeWidth={3}
//           dot={{ fill: '#059669', strokeWidth: 2, r: 4 }}
//           activeDot={{ r: 6, fill: '#047857' }}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// }

