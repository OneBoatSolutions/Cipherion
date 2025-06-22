import { useRef, useEffect, CSSProperties } from "react";

interface LetterGlitchProps {
  /** visual options */
  glitchColors?: string[];
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;

  /** style overrides */
  containerClassName?: string;
  containerStyle?: CSSProperties;
  canvasClassName?: string;
  canvasStyle?: CSSProperties;
}

const LetterGlitch = ({
  /* behaviour */
  glitchColors = ["#2b4539", "#61dca3", "#61b3dc"],
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,

  /* style overrides */
  containerClassName = "",
  containerStyle: userContainerStyle = {},
  canvasClassName = "",
  canvasStyle: userCanvasStyle = {},
}: LetterGlitchProps) => {
  /* refs ------------------------------------------------------------------ */
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const letters = useRef<
    { char: string; color: string; targetColor: string; colorProgress: number }[]
  >([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const lastGlitchTime = useRef(Date.now());

  /* constants -------------------------------------------------------------- */
  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  /* helpers ---------------------------------------------------------------- */
  const lettersAndSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789".split(
    ""
  );
  const rand = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
  const getRandomChar = () => rand(lettersAndSymbols);
  const getRandomColor = () => rand(glitchColors);

  const hexToRgb = (hex: string) => {
    const shorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthand, (_, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const interpolateColor = (
    start: { r: number; g: number; b: number },
    end: { r: number; g: number; b: number },
    factor: number
  ) =>
    `rgb(${Math.round(start.r + (end.r - start.r) * factor)},${Math.round(
      start.g + (end.g - start.g) * factor
    )},${Math.round(start.b + (end.b - start.b) * factor)})`;

  const calculateGrid = (w: number, h: number) => ({
    columns: Math.ceil(w / charWidth),
    rows: Math.ceil(h / charHeight),
  });

  const initLetters = (columns: number, rows: number) => {
    grid.current = { columns, rows };
    letters.current = Array.from({ length: columns * rows }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
    }));
  };

  /* sizing / drawing ------------------------------------------------------- */
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const { width: w, height: h } = parent.getBoundingClientRect();

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    context.current?.setTransform(dpr, 0, 0, dpr, 0, 0);

    const { columns, rows } = calculateGrid(w, h);
    initLetters(columns, rows);
    drawLetters();
  };

  const drawLetters = () => {
    if (!context.current) return;
    const ctx = context.current;
    const { width: w, height: h } = canvasRef.current!.getBoundingClientRect();
    ctx.clearRect(0, 0, w, h);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = "top";

    letters.current.forEach(({ char, color }, i) => {
      const x = (i % grid.current.columns) * charWidth;
      const y = Math.floor(i / grid.current.columns) * charHeight;
      ctx.fillStyle = color;
      ctx.fillText(char, x, y);
    });
  };

  const updateLetters = () => {
    const count = Math.max(1, Math.floor(letters.current.length * 0.05));
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(Math.random() * letters.current.length);
      const l = letters.current[idx];
      l.char = getRandomChar();
      l.targetColor = getRandomColor();
      smooth ? (l.colorProgress = 0) : ((l.color = l.targetColor), (l.colorProgress = 1));
    }
  };

  const handleSmoothTransitions = () => {
    let redraw = false;
    letters.current.forEach((l) => {
      if (l.colorProgress < 1) {
        l.colorProgress = Math.min(1, l.colorProgress + 0.05);
        const start = hexToRgb(l.color);
        const end = hexToRgb(l.targetColor);
        if (start && end) {
          l.color = interpolateColor(start, end, l.colorProgress);
          redraw = true;
        }
      }
    });
    if (redraw) drawLetters();
  };

  const animate = () => {
    if (Date.now() - lastGlitchTime.current >= glitchSpeed) {
      updateLetters();
      drawLetters();
      lastGlitchTime.current = Date.now();
    }
    if (smooth) handleSmoothTransitions();
    animationRef.current = requestAnimationFrame(animate);
  };

  /* lifecycle -------------------------------------------------------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    context.current = canvas.getContext("2d");
    resizeCanvas();
    animate();

    let resizeTimer: NodeJS.Timeout;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cancelAnimationFrame(animationRef.current as number);
        resizeCanvas();
        animate();
      }, 100);
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animationRef.current as number);
      window.removeEventListener("resize", onResize);
    };
    // glitchSpeed & smooth are dependencies here
  }, [glitchSpeed, smooth]);

  /* merged styles ---------------------------------------------------------- */
  const mergedContainerStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    overflow: "hidden",
    ...userContainerStyle, // <- YOUR overrides win
  };

  const mergedCanvasStyle: CSSProperties = {
    display: "block",
    width: "100%",
    height: "100%",
    ...userCanvasStyle, // <- YOUR overrides win
  };

  /* optional vignette layers ---------------------------------------------- */
  const outerVignetteStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: "radial-gradient(circle, transparent 30%, #02010f 60%)",
  };

  const centerVignetteStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: "radial-gradient(circle, rgba(0,0,0,0.8) 0%, transparent 60%)",
  };

  /* render ----------------------------------------------------------------- */
  return (
    <div className={containerClassName} style={mergedContainerStyle}>
      <canvas ref={canvasRef} className={canvasClassName} style={mergedCanvasStyle} />
      {outerVignette && <div style={outerVignetteStyle} />}
      {centerVignette && <div style={centerVignetteStyle} />}
    </div>
  );
};

export default LetterGlitch;
