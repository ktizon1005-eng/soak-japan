// Site-wide settings. Rename the site here.
export const SITE_TITLE = 'Soak Japan';
export const SITE_DESCRIPTION =
	'Plain-English guides to Japanese onsen and sento: tattoo rules, private baths, etiquette and where to go.';
export const AUTHOR = 'Taizo';

// Prefix internal links with the deploy base path (e.g. /soak-japan/ on GitHub Pages).
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
