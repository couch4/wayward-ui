import { forwardRef, Ref } from "react";
import { Stack, Button, ShareTooltip } from "../../../components";
import { buttonGroupVars } from "./ButtonGroup.styles";
import { ButtonGroupProps } from "./ButtonGroup.types";
import { useRouter } from "next/navigation";

export const ButtonGroup = forwardRef(
  (
    {
      direction = "row",
      primaryProps,
      secondaryProps,
      shareData,
      ...props
    }: ButtonGroupProps,
    ref: Ref<ButtonGroupProps>,
  ) => {
    const router = useRouter();

    if (!primaryProps?.href && !secondaryProps?.href) return null;

    const handleClick = (variant: string) => {
      const url =
        variant === "primary" ? primaryProps.href : secondaryProps.href;
      if (url) router.push(url);
    };

    const allProps = {
      ...buttonGroupVars(direction, props.className),
      ...props,
      direction,
    };

    return (
      <Stack {...allProps}>
        {primaryProps?.href && (
          <Button onClick={() => handleClick("primary")} {...primaryProps} />
        )}
        {secondaryProps?.href && (
          <Button
            onClick={() => handleClick("secondary")}
            {...secondaryProps}
          />
        )}
        {shareData && <ShareTooltip {...shareData} />}
      </Stack>
    );
  },
);

ButtonGroup.displayName = "ButtonGroup";
