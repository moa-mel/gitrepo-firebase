import React, { useEffect,  useState } from "react";
import Top from './top/top'
import {
  fetchReposAction,
  fetchProfileAction,
} from "../redux/slices/repoSlice";
import { auth } from '../firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const [user, setUser] = useState(null);
 /* const [repo, setRepo] = useState("") */
  const repos = useSelector(state => state?.repos);
  const {  reposList, profile, error } = repos;
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileAction(user));
    dispatch(fetchReposAction(user));
  }, [user, dispatch]);
  console.log(user);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser({
            name: user.displayName,
            photoUrl: user.photoURL
          })
      } else {
         setUser(null)
        
      }
    });
  }, [])

  return (
    <div className="">
      <Top/>
      <div className="main" style={{display: 'flex'}}>
      <div className="sidebar" style={{flex: '1'}}>
      <div class="flex justify-center">
        <img
         class="w-56 h-56 rounded-full"
        src={user && user.photoUrl}
      alt=""  />
     </div>
      <div class="mb-6 py-px bg-gray-500"></div>
      <h4 class="mb-8 lg:mb-4  text-white font-bold">
        Username:{" "}
        <span>
          {profile?.username} {profile?.login}
        </span>
      </h4>

      <div class="mb-6 py-px bg-gray-500"></div>
      <h4 class="mb-8 lg:mb-4  text-white font-bold">
        Name:{" "}
        <span>
          {profile?.name} {profile?.login}
          {user && user.name}
        </span>
      </h4>
      <div class="mb-6 py-px bg-gray-500"></div>
      <h4 class="mb-8 lg:mb-4  text-white font-bold">
        Bio: <span>{profile?.bio}</span>
      </h4>

      <div class="mb-6 py-px bg-gray-500"></div>
      <h4 class="mb-8 lg:mb-4  text-white font-bold">
        Followers: <span>{profile?.followers}</span>
      </h4>

      <div class="mb-6 py-px bg-gray-500"></div>
      <h4 class="mb-8 lg:mb-4  text-white font-bold">
        Following: <span>{profile?.following}</span>
      </h4>

      <div class="mb-6 py-px bg-gray-500"></div>
      <h4 class="mb-8 lg:mb-4  text-white font-bold">
        Location: <span>{profile?.location}</span>
      </h4>

      <div class="mb-6 py-px bg-gray-500"></div>
      <h4 class="mb-8 lg:mb-4  text-white font-bold">
        Gmail: <span>{profile?.gmail}</span>
      </h4>

      <div class="mb-6 py-px bg-gray-500"></div>
      <h4 class="mb-8 lg:mb-4  text-white font-bold">
        Twitter: <span>{profile?.twitter}</span>
      </h4>

      </div>

      <div className="fullbar" style={{flex: '3'}}>
      <div class="w-full lg:w-1/2 px-4">
                  {reposList?.name !== "Error" &&
                    reposList?.map(repo => (
                      <>
                        <div class="py-6 px-8 mb-4 bg-gray-600 rounded-lg">
                          <div class="flex items-center">
                            <a
                              target="_blank"
                              href={repo?.html_url}
                              class="text-lg  text-indigo-400"
                            >
                              {repo?.name}
                            </a>
                          </div>
                        </div>
                      </>
                    ))}
                    </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;