# Architecture Rules

## Dependency Direction

```
app  →  modules  →  systems  →  core
 ↓         ↓          ↓
platform adapters (only at the edges)
```

Never reverse these arrows.

## Core

Contains:
- Math & geometry primitives
- Entity / component interfaces (if used)
- Time, events and pure utility types
- No I/O, no rendering, no platform calls

## Systems

Responsible for one concern each:
- Input
- Time / scheduling
- Assets
- Rendering
- Audio (optional)
- Physics (optional)

Systems may depend on core and on other systems only when the dependency is justified and documented.

## Modules

Self-contained features or game/systems layers.
A module should be removable without breaking the rest of the engine.

## Composition Root (`app/`)

The only place that knows about concrete implementations and wires them together.

## Testing Strategy

- Core and pure systems: unit tests
- Integration tests at the composition level
- Modules can be tested in isolation with mocked systems
