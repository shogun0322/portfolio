import Image from "next/image";

export default function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center text-center gap-small">
      <Image
        alt=""
        width={104}
        height={104}
        loading="lazy"
        src="/hero/sho.png"
      />
      <div className="text-l font-bold">Hey there 👋 I'm Sho.</div>

      <div className="text-2xl font-bold max-w-[700px]">
        Full-stack Developer building scalable and real-world web & mobile
        applications.
      </div>

      <button className="mint">Explore Projects</button>
    </div>
  );
}
