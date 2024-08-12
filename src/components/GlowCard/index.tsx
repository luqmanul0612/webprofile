import { CSSProperties, FC, useEffect, useRef } from "react";
import classNames from "./glow-card.module.scss";
import clsx from "clsx";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "default" | "large";
};

const GlowCard: FC<GlowCardProps> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.onmousemove = function (e) {
        const x = e.pageX - mainRef.current!.offsetLeft;
        const y = e.pageY - mainRef.current!.offsetTop;
        mainRef.current!.style.setProperty("--x", x + "px");
        mainRef.current!.style.setProperty("--y", y + "px");
      };
    }
  }, []);

  return (
    <div
      ref={mainRef}
      className={clsx(classNames.main, props.className ?? "")}
      style={{ "--glow-color": "#83bbff" } as CSSProperties}
      data-size={props.size ?? "default"}
    >
      <div className={classNames.content}>{props.children}</div>
    </div>
  );
};

export default GlowCard;
