interface MaturityCardProps {
  number: number;
  title: string;
  description: string;
}

const MaturityCard = ({ number, title, description }: MaturityCardProps) => {
  return (
    <div className="w-full h-full flex-shrink-0 rounded-[10px] border border-[#B8C1BF] bg-[#252525] p-6 flex flex-col min-w-[280px] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[380px]">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#408E86] flex items-center justify-center">
          <span className="text-[#FAF6E6] font-poppins text-xl font-extrabold leading-[120%] tracking-[-0.6px]">
            {number}
          </span>
        </div>
        <h3 className="text-white font-poppins text-lg sm:text-xl md:text-2xl font-extrabold leading-[120%] tracking-[-0.72px] flex-1">
          {title}
        </h3>
      </div>
      <p className="text-[#B8C1BF] font-poppins text-base sm:text-lg leading-[150%] text-justify flex-1">
        {description}
      </p>
    </div>
  );
};

export default MaturityCard;
