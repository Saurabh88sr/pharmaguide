
const News = (props) => {
  // const [newsData, setNewsData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=6f7b8b848da34cd094c4f107920e6b44"
  //     );
  //     setNewsData(response.data.articles);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      
        <div className="card card-icon">
          <img src={!props.Imgurl?"https://aniportalimages.s3.amazonaws.com/media/details/ANI-20230421031008.jpg" :props.Imgurl } class="card-img-top" alt="News Cover" />
          <div class="card-body">
            <h5 class="card-title">{props.title} ...</h5>
            <p class="card-text">{props.description} ...</p>
            <a href={props.newsurl} target="blank" class="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
    </>
  );
};

export default News;
