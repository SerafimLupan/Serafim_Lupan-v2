import { useMatrixRain } from "@/hooks/use-matrix-rain";

export function MatrixBackground() {
  const canvasRef = useMatrixRain();

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-[0.07] pointer-events-none"
    />
  );
}
