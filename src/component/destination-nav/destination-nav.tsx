import { useContext } from "react";
import classes from "./destinatio-nav.module.scss";
import { PointContext, SetNameContext } from "../../context/point-context";
interface IDestinationNavbar {
  currentName: string;
}
export default function DestinationNavbar({ currentName }: IDestinationNavbar) {
  const name = useContext(PointContext);
  const setName = useContext(SetNameContext);
  return (
    <>
      <div
        className={
          classes[`${currentName === name ? "selected" : "unSelected"}`]
        }
        onClick={() => setName(currentName)}
      >
        {currentName}
      </div>
    </>
  );
}
