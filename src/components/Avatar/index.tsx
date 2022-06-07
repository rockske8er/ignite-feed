import { ImgHTMLAttributes } from "react";

import s from "./styles.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder: boolean;
}

const Avatar = ({ hasBorder = false, ...rest }) => {
  return (
    <img className={hasBorder ? s.avatar_with_border : s.avatar} {...rest} />
  );
};

export { Avatar };
