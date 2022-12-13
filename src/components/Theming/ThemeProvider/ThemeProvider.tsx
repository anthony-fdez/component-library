/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";

/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useEffect, useState } from "react";
import { IStyles, IContext } from "./Interfaces/IStyles";
import { IProviderProps } from "./Interfaces/IProviderProps";
import { DEFAULT_STYLES } from "../../../constants/theme/defaultStyles";
import { getGlobalStyles } from "./ThemeProvider.styles";

export const StateContext = createContext<IContext>({
  styles: DEFAULT_STYLES,
  setState: () => {},
});

const ThemeProvider = ({
  children,
  defaultStyles,
  theme = DEFAULT_STYLES.theme ?? "light",
  ...args
}: IProviderProps): JSX.Element => {
  defaultStyles = { ...DEFAULT_STYLES, ...defaultStyles };

  const [styles, setStyles] = useState<IStyles>(defaultStyles);

  const handleUpdateState = (newState: IStyles) => {
    setStyles({ ...styles, ...newState });
  };

  useEffect(() => {
    if (!defaultStyles) return;

    handleUpdateState({
      theme: theme,
      primaryColor: defaultStyles.primaryColor,
      borderRadius: defaultStyles.borderRadius,
      animated: defaultStyles.animated,
    });
  }, [theme]);

  return (
    <>
      <StateContext.Provider value={{ styles, setState: handleUpdateState }}>
        <Global styles={getGlobalStyles({ styles })} />
        <div {...args}>{children}</div>
      </StateContext.Provider>
    </>
  );
};

export default ThemeProvider;
