const Stats = () => {
  return (
    <div className="container bg-transparent">
      <div className="flex gap-24">
        <div className="px-24 flex flex-col gap-8 pb-20 stat-card-1">
          <span className="stat-number">10+</span>
          <h5 className="stat-head">Active Clients</h5>
          <p className="stat-description">
            We have a proven track record of success, partnering with a diverse
            range of businesses to deliver impactful software solutions.
          </p>
        </div>

        <div className="px-24 flex flex-col gap-8 pb-20 stat-card-2">
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
