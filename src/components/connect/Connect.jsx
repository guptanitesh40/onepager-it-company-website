const Connect = () => {
  return (
    <div className="secondary-container">
      <div className="detail-container">
        <div className="flex items-stretch justify-between tb-l:flex-col tb-l:items-start tb-l:gap-8 mb:items-center">
          <div className="px-6 md-s:px-0">
            <span className="mb-2 md-s:mb-1">
              {"// Beyond Services, We Build Partnerships"}
            </span>
            <h2 className="text-white">{"Let's"} Work together!</h2>
          </div>
          <div className="basis-auto px-6 flex items-center justify-center md-s:px-0">
            <a
              href="#contact"
              className="contact-btn hover:bg-purple-950 transition-all duration-300 hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
