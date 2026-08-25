declare module "d3-force-3d" {
  type Force = ((alpha: number) => void) & {
    initialize?: (...args: any[]) => void;
  };

  export function forceCollide(radius: number): Force & {
    radius(value: number): Force;
  };

  export function forceManyBody(): Force & {
    strength(value: number): Force;
    distanceMin(value: number): Force;
    distanceMax(value: number): Force;
  };
}
