export const Testimonials = () => {
  return (
    <div className="mt-32 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Our Users Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="affiliate-card">
          <p className="text-white/80 italic mb-4">"I never thought about my coffee habit this way! I'm excited to see my daily small investments turning into something much bigger."</p>
          <p className="text-white font-bold">– Sarah T.</p>
        </div>
        <div className="affiliate-card">
          <p className="text-white/80 italic mb-4">"It's such a simple way to start investing, and now I'm watching my money grow instead of just drinking it away."</p>
          <p className="text-white font-bold">– Mark J.</p>
        </div>
      </div>
    </div>
  );
};