import exampleVideoData from '../../../src/data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
var App = () => {
  const [videos, setVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState({ id: {videoId: ''}, snippet: {title: '', discription: ''}});
  const selectVideo = (newVideo) => {
    setSelectedVideo(newVideo);
  };
  const selectVideos = (newList) => {
    setVideos(newList);
  };
  React.useEffect(() => {
    searchYouTube(' ', data => {
      selectVideos(data);
      selectVideo(data[0]);
    });
  }, []);

  console.log(videos);
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search videos={videos} selectVideos={selectVideos} searchYouTube={searchYouTube} /></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={selectedVideo} /></div>
        </div>
        <div className="col-md-5">
          <div><VideoList videos={videos} selectVideo={selectVideo}/></div>
        </div>
      </div>
    </div>
  );
};
// debugger

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
