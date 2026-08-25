declare module "d3-force-3d" {
  export function forceCollide(radius: number): {
    radius(value: number): unknown;
  };

  export function forceManyBody(): {
    strength(value: number): unknown;
    distanceMin(value: number): unknown;
    distanceMax(value: number): unknown;
  };
}
