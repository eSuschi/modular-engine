# Modular Engine

Advanced modular 2D engine foundation with professional architecture.

Designed for clarity, long-term maintainability and clean dependency flow.

---

## Design Goals

- Strong module boundaries
- Unidirectional dependencies
- Explicit composition root
- Easy to test individual systems
- Ready for real products (games, interactive tools, visual systems)

## High-level Structure

```
src/
  core/                 # Pure domain & engine primitives
  systems/              # Engine systems (input, render, time, assets…)
  modules/              # Feature modules (self-contained)
  app/                  # Composition / bootstrap
  platform/             # Platform-specific adapters
```

## Core Principles

1. **Core never depends on systems or modules.**
2. Systems depend only on core and other carefully chosen systems.
3. Modules are optional and replaceable.
4. Side effects live at the edges.
5. The composition root wires everything explicitly.

## Current Status

Foundation stage. Architecture and folder conventions are established.
Concrete systems and modules will be added progressively.

See `docs/ARCHITECTURE.md` for detailed rules.
