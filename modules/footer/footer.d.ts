// footer.d.ts or types/global.d.ts
declare global {
  interface Window {
    optimeleon?: (event: string, label: string) => void;
  }
}

export {}; // Required for the file to be treated as a module
