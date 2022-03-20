import React from "react";
import { useSelector, useDispatch } from "react-redux";

import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import LoadIcon from "../../images/loading.gif";

import { getSuggestions } from "../../redux/actions/suggestionsAction.js";

const RightSideBar = () => {
  const { auth, suggestions } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ backgroundColor: 'lightgray', marginTop: '18px', padding: '5px', borderRadius: '6px' }}>
      <UserCard user={auth.user} />
      </div>

      <div className="d-flex justify-content-between align-items-center my-4 p-2">
        <h5 className="text-danger">Suggestions for you</h5>

        {!suggestions.loading && (
          <i
            className="fas fa-redo"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(getSuggestions(auth.token))}
          />
        )}
      </div>

      {suggestions.loading ? (
        <img src={LoadIcon} alt="loading" className="d-block mx-auto my-2" />
      ) : (
        <div className="suggestions">
          {suggestions.users.map((user) => (
            <>
            <UserCard key={user._id} user={user}>
              <FollowBtn user={user} />
            </UserCard>
            <hr className='mt-1 mb-1' />
            </>
            
          ))}
        </div>
      )}

      <div style={{ opacity: 0.5 }} className="my-2">
        <a
          href="https://www.youtube.com/c/DevATHTML"
          target="_blank"
          rel="noreferrer"
          style={{ wordBreak: "break-all" }}
        >
          {/* https://www.youtube.com/c/DevATHTML */}
        </a>
        <small className="d-block">
          Welcome to our Instagram Profile "orangegfx4034"
        </small>

        <small>&copy; 2022 ORANGE-PLEX</small>
      </div>
    </div>
  );
};

export default RightSideBar;
