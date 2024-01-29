import { useContext } from "react";
import watchContext from "../context/watch";

import WatchShow from "./WatchShow";

// code begins here
const WatchList = () => {
  const { watch } = useContext(watchContext);
  // render watch list
  const renderWatch = watch.map((watch) => {
    return <WatchShow key={watch.id} watch={watch} />;
  });

  return <div className="book-list">{renderWatch}</div>;
};

export default WatchList;
