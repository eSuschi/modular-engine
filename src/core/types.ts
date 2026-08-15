/**
 * Core primitive types for the modular engine.
 * These must remain free of any platform or system dependencies.
 */

export type EntityId = number;

export interface Vector2 {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface TimeState {
  /** Total elapsed time in seconds since engine start */
  elapsed: number;
  /** Delta time for the current frame in seconds */
  delta: number;
  /** Fixed timestep (if used) */
  fixedDelta?: number;
}

export type EventHandler<T = unknown> = (payload: T) => void;
