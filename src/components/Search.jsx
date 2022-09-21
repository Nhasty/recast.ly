var Search = (props) => {
  const [entry, setEntry] = React.useState('');
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={entry}
        onChange={(event) => setEntry(event.target.value)}/>
      <button className="btn hidden-sm-down" onClick={_.debounce((event) => {
        props.searchYouTube(entry, props.selectVideos);
        //});
      }, 300, true)}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

//buttonhadler get reest here

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;


/// handlesubmit : cancle default submit,GET request from youtube.$
// on succsess set videos to get request.