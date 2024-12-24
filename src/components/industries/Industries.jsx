const Industries = () => {
  return (
    <section className="section-industries overflow-hidden bg-[#F8F8F8]">
      <div className="secondary-container">
        <div>
          <div className="flex flex-col items-center justify-center mb-10">
            <span className="sub-title">{"// BUSINESS INDUSTRIES"}</span>
            <h2 className="main-heading">
              Empowering Businesses Across Industries
            </h2>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="ml-28 card card-1">
          <h6>Business & Finance</h6>
          <p className="description">
            Securely manage financial data with robust banking and finance
            software. Automate repetitive tasks and improve financial reporting
            accuracy.
          </p>
        </div>

        <div className="card card-2">
          <h6>Retail & Distribution</h6>
          <p className="description">
            Build engaging e-commerce platforms to reach new customers. Develop
            data-driven solutions to personalise customer experiences and boost
            sales.
          </p>
        </div>

        <div className="card card-3">
          <h6>Information Technology</h6>
          <p className="description">
            Streamline internal operations with custom software solutions.
            Develop innovative enterprise applications to enhance productivity
            and security.
          </p>
        </div>

        <div className="card card-4">
          <h6>Information Technology</h6>
          <p className="description">
            Streamline internal operations with custom software solutions.
            Develop innovative enterprise applications to enhance productivity
            and security.
          </p>
        </div>

        <div className="card card-1">
          <h6>Business & Finance</h6>
          <p className="description">
            Securely manage financial data with robust banking and finance
            software. Automate repetitive tasks and improve financial reporting
            accuracy.
          </p>
        </div>
      </div>
      <div className="justify-center items-center gap-6 mt-[-2.5rem] hidden">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot active-dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default Industries;
