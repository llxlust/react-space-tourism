import classes from "./header.module.scss";
import logo from "../../assets/shared/logo.svg";
import { useState } from "react";
import lists from "../../local-json/menu.json";
import { IList } from "../../interface/data.type";
import NavButton from "../nav-button/nav-botton";
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import { PointContext, SetPointContext } from "../../context/point-context";
export default function Header() {
  const [list, setLists] = useState<IList[]>(lists);
  const [point, setPoint] = useState<number>(1);
const pointHandler = (id: number) => {
  setPoint(id);
};
  // const pointHandler = useContext(SetPointContext)
  // const point = useContext(PointContext);
  return (
    <>
      <div className={classes.navBox}>
        <div className={classes.navFlex}>
          <img className={classes.img} src={logo} />
          <div className={classes.leftBar}>
            <div className={classes.transBox}>
              {list &&
                list.map(({ id, number, title }) => {
                  return (
                    <>
                    <Link className={classes.link} to={`/${title}`}>
                      <NavButton
                        id={id}
                        number={number}
                        title={title}
                        point={point}
                        pointHandler={(clickId) => pointHandler(clickId)}
                      />
                      </Link>
                    </>
                  );
                })}
            </div>
            <hr className={classes.line}/>
          </div>
        </div>
      </div>
    </>
  );
}
