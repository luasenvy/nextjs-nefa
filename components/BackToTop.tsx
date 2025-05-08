"use client";
import ArrowUpwardRounded from "@mui/icons-material/ArrowUpwardRounded";

export default function BackToTop() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="my-10 flex w-full justify-center">
      <a
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        className="flex items-center space-x-2 rounded-md border border-[#DDDDDD] bg-[#FAFAFA] px-6 py-3 text-gray-700 hover:bg-gray-100 hover:shadow-md"
        onClick={handleClick}
      >
        <span>Back to top</span>
        <ArrowUpwardRounded />
      </a>
    </div>
  );
}
