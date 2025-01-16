interface PriceDisplayProps {
  originalPrice: string;
  currentPrice: string;
}

export default function PriceDisplay({ originalPrice, currentPrice }: PriceDisplayProps) {
  const discount = Math.round(((parseFloat(originalPrice) - parseFloat(currentPrice)) / parseFloat(originalPrice)) * 100);

  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-400 line-through text-sm">${originalPrice}</span>
      <span className="text-[#e682b6] font-bold text-xl">${currentPrice}</span>
      <span className="bg-[#e682b6] text-white text-xs px-2 py-1 rounded-full">
        -{discount}%
      </span>
    </div>
  );
}