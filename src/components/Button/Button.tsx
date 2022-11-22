/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import { StateContext } from "../ThemeProvider/ThemeProvider";
import { colors } from "../../constants/theme/colors";
import { getButtonStyles } from "./Button.styles";
import { getBorderRadius } from "../ThemeProvider/getValues/getBorderRadius";
import Spinner from "../Spinner";
import { IButtonProps } from "./Button.types";

const Button = ({
  children,
  variant = "filled",
  color,
  padding = 10,
  margin = 10,
  borderRadius,
  loading = false,
  fontColor,
  width,
  spinnerVariant,
  align = "center",
  ...args
}: IButtonProps) => {
  const { styles } = useContext(StateContext);

  return (
    <button
      {...args}
      css={[
        getButtonStyles({ styles, variant, color }),
        fontColor && { color: fontColor },

        padding && { padding },
        margin && { margin },
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
      {loading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
