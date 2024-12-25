import React, { useState, useEffect } from "react";
function Youtube() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB8l8v5eyUycDOhZ1Afga1enaj8lDlGHh4&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=12"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideos = data.items;
        setYouTubeVideos(youTubeVideos);
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
      });
  }, []);
  console.log(youTubeVideos)

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {youTubeVideos?.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt={singleVideo.snippet.title}
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a
                        href={vidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Youtube;
