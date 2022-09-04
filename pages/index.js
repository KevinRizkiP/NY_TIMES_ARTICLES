import * as React from "react";
import Cards from "../components/card";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/slice/articleSlice";
import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="grid gap-3 justify-center bg-white">
      <h1 className="text-black lg:text-8xl md:text-6xl text-3xl text-center">
        NEW YORK TIMES ARTICLE
      </h1>
      <hr />
      {/* <InfiniteScroll
        dataLength={user.users.length} //This is important field to render the next data
        next={fetchUsers}
        hasMore={true}
        loader={<h3 className="text-black ">Loading...</h3>}
        endMessage={<h4 className="text-black ">Nothing more to show</h4>}
      >
      </InfiniteScroll> */}
      <div>
        {user?.users.map((user, id) => (
          <div key={id} className="flex p-6">
            <Cards {...user} />
          </div>
        ))}
      </div>
    </div>
  );
}
