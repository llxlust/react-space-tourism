import { time } from "console";
import { PointContext } from "../../context/point-context";
import DestinationNavbar from "../destination-nav/destination-nav";
import classes from "./destination.module.scss";
import React,{useContext} from "react";
interface IDestinationContent {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export default function DestinationContent({
  name,
  images,
  description,
  distance,
  travel,
}: IDestinationContent) {
  const currentContent = useContext(PointContext)
  return (
    <>
      {name === currentContent ? <>
      <div className={classes.title}>{name}</div>
      <p className={classes.description}>{description}</p>
      <hr className={classes.underline}/>
     <div className={classes.flexBox}>
        <div className={classes.flex1}>
          <div>AVG. DISTANCE</div>
          <div>{distance}</div>
        </div>
        <div className={classes.flex1}>
          <div>EST TRAVEL TIME</div>
          <div>{travel}</div>
        </div>
     </div>
      </>:<></>}
    </>
  );
}
