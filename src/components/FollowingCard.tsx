import { useMouseOffsetTransform } from "@/hooks";
import { Card, CardProps } from "@nextui-org/react";
import { Tolerance } from "@/types";

interface Props extends CardProps {
  wrapperClassName?: string;
  enabled?: boolean;
  followSensitivity?: number;
  snapToCenter?: boolean;
  tolerance?: number;
  toleranceX?: number | Tolerance;
  toleranceY?: number | Tolerance;
}

export default function FollowingCard({
  children,
  wrapperClassName,
  enabled,
  followSensitivity,
  snapToCenter,
  tolerance,
  toleranceX,
  toleranceY,
  ...props
}: Props) {
  const [offset, ref] = useMouseOffsetTransform(
    enabled,
    followSensitivity,
    snapToCenter,
    tolerance,
    toleranceX,
    toleranceY,
  );

  return (
    <div className={"w-fit h-fit " + (wrapperClassName || "")}>
      <Card
        ref={ref}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          boxShadow: `${-offset.x * 0.65}px ${-offset.y * 0.65}px 50px 0px #000000`,
          transitionProperty: "transform, box-shadow",
          transitionTimingFunction: "ease-out",
          transitionDuration: "500ms",
        }}
        {...props}
      >
        {children}
      </Card>
    </div>
  );
}
