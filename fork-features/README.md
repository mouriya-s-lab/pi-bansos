# pi-bansos fork features

This fork of [mannnrachman/pi-bansos](https://github.com/mannnrachman/pi-bansos) keeps Pi compatibility and adds the following fork-owned behavior.

## Bilingual `/bansos` UI

`extensions/i18n.ts` provides the environment-only `OMOMP_LANG` resolution used by the `/bansos` command and its status-bar entry. `OMOMP_LANG` wins when it is `en` or `zh` (case-insensitive, with surrounding whitespace ignored). Otherwise the first non-empty `LC_ALL`, `LC_MESSAGES`, or `LANG` selects `zh` for values beginning with `zh`, and `en` for every other value; the final fallback is `en`.

The command description, completion labels, menus, prompts, notifications, deployment progress, status report, and status-bar text resolve English or Simplified Chinese when each UI value is requested. Command names, model names, URLs, and saved relay labels remain unchanged. Pi-compatible loading is environment-only: this fork does not read an omp configuration file.
