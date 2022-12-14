import { ISizes } from "./../../../../types/sizes";
interface Props {
  size?: ISizes;
}
export const getBorderRadius = ({ size }: Props): number => {
  const DEFAULT = 0;

  if (!size) return DEFAULT;

  if (size === "xs") return DEFAULT;
  if (size === "sm") return 5;
  if (size === "md") return 7;
  if (size === "lg") return 10;
  if (size === "xl") return 25;

  return size;
};
