interface PriceDisplayProps {
  originalPrice: string;
  currentPrice: string;
}

export default function PriceDisplay({ originalPrice, currentPrice }: PriceDisplayProps) {
  const discount = Math.round(((parseFloat(originalPrice) - parseFloat(currentPrice)) / parseFloat(originalPrice)) * 100);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-start gap-1 sm:gap-4">
      <div>
      <span className="text-[#e682b6] font-bold text-xl sm:text-2xl">${currentPrice} USD</span>
      <span className="text-gray-400 text-xs"> + impuestos</span>
      </div>
      <div>
      <span className="text-gray-400 line-through text-sm sm:text-base">${originalPrice} USD</span>
      <span className="bg-[#e682b6] text-white text-xs px-2 py-1 rounded-full mx-2">
        -{discount}%
      </span>
      </div>
      
    </div>
  );
}