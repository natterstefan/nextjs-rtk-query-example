/// <reference types="next" />
/// <reference types="next/types/global" />

type NextConfig = {
  publicRuntimeConfig: {
    NODE_ENV: string
  }
  serverRuntimeConfig: Record<string, unknown>
}

declare module 'next/config' {
  export declare function setConfig(configValue: any): void
  export default function getConfig(): NextConfig
}
