const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 5bucks. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Terms</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;