import classes from "./navbutton.module.scss";
interface INavButtonProps {
  id: number;
  number: string;
  title: string;
  pointHandler: (id: number) => void;
  point: number;
}

export default function NavButton({
  id,
  number,
  title,
  pointHandler,
  point,
}: INavButtonProps) {
  return (
    <div className={classes[`${point === id ? "flexchose" : "flexcon"}`]} onClick={() => pointHandler(id)}>
      <div
        className={classes[`${point === id ? "bottBorder" : "menu"}`]}
      >
        {number} {title}
      </div>
    </div>
  );
}
