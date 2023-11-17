import { describe } from "node:test";
import { RoleContext } from "../../context/point-context";
import classes from "./crew.module.scss";
import { useContext } from "react";
interface ICrewContent {
  role: string;
  images: {
    png: string;
    webp: string;
  };
  bio: string;
  name: string;
}
export default function CrewContent({
  role,
  images,
  bio,
  name,
}: ICrewContent) {
  const currentRole = useContext(RoleContext);
  console.log(images.png);
  return (
    <>
      {role === currentRole ? (
        <>
        <div className={classes.content}>
          <div className={classes.title}>{role}</div>
          <div className={classes.name}>{name}</div>
          <p className={classes.bio}>{bio}</p>
        </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
