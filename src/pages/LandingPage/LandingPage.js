import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";
import { Circles } from 'react-loader-spinner';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return <div className="container-spinner">
            <div>
                <Circles
                    height="80"
                    width="80"
                    color="white"
                    ariaLabel="loading-spinner"
                    visible={true}
                />
            </div>
            <div>
                <h1 className="text-center text-loading">Loading...</h1>
            </div>
  </div>;
};

export default LandingPage;