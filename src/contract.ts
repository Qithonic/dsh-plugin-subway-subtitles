/**
 * Shared wire contract between host (Claude Code / src/runtime) and client (Antigravity / src/client).
 * Update this file before changing API payloads across host and client.
 */
export interface PluginStatus {
  ready: boolean
  version: string
}
