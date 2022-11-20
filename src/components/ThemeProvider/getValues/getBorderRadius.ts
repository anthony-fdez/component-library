import { sizes } from "../types/sizes";

interface Props {
  size: sizes;
}
export const getBorderRadius = ({ size }: Props): number => {
  const DEFAULT = 5;

  if (!size) return DEFAULT;

  if (size === "xs") return 3;
  if (size === "sm") return DEFAULT;
  if (size === "md") return 7;
  if (size === "lg") return 10;
  if (size === "xl") return 14;

  return size;
};
