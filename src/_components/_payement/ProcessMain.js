import './index.css';
import { MultiStepProgressBar } from "./_processPayement/MultiStepProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { MultiStepForm } from "./_processPayement/MultiStepForm";
import { questions } from "./Questions";

function ProcessMain() {
  const [index, setIndex] = useState(1);

  const totalPagesCount = questions?.length || 0;
  // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
  const [pagesAnswers, setPagesAnswers] = useState({});
  const nextButton = () => {
    if (index - 3) {
      setIndex(prevIndex => prevIndex + 1);
    } else {
      // clear the form on submit
      setPagesAnswers({});
      
    }
   
  }


  return (
    <div className="App">
      <Container className="h-100">
        <Row className=" my-3">
          <Col className='progreesBarProess'>
            <MultiStepProgressBar
              step={index}
              />
          </Col>
        </Row>
   
        <Row>
            <div>
          <Card className={[2,3].includes(index) ? "  displayNoneBaground " : 'card'}  >
            <Card.Body>
              <MultiStepForm
                list={questions}
                step={index}
                />
                <span>{index}</span>
            </Card.Body >
            
          </Card>
          <div className={index === totalPagesCount? "FlexCenter" : 'flexEnd'} >
          
              <Button  className={index === totalPagesCount? "sendRequest" : 'Next-sendRequest'} onClick={nextButton}>{index === totalPagesCount ? 'SEND YOUR REQUEST' : 'Next'}</Button>
            </div>
          </div>
        
        </Row>
      </Container>
    </div>
  );
}

export default ProcessMain;
