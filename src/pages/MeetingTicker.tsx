import { Calendar, Clock, MapPin } from "lucide-react";

const MeetingTicker = () => {
  return (
    <div className="absolute top-24 right-6 w-80 p-5 rounded-2xl shadow-2xl backdrop-blur-xl bg-white/50 border border-white/40">

      {/* Heading */}
      <h3 className="font-semibold text-primary text-xl mb-4 tracking-wide">
        Upcoming Meetings
      </h3>

      {/* Meeting 1 */}
      <div className="mb-5 pb-4 border-b border-white/50">
        <p className="font-bold text-gray-900 text-base mb-2">
          Sunday Walking Meet
        </p>

        <div className="flex items-center gap-2 text-gray-800 text-sm">
          <Calendar className="w-4 h-4 text-primary" />
          <span>Next Sunday</span>
        </div>

        <div className="flex items-center gap-2 text-gray-800 text-sm mt-1">
          <Clock className="w-4 h-4 text-primary" />
          <span>6:00 AM</span>
        </div>

        <div className="flex items-center gap-2 text-gray-800 text-sm mt-1">
          <MapPin className="w-4 h-4 text-primary" />
          <span>VUDA Park Entrance</span>
        </div>
      </div>

      {/* Meeting 2 */}
      <div>
        <p className="font-bold text-gray-900 text-base mb-2">
          Monthly General Meeting
        </p>

        <div className="flex items-center gap-2 text-gray-800 text-sm">
          <Calendar className="w-4 h-4 text-primary" />
          <span>1st Sunday</span>
        </div>

        <div className="flex items-center gap-2 text-gray-800 text-sm mt-1">
          <Clock className="w-4 h-4 text-primary" />
          <span>7:45 AM</span>
        </div>

        <div className="flex items-center gap-2 text-gray-800 text-sm mt-1">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Club Office, MVP Colony</span>
        </div>
      </div>
    </div>
  );
};

export default MeetingTicker;
