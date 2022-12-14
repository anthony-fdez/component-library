/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { getButtonStyles } from "./Button.styles";
import { getBorderRadius } from "../../Theming/ThemeProvider/getValues/getBorderRadius";
import Spinner from "../../Feedback/Spinner";
import { IButtonProps } from "./Button.types";
import { useStyles } from "../../../styles/useStyles";
import { useButtonDefaultProps } from "./Button.props";

const Button = (props: IButtonProps) => {
  const { styles } = useContext(StateContext);
  const { BUTTON_FONT } = useStyles({ styles });

  const { variant } = useButtonDefaultProps({ styles, props: props });

  console.log(variant);

  return <button>test</button>;
};

const OldButton = ({
  children,
  variant = "filled",
  color,
  padding = 10,
  margin = 10,
  borderRadius,
  loading = false,
  fontColor,
  spinnerVariant = "circular",
  align = "center",
  disabled = false,
  fullWidth = false,
  backgroundColor,
  iconLeft,
  iconRight,
  iconLeftProps,
  iconRightProps,
  ...args
}: IButtonProps) => {
  const { styles } = useContext(StateContext);
  const { BUTTON_FONT } = useStyles({ styles });

  const buttonStyles = css([
    getButtonStyles({ styles, variant, color, disabled }),
    fontColor && { color: fontColor },
    padding && { padding },
    margin && { margin },
    borderRadius
      ? {
          borderRadius: getBorderRadius({ size: borderRadius }),
        }
      : { borderRadius: getBorderRadius({ size: styles.borderRadius }) },
    align && {
      display: "flex",
      justifyContent: align,
      alignItems: "center",
    },
    fullWidth && { width: `calc(100% - ${margin * 2}px);` },
    backgroundColor && { backgroundColor },
  ]);

  return (
    <button type="button" {...args} disabled={disabled} css={buttonStyles}>
      {loading ? (
        <Spinner
          variant={spinnerVariant}
          backgroundAccentColor={BUTTON_FONT}
          size={11}
          color={color}
        />
      ) : (
        <>
          {iconLeft && (
            <div {...iconLeftProps} className="button-icon-container-left">
              L
            </div>
          )}
          {children}
          {iconRight && (
            <div {...iconRightProps} className="button-icon-container-right">
              R
            </div>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
