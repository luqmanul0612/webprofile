import { ArrowDownToLineIcon } from "lucide-react";
import { downloadFile } from "../../utils/helpers/downloadFile";
import classNames from "./resume-button.module.scss";
import { useGlowCard } from "../../utils/zustand/glowCard";
import { CSSProperties, useMemo } from "react";

const ResumeBtn = () => {
  const { defaultColor, setColor } = useGlowCard();

  const RANDOM = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const particles = useMemo(
    () =>
      new Array(15).fill(0).map((val, idx) => {
        const origin = () => RANDOM(600, 900);
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
    []
  );

  return (
    <button
      className={classNames.main}
      onMouseEnter={() => setColor("#f43f5e")}
      onMouseLeave={() => setColor(defaultColor)}
      onClick={() => downloadFile("cv-luqman-13-08-2024.pdf")}
    >
      CV
      <ArrowDownToLineIcon size={20} />
      <div className={classNames.background}>
        <div className={classNames.lightbtn1} />
        <div className={classNames.lightbtn2} />
      </div>
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
};

export default ResumeBtn;
