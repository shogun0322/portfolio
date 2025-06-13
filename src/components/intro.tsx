export default function Intro() {
  return (
    <div className="container relative flex flex-col items-center justify-center text-center">
      <div className="z-[-1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-[37rem] bg-gradient-to-b from-[#0ECFCD] to-black bg-clip-text text-transparent font-bold">
          5+
        </div>
      </div>
      <div className="text-2xl font-bold mt-100 mb-40">Years in</div>
      <div className="text-l font-bold">
        Still love turning messy specs into fast,
        <br />
        reliable, full-stack apps.
      </div>
    </div>
  );
}
