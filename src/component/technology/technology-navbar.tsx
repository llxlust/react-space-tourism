import { TechnologyContext } from "../../context/point-context";
import classes from "./technology-navbar.module.scss";
import { useContext } from "react";
interface ITechnologyNavbar {
  name: string;
  index: number;
  technameHandler: (name: string) => void;
}
export default function TechnologyNavbar({
  name,
  index,
  technameHandler,
}: ITechnologyNavbar) {
  const currentName = useContext(TechnologyContext);
  return (
    <>
      <div
        className={
          classes[`${name === currentName ? "useCircle" : "unuseCircle"}`]
        }
        onClick={() => technameHandler(name)}
      >
        {index}
      </div>
    </>
  );
}
