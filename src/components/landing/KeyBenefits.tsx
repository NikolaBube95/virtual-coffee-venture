export const KeyBenefits = () => {
  return (
    <div className="mt-32 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Key Benefits</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="affiliate-card">
          <h3 className="text-xl font-bold mb-4">Small, Consistent Investments</h3>
          <p className="text-white/80">Build a habit of investing small amounts that add up over time.</p>
        </div>
        <div className="affiliate-card">
          <h3 className="text-xl font-bold mb-4">Simple & Hassle-Free</h3>
          <p className="text-white/80">Our app makes investing easy, automatic, and fun.</p>
        </div>
        <div className="affiliate-card">
          <h3 className="text-xl font-bold mb-4">Chance to Win $1 Million</h3>
          <p className="text-white/80">Investing in yourself has never been this rewarding.</p>
        </div>
      </div>
    </div>
  );
};