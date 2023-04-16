import Container from "./style";

const VideoPlayer = () => {
  return (
    <Container>
      <iframe
        className="video"
        width="522"
        height="300"
        src="https://www.youtube.com/embed/VMYrW19fL6M"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Container>
  );
};

export default VideoPlayer;
