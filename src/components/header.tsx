export default function Header({}) {
  return (
    <header className="flex flex-row items-center h-[174px] w-full px-8">
      <div className="flex flex-row gap-tiny text-m">
        <div className="font-semibold text-mint">{"_<"}</div>
        <div className="font-semibold">Panuwat Suwanritdej</div>
        <div className="text-stone-400">Software Engineer</div>
      </div>

      <div className="flex flex-row items-center ml-auto">
        <button className="gray">
          <a href="/resume/Resume-Panuwat.pdf"  download="resume_panuwat_suwanritdej.pdf">
            Download my resume 👈
          </a>
        </button>
      </div>
    </header>
  );
}
