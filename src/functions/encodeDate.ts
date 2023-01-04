export const encodeDate = (s: string): string =>
	s.replaceAll(' ', '_').replaceAll(':', '-') + '__';
