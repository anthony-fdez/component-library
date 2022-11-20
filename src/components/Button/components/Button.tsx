/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import { StateContext } from "../../ThemeProvider/components/ThemeProvider";
import { IButtonProps } from "../Interfaces/IButtonProps";
import { colors } from "../../ThemeProvider/constants/colors";
import { getButtonStyles } from "./buttonStyles";
import { getBorderRadius } from "../../ThemeProvider/getValues/getBorderRadius";

const Button = ({
  children,
  variant,
  color,
  colorShade = 6,
  padding = 10,
  margin = 10,
  borderRadius,
  loading = false,
  fontColor = "white",
  width,
  align = "center",
}: IButtonProps) => {
  const { styles } = useContext(StateContext);

  return (
    <button
      css={[
        getButtonStyles({ styles, variant }),
        fontColor && { color: fontColor },
        color && { backgroundColor: colors[color][colorShade] },
        padding && { padding },
        margin && { margin },
        width && { width },
        borderRadius && {
          borderRadius: getBorderRadius({ size: borderRadius }),
        },
        align && {
          display: "flex",
          justifyContent: align,
          alignItems: "center",
        },
      ]}
    >
      {loading ? <span>Loading</span> : children}
    </button>
  );
};

export default Button;
