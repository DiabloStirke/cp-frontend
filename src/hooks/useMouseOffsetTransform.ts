import { useEffect, useState, useRef } from "react";
import { Coordinates, Tolerance } from "@/types";

/**
 * This hook will return the transform offset of the element relative to the mouse position.
 *
 * @param sensitivity The sensitivity of the transform. The higher the value, the more sensitive the offset will be relative to the mouse movement.
 * A sensitivity of 1 will make the element follow the mouse exactly.
 *
 * @returns A tuple containing the offset of the mouse relative to the center of the element and a ref to the element.
 */
function useMouseOffsetTransform(
  enabled = true,
  sensitivity = 0.03,
  snapToCenter = false,
  tolerance = 0,
  toleranceX?: number | Tolerance,
  toleranceY?: number | Tolerance,
): [Coordinates, React.MutableRefObject<null | HTMLDivElement>] {
  const [position, setPosition] = useState({ x: 0, y: 0 } as Coordinates);

  const element = useRef(null) as React.MutableRefObject<null | HTMLDivElement>;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!element.current) return;

      const rect = element.current.parentElement?.getBoundingClientRect();

      if (!rect) return;

      // check if the mouse is outside the element
      const newPos = { x: 0, y: 0 };

      if (snapToCenter) {
        if (toleranceX === undefined) toleranceX = tolerance;
        if (toleranceY === undefined) toleranceY = tolerance;

        if (typeof toleranceX === "number") {
          toleranceX = { start: toleranceX, end: toleranceX };
        }
        if (typeof toleranceY === "number") {
          toleranceY = { start: toleranceY, end: toleranceY };
        }

        if (
          e.clientX < rect.left + toleranceX.start ||
          e.clientX > rect.right - toleranceX.end
        ) {
          newPos.x = (e.clientX - rect.left - rect.width / 2) * sensitivity;
        }
        if (
          e.clientY < rect.top + toleranceY.start ||
          e.clientY > rect.bottom - toleranceY.end
        ) {
          newPos.y = (e.clientY - rect.top - rect.height / 2) * sensitivity;
        }
      } else {
        newPos.x = (e.clientX - rect.left - rect.width / 2) * sensitivity;
        newPos.y = (e.clientY - rect.top - rect.height / 2) * sensitivity;
      }

      setPosition(newPos);
    };

    if (enabled) window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (enabled) window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return [position, element];
}

export default useMouseOffsetTransform;
