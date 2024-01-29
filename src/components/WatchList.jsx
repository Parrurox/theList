import useWatchContext from "../hooks/use-Watch-Context";
import WatchShow from "./WatchShow";

// code begins here
const WatchList = () => {
  const { watch } = useWatchContext();
  // render watch list
  const renderWatch = watch.map((watch) => {
    return <WatchShow key={watch.id} watch={watch} />;
  });

  return <div className="book-list">{renderWatch}</div>;
};

export default WatchList;
