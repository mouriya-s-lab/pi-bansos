export type Language = "en" | "zh";

/** The environment variable that explicitly selects the UI language. */
export const LANGUAGE_ENV = "OMOMP_LANG";

function resolveLanguage(env: Readonly<Record<string, string | undefined>>): Language {
	const explicit = env[LANGUAGE_ENV]?.trim().toLowerCase();
	if (explicit === "en" || explicit === "zh") return explicit;

	for (const key of ["LC_ALL", "LC_MESSAGES", "LANG"] as const) {
		const value = env[key]?.trim();
		if (value) return value.toLowerCase().startsWith("zh") ? "zh" : "en";
	}
	return "en";
}

/** Resolve the current process environment at the time the UI asks for it. */
export function language(): Language {
	return resolveLanguage(process.env);
}

/** Choose the English or Simplified Chinese text for the current UI language. */
export function tr(en: string, zh: string): string {
	return language() === "zh" ? zh : en;
}
