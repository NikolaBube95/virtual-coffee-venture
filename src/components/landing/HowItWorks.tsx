export const HowItWorks = () => {
  return (
    <div className="mt-32 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">How It Works</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="affiliate-card">
          <h3 className="text-xl font-bold mb-4">Buy Virtual Coffee</h3>
          <p className="text-white/80">Skip the local café and purchase a virtual coffee within our app.</p>
        </div>
        <div className="affiliate-card">
          <h3 className="text-xl font-bold mb-4">Invest Instead</h3>
          <p className="text-white/80">Instead of spending it, we use that $5 to invest in a carefully chosen portfolio.</p>
        </div>
        <div className="affiliate-card">
          <h3 className="text-xl font-bold mb-4">Watch It Grow</h3>
          <p className="text-white/80">Your $5 is working for you, compounding and growing into a future investment.</p>
        </div>
        <div className="affiliate-card">
          <h3 className="text-xl font-bold mb-4">Achieve Your Goal</h3>
          <p className="text-white/80">As you consistently invest, you get closer to winning $1,000,000!</p>
        </div>
      </div>
    </div>
  );
};