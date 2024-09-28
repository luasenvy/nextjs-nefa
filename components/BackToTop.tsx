"use client";
import ArrowUpwardRounded from "@mui/icons-material/ArrowUpwardRounded";

export default function BackToTop() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full my-10 flex justify-center">
      <a
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        className="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
        onClick={handleClick}
      >
        <span>Back to top</span>
        <ArrowUpwardRounded />
      </a>
    </div>
  );
}
