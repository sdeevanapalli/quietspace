# Contributing to QuietSpace

This guide documents contribution expectations for this repository.

Important scope note:
Timetable extraction and data processing are done in a separate analysis repository.
This QuietSpace repository receives the final generated 2D array via pull request.

## Data Handoff Flow

1. Data maintainer processes the latest timetable in the analysis repo: https://github.com/sdeevanapalli/quietspace_data_analysis
2. Data maintainer generates the final 2D array output.
3. Data maintainer opens a PR in this repo that updates the array in `script.js`.

Recommended for the analysis repo:
keep backups of each raw timetable export because timetable corrections can arrive after semester start.

## What to Change in This Repo

- Update only the generated 2D array in `script.js` for timetable refresh PRs.
- Update the timetable status note in `index.html` (current semester, timetable revision, last updated date).
- Keep timetable metadata in `index.html` and `aboutme.html` consistent.
- Do not change array shape expected by the app.
- Keep unrelated UI/content/code changes out of timetable-only PRs.

If room exclusions were applied during analysis (for example, restricted rooms/labs), explain them in the PR notes.

## Versioning Convention

Use timetable versioning in `aboutme.html` and in PR notes:

- `x.y.z`

Meaning:

- `x`: increment once per semester
- `y`: increment for timetable revision changes
- `z`: increment for fixes and minor improvements

## Pull Request Checklist

Before opening a PR:

- Confirm only intended data update changes are included.
- Confirm generated array matches current timetable intent.
- Confirm output shape is unchanged for the app consumer code.
- Update `index.html` note with:
   - current semester and year
   - timetable revision level
   - website/timetable last updated date
- Update `aboutme.html` with:
   - version number (`x.y.z`)
   - semester and year
   - timetable revision level
   - update date
- Test locally before publishing.

## Contribution Quality Expectations

- Keep commits focused and readable.
- Explain any manual room exclusions in PR notes.
- Do not break existing output shape expected by the main app.
- Prefer deterministic, reproducible script changes.
