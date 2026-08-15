# Architecture Rules

## Dependency Direction (Strict)

```
app  →  modules  →  systems  →  core
 ↓         ↓          ↓
platform adapters only at the edges
```

Reversing any of these arrows is forbidden.

## Core Responsibilities

- Pure data structures and algorithms
- Math / geometry primitives
- Time and event abstractions (no side effects)
- Interfaces that systems and modules depend on

Core must remain free of I/O, rendering, audio, networking and platform APIs.

## Systems

Each system owns one clear concern:
- Input
- Time / Clock
- Assets
- Rendering
- Audio (optional)
- Physics (optional)

Systems may depend on `core` and on other systems only when the dependency is intentional and documented.

## Modules

Feature-level or game-level building blocks.  
A module should be removable without breaking the rest of the engine.

## Composition Root (`src/app`)

The only place that knows concrete implementations and wires the graph together.

## Testing Strategy

- Core + pure logic → unit tests
- Systems → unit + integration tests with mocked dependencies
- Full engine → composition-level tests
