# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-11-09
### Added
- `AGENTS.md` contributor guide covering structure, scripts, and review expectations.
- Experience data source (`src/data/experiences.json`) plus `Experience` component rendering a vertical timeline with role metadata, badges, and hover states.
- Smooth-scroll infrastructure, section anchors, and new Experience navigation entry for quick access.

### Changed
- Header is now sticky with a translucent, blurred background and active link highlighting that tracks scroll position and user clicks.
- Navigation clicks scroll to sections with an offset to account for the sticky header, improving readability.
- Timeline visuals distinguish current roles with cyan markers and show employment type + location chips for every entry.

### Fixed
- Resolved structural issues in the Experience component markup, ensuring ESLint/TypeScript parsing succeeds.
