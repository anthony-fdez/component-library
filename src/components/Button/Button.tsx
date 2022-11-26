/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import { StateContext } from "../ThemeProvider/ThemeProvider";
import { colors } from "../../constants/theme/colors";
import { getButtonStyles } from "./Button.styles";
import { getBorderRadius } from "../ThemeProvider/getValues/getBorderRadius";
import Spinner from "../Spinner";
import { IButtonProps } from "./Button.types";
import { useGetColors } from "../../hooks/useGetColors";

const Button = ({
  children,
  variant = "filled",
  color,
  padding = 10,
  margin = 10,
  borderRadius = "xs",
  loading = false,
  fontColor,
  spinnerVariant = "circular",
  align = "center",
  disabled = false,
  fullWidth = false,
  backgroundColor,
  ...args
}: IButtonProps) => {
  const { styles } = useContext(StateContext);

  const { FONT_COLOR } = useGetColors({
    color,
    styles,
    variant,
  });

  return (
    <button
      type="button"
      {...args}
      disabled={disabled}
      css={[
        getButtonStyles({ styles, variant, color, disabled }),
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
        fullWidth && { width: `calc(100% - ${margin * 2}px);` },
        backgroundColor && { backgroundColor },
      ]}
    >
      {loading ? (
        <Spinner backgroundAccentColor={FONT_COLOR} size={11} color={color} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
