const CoffeeCounter = ({ total }: { total: number }) => {
  const percentage = (total / 1000000) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="coffee-slider">
        <div 
          className="coffee-slider-fill"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      <div className="mt-2 text-center text-sm text-gray-400">
        ${total.toLocaleString()} raised of $1,000,000
      </div>
    </div>
  );
};

export default CoffeeCounter;