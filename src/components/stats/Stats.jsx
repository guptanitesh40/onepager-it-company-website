const Stats = () => {
  return (
    <div className="container bg-transparent">
      <div className="flex gap-24 xl-s:gap-20 lg-s:gap-16 sm-s:gap-12 tb-l:flex-col">
        <div className="px-24 flex flex-col gap-8 pb-20 stat-card-1 max:px-20 max:pb-16 max:gap-6 max:rounded-md xl-s:px-16 xl-s:pb-14 lg-s:px-12 lg-s:pb-12 lg-s:gap-4 md-s:basis-1/2 sm-s:px-10 sm-s:pb-10 tb-l:px-16 tb-l:pb-16 mb-l:px-10 mb:pb-10">
          <span className="stat-number">10+</span>
          <h5 className="stat-head">Active Clients</h5>
          <p className="stat-description">
            We have a proven track record of success, partnering with a diverse
            range of businesses to deliver impactful software solutions.
          </p>
        </div>

        <div className="px-24 flex flex-col gap-8 pb-20 stat-card-2 max:px-20 max:pb-16 max:gap-6 max:rounded-md xl-s:px-16 xl-s:pb-14 lg-s:px-12 lg-s:pb-12 lg-s:gap-4 md-s:basis-1/2 sm-s:px-10 sm-s:pb-10 tb-l:px-16 tb-l:pb-16 mb-l:px-10 mb:pb-10">
          <span className="stat-number">100+</span>
          <h5 className="stat-head">Project Completed</h5>
          <p className="stat-description">
            Our extensive experience allows us to tackle complex projects with
            confidence, ensuring your software is delivered on time and within
            budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
