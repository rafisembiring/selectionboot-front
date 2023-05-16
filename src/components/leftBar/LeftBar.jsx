import "./leftBar.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Box, Button } from "@mui/material";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <div>{currentUser.name}</div>
            <p>The only way to do great work is to love what you do. 
              If you haven't found it yet, keep looking. Don't settle.</p>
            <Button>17 Following</Button><Button>1945 Follower</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
