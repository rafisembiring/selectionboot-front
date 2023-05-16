import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="trend">
            <div className="trendItem">
              <p>#SEAGames2023</p>
              <span>20.5K Tweets</span>
              <p>#aespa</p>
              <span>38.1K Tweets</span>
              <p>#ITZY</p>
              <span>36.7K Tweets</span>
              <p>#BTS</p>
              <span>46.7K Tweets</span>
              <p>#BLACKPINK</p>
              <span>24.8K Tweets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
