import Card from "./Card";
import Footer from "./Footer";
import Newsbar from "./Newsbar";
import Compare from "../img/Compare.svg";
import Condition from "../img/Conditon.svg";
import Feedback from "../img/Feedback.svg";
import List from "../img/List.svg";
import News from "../img/News.svg";
import pill from "../img/pill.svg";



const Dashboard =()=>{
  const medicines = [
    { id: 1, name: 'Ibuprofen', dosage: '400mg', instructions: 'Take every 6 hours' },
    { id: 2, name: 'Acetaminophen', dosage: '500mg', instructions: 'Take every 8 hours' },
    { id: 3, name: 'Aspirin', dosage: '325mg', instructions: 'Take with food' },
  ];
    return(
        <>
        <div id="mySidenav" className="sidenav">
          <a href="/BMI" id="about">BMI</a>
  
</div>
      <div className="board">
        <div className="board-row">
        <a className="nav-link" href='/MedicineCompare'><Card feature="Medicine Compare" src={Compare} alt="My Image" medicines={medicines}/></a>
        <a className="nav-link" href='/Drugsearch'><Card feature="Medicine by Condition" imageSrc="img\syringe.png" src={Condition} alt="My Image" /></a>
        </div>
        <div className="board-row">
        <a className="nav-link" href='/Identifier'><Card feature="Drug Identifier " imageSrc="img\syringe.png" src={pill} alt="My Image"/></a>
          <a className="nav-link" href='/FAQ'><Card feature="Question & Answer" imageSrc="img\syringe.png" src={Feedback} alt="My Image" /></a>
          
        </div>
        <div className="board-row">
        <a className="nav-link" href='/MyList'><Card feature="My Medicine List" src={List} alt="My Image" medicines={medicines}/></a>
        <a className="nav-link" href='/MainNews'><Card feature="Health News" imageSrc="img\syringe.png" src={News} alt="My Image"/></a>
        </div>
      </div>
      <Newsbar />
      <Footer />
        
        </>
    )
};

export default Dashboard;
