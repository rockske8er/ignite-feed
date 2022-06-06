import s from "./styles.module.css";

const Avatar = ({ hasBorder = false, src }) => {
  return (
    <img className={hasBorder ? s.avatar_with_border : s.avatar} src={src} />
  );
};

export { Avatar };
