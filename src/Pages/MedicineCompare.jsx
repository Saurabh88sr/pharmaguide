// import { Container, Row, Col } from "react-bootstrap";
// import SearchBar from "../Component/SearchBar";

// const MedicineCompare = () => {

//   return (
//     <>
//       <SearchBar />
//       <h1>My favorite color is {"g"}</h1>

//       <Container>
//         <Row>
//           <Col>
//             <table className="table table-bordered">
//               <thead className="headBg">
//                 <tr>
//                   <th scope="col" k>
//                     {"efef"}
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{"input"}</td>
//                 </tr>
//                 <tr>
//                   <td>kkkk</td>
//                 </tr>
//                 <tr>
//                   <td>@twitter</td>
//                 </tr>
//               </tbody>
//             </table>
//           </Col>

//           <Col>
//             <table className="table">
//               <thead className="headBg">
//                 <tr>
//                   <th scope="col">Handle</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>@mdo</td>
//                 </tr>
//                 <tr>
//                   <td>@fat</td>
//                 </tr>
//                 <tr>
//                   <td>@twitter</td>
//                 </tr>
//               </tbody>
//             </table>
//           </Col>
//           <div className="w-25">
//             <Col>
//               <table className="table table-bordered">
//                 <thead className="headBg">
//                   <tr>
//                     <th scope="col">First</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Otto</td>
//                   </tr>
//                   <tr>
//                     <td>Thornton</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </Col>
//           </div>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default MedicineCompare;

import React, { useState, useEffect } from "react";
import axios from "axios";

const MedicineCompare = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=6f7b8b848da34cd094c4f107920e6b44"
      );
      setNewsData(response.data.articles);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      {newsData.map((news) => (
        <div key={news.title}>
          <h2>{news.title}</h2>
          <p>{news.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MedicineCompare;
