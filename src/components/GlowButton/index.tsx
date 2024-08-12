import React, { CSSProperties, ReactElement } from "react";
import classNames from "./button.module.scss";
import { useMergeRefs } from "../../utils/hooks/use-merge-ref";
import clsx from "clsx";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "text" | "icon";
  type?: "button" | "submit";
  fullWidth?: boolean;
  disabled?: boolean;
  particles?: number;
  playAnimationOnMobile?: boolean;
  isIcon?: boolean;
  endIcon?: ReactElement | null;
  playAnimation?: boolean;
};

export interface TParticle {
  key: number;
  size: number;
  y: number;
  x: number;
  duration: number;
  delay: number;
  alpha: number;
  originX: string;
  originY: string;
}

const GlowButton = React.forwardRef<Partial<HTMLButtonElement>, ButtonProps>(
  (props, ref) => {
    const {
      variant,
      particles: numOfParticles,
      playAnimationOnMobile,
      className,
      fullWidth,
      isIcon,
      playAnimation,
      ...rest
    } = props;
    const internalRef = React.useRef<HTMLButtonElement | null>(null);
    const buttonRef = useMergeRefs(ref, internalRef);

    const RANDOM = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1) + min);

    const particles: TParticle[] = React.useMemo(
      () =>
        new Array(numOfParticles).fill(0).map((val, idx) => {
          const origin =
            variant === "icon"
              ? () => RANDOM(500, 800)
              : () => RANDOM(600, 900);
          return {
            key: val + idx,
            size: RANDOM(20, 60) / 100,
            x: RANDOM(60, 100),
            y: RANDOM(60, 100),
            duration: RANDOM(6, 20),
            delay: RANDOM(1, 10),
            alpha: RANDOM(20, 90) / 100,
            originX: `${Math.random() > 0.5 ? origin() * -1 : origin()}%`,
            originY: `${Math.random() > 0.5 ? origin() * -1 : origin()}%`,
          };
        }),
      [numOfParticles, variant]
    );

    return (
      <button
        {...rest}
        ref={buttonRef}
        data-play-on-mobile={playAnimationOnMobile ? "true" : "false"}
        className={clsx(
          classNames.main,
          {
            [classNames.fullWidth]: fullWidth,
            [classNames.isIcon]: isIcon,
            [classNames.playAnimation]: playAnimation,
          },
          className
        )}
      >
        {props.children}
        <div className={classNames.particles}>
          {particles.map((par) => (
            <div
              className={classNames.particle}
              key={par.key}
              style={
                {
                  "--size": par.size,
                  "--data-x": par.x,
                  "--y": par.y,
                  "--alpha": par.alpha,
                  "--delay": par.delay,
                  "--duration": par.duration,
                  "--originX": par.originX,
                  "--originY": par.originY,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </button>
    );
  }
);

GlowButton.defaultProps = {
  disabled: false,
  fullWidth: false,
  variant: "text",
  type: "button",
  particles: 5,
  playAnimationOnMobile: false,
};

export default GlowButton;
