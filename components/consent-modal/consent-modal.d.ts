declare global {
  interface Window {
    optimeleon?: (verb: string, ...args: unknown[]) => unknown;
  }
}

export {}; // Required for the file to be treated as a module
