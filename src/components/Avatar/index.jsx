import s from "./styles.module.css";

const Avatar = (props) => {
  return (
    <img
      className={props.hasBorder ? s.avatar_with_border : s.avatar}
      src={props.src}
    />
  );
};

export { Avatar };
