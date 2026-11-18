// Vitest (Vite) provides import.meta.glob; vite is not a direct dependency,
// so its types are declared here for the one use in the tests.
interface ImportMeta {
  glob<T>(pattern: string, options: { eager: true }): Record<string, T>;
}
