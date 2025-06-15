import type { DeleteParams } from "./types";

export function onDelete({ id, setWays }: DeleteParams) {
  setWays((prev) => prev.filter((way) => way.id !== id));
}
