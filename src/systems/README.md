# Systems

Each system is responsible for one clear engine concern.

Recommended initial systems:
- `TimeSystem`
- `InputSystem`
- `AssetSystem`
- `RenderSystem`

Systems depend only on `core` and on other systems when necessary.
