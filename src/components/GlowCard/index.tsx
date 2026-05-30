import { CSSProperties, FC, useRef } from "react";
import classNames from "./glow-card.module.scss";
import clsx from "clsx";
import { useGlowCard } from "../../utils/zustand/glowCard";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "default" | "large";
};

const GlowCard: FC<GlowCardProps> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { color } = useGlowCard();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = mainRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mainRef.current!.style.setProperty("--x", x + "px");
    mainRef.current!.style.setProperty("--y", y + "px");
  };

  return (
    <div
      ref={mainRef}
      className={clsx(classNames.main, props.className ?? "")}
      style={{ "--glow-color": color } as CSSProperties}
      data-size={props.size ?? "default"}
      onMouseMove={handleMouseMove}
    >
      <div className={classNames.content}>{props.children}</div>
    </div>
  );
};

export default GlowCard;
