/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
// src/types/env.d.ts (o donde tengas este archivo)
declare global {
    interface Window {
      dataLayer: any[];
    }
  }
  
  // Asegúrate de que el archivo se considere un módulo
  export {};
  