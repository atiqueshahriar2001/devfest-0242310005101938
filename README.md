# Smart Escape

Smart Escape is a frontend-only evacuation route simulator built for the AI DevFest practice challenge.

## Identity and links

- Name: MD. Atique Shahriar
- Registration number: 0242310005101938
- Live site: https://devfest-0242310005101938-production.up.railway.app
- Repository: https://github.com/atiqueshahriar2001/devfest-0242310005101938?tab=readme-ov-file

## Run locally

Open `index.html` in a modern browser. The sample map is in `building.json`. If your browser restricts local JSON loading, run a static server from this folder (for example, `python -m http.server 8000`) and visit `http://localhost:8000`.

Import another JSON file with the Import JSON button. The app validates required fields, node and edge IDs, endpoint references, categories, costs, and initial-state IDs. It displays validation errors in the interface.

## Implemented features

- Interactive, coordinate-based map with distinct room, junction, and exit symbols; visible corridor costs; route highlighting; blocked and closed states.
- Select a room or junction and calculate a minimum total edge-cost route to an open exit.
- Deterministic ties: lowest exit ID, then lexicographically lowest node ID sequence.
- Toggle blocked locations, blocked corridors, and closed exits. Recalculation happens immediately.
- Reset to the imported file's original initial state.
- English and Bangla interface modes, responsive layout, zoom controls, and a short usage guide.
- Sample graph matches the reference checks: R1 to E1 costs 7, blocking C2 gives R1–C1–C3–C4–E2 at cost 11, and R2 to E2 costs 7.

## Bonus features

- Interactive map nodes and corridors can be selected directly to change the start or corridor state.
- Local sample JSON download and drag-free local file import.
- Accessible status messages and keyboard operation for map nodes.

## Known issues

- Map coordinates are fitted to the available map area; unusually dense maps can have overlapping node labels.
- The interface is an educational simulation and is not certified for real-world evacuation planning.
- No public deployment URL, participant identity, repository URL, or screenshots are included in this starter workspace; add these before official submission.

## AI tools and most useful prompt

- AI tools: OpenAI Codex.
- Most useful prompt: “Build a frontend-only interactive evacuation route simulator that validates imported building JSON, computes deterministic minimum-cost routes, updates when locations, corridors, and exits are toggled, supports English and Bangla, and resets to the imported initial state.”

## Input schema

The JSON object has a non-empty `building` name, `nodes` with unique `id`, non-empty `label`, `type` (`room`, `junction`, or `exit`), numeric `x` and `y`; `edges` with unique `id`, valid `from` and `to`, and positive integer `cost`; and `initial_state` arrays named `blocked_nodes`, `blocked_edges`, and `closed_exits`.
