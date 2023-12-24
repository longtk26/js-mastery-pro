const Footer = () => {
  return (
    <footer className="w-full border-t border-black-400 py-12 fixed bottom-0 px-16 flex-center">
      <div
        className="lg:flex-between lg:flex-row text-white-800 
      flex-col flex-center gap-y-10 max-w-screen-2xl grow"
      >
        <p>Copyright © 2023 JS Mastery Pro | All Rights Reserved</p>
        <div className="flex-center gap-x-8">
          <span className="block">Terms and condtions</span>
          <span className="block">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
