declare module "d3-force-3d" {
  type Force = ((alpha: number) => void) & {
    initialize?: (...args: any[]) => void;
  };

  type ForceCollide = Force & {
    radius(value: number): ForceCollide;
  };

  type ForceManyBody = Force & {
    strength(value: number): ForceManyBody;
    distanceMin(value: number): ForceManyBody;
    distanceMax(value: number): ForceManyBody;
  };

  export function forceCollide(radius: number): ForceCollide;
  export function forceManyBody(): ForceManyBody;
}
