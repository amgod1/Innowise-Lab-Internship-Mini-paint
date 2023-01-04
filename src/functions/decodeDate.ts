export const decodeDate = (s: string): string =>
	s.replaceAll('_', ' ').replaceAll('-', ':');
