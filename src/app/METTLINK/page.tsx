import Image from "next/image";

export default function Mettlink() {
  return (
    <div className="container">
      <div className="text-2xl font-bold">
        METTLINK - Location Tracking & Incident
      </div>

      <div className="relative w-full ">
        <Image fill priority src="/work/ml.webp" alt="Full width image" />
      </div>
    </div>
  );
}
