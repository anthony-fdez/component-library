import { useStyles } from "../../../styles/useStyles";
import { IColors } from "./../../../constants/theme/colors";
import { SpinnersType } from "./Spinner.types";
import { IStyles } from "../../Theming/ThemeProvider/Interfaces/IStyles";
import { css, keyframes, SerializedStyles } from "@emotion/react";

interface Props {
  styles: IStyles;
  variant?: SpinnersType;
  color?: IColors;
  size?: number;
  backgroundAccentColor?: string;
}

export const getSpinnerStyles = ({
  styles,
  variant,
  color,
  size,
  backgroundAccentColor,
}: Props) => {
  const { getColor } = useStyles({ styles, color });

  const circularKeyframes = keyframes({
    to: {
      transform: "rotate(360deg)",
    },
  });

  const circular: SerializedStyles = css({
    pointerEvents: "none",
    width: size ?? 10,
    height: size ?? 10,

    border: 3,
    borderStyle: "solid",

    borderColor: backgroundAccentColor || getColor({}).background,
    borderTopColor: getColor({}).color,
    borderRadius: "50%",
    animation: circularKeyframes,
    animationDuration: "1s",
    animationIterationCount: "infinite",
  });

  const dots: SerializedStyles = css({});

  if (variant === "circular") return circular;
  if (variant === "dots") return dots;

  return circular;
};
