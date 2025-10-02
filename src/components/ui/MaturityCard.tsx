interface MaturityCardProps {
  number: number;
  title: string;
  description: string;
}

const MaturityCard = ({ number, title, description }: MaturityCardProps) => {
  return (
    <div className="w-full h-full flex-shrink-0 rounded-[10px] border border-[#B8C1BF] bg-[#252525] p-5 sm:p-6 lg:p-7 xl:p-8 flex flex-col min-w-0 max-w-[360px] sm:max-w-[400px] md:max-w-full">
      <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#408E86] flex items-center justify-center">
          <span className="text-[#FAF6E6] font-poppins text-lg sm:text-xl font-extrabold leading-[120%] tracking-[-0.6px]">
            {number}
          </span>
        </div>
        <h3 className="text-white font-poppins text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold leading-[120%] tracking-[-0.72px] flex-1">
          {title}
        </h3>
      </div>
      <p className="text-[#B8C1BF] font-poppins text-sm sm:text-base md:text-lg leading-[150%] text-justify flex-1">
        {description}
      </p>
    </div>
  );
};

export default MaturityCard;
