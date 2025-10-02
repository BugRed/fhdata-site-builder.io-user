import { ReactNode } from 'react';

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-8 h-8 text-[#408E86]">
        {icon}
      </div>
      <div className="flex-1 space-y-2">
        <h4 className="text-[#B8C1BF] font-poppins text-lg sm:text-xl font-bold leading-[150%]">
          {title}
        </h4>
        <p className="text-[#B8C1BF] font-poppins text-base sm:text-xl leading-[150%] text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
