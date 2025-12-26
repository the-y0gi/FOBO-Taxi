"use client";

import RideRequestCard, { RideRequest } from "./RideRequestCard";

export default function RideRequestList({
  requests,
  onAcceptRequest,
  onDeclineRequest,
}: {
  requests: RideRequest[];
  onAcceptRequest: (id: string) => void;
  onDeclineRequest: (id: string) => void;
}) {
  if (!requests || requests.length === 0) return null;

  return (
    <div className="w-full bg-[#F5F7FC] py-10 px-4">
      {/* LOCATION BAR */}
      <div className="w-full max-w-5xl mx-auto bg-white rounded-xl py-3 px-5 flex items-center gap-3 shadow-sm mb-6">
        <span className="text-xl">🚗</span>
        <p className="text-gray-700 font-medium">
          H - 890, East Area XYZ dxfhb, Victoria Street, 21054
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {requests.map((req) => (
          <RideRequestCard
            key={req.id}
            request={req}
            onAccept={() => onAcceptRequest(req.id)}
            onDecline={() => onDeclineRequest(req.id)}
          />
        ))}
      </div>
    </div>
  );
}
