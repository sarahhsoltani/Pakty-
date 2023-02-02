import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";



function Speener() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
   <div className="container my-5">
     <div className="d-flex justify-content-around align-items-center">
     

     <ClipLoader color="#36d7b7" 
     height='95px'
     border-radius= '100%'
     border-width= '4px'
     
     />
    </div>
   </div>
  );
}

export default Speener;