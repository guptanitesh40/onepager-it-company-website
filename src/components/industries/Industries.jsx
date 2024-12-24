import { useEffect, useRef } from "react";

const Industries = () => {
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const container = cardContainerRef.current;
    const scrollStep = 350;
    let scrollPosition = 0;

    const scrollInterval = setInterval(() => {
      if (container) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        scrollPosition += scrollStep;
        if (scrollPosition > maxScrollLeft) {
          scrollPosition = 0;
        }

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }, 10000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="section-industries overflow-hidden">
      <div className="secondary-container">
        <div className="flex flex-col items-center justify-center mb-10">
          <span className="sub-title">{"// BUSINESS INDUSTRIES"}</span>
          <h2 className="main-heading text-center">
            Empowering Businesses Across Industries
          </h2>
        </div>
      </div>
      <div className="card-container" ref={cardContainerRef}>
        <div className="ml-28 mb:ml-12 card card-1">
          <h6>Business & Finance</h6>
          <p className="text-description">
            Securely manage financial data with robust banking and finance
            software. Automate repetitive tasks and improve financial reporting
            accuracy.
          </p>
        </div>

        <div className="card card-2">
          <h6>Retail & Distribution</h6>
          <p className="text-description">
            Build engaging e-commerce platforms to reach new customers. Develop
            data-driven solutions to personalise customer experiences and boost
            sales.
          </p>
        </div>

        <div className="card card-3">
          <h6>Information Technology</h6>
          <p className="text-description">
            Streamline internal operations with custom software solutions.
            Develop innovative enterprise applications to enhance productivity
            and security.
          </p>
        </div>

        <div className="card card-4">
          <h6>Information Technology</h6>
          <p className="text-description">
            Streamline internal operations with custom software solutions.
            Develop innovative enterprise applications to enhance productivity
            and security.
          </p>
        </div>

        <div className="card card-1">
          <h6>Business & Finance</h6>
          <p className="text-description">
            Securely manage financial data with robust banking and finance
            software. Automate repetitive tasks and improve financial reporting
            accuracy.
          </p>
        </div>
      </div>
      <div className="hidden justify-center items-center gap-6 mt-[-2.5rem] md-s:flex">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot active-dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default Industries;
