/**
 * No-op analytics stubs for the open-source build.
 * The SaaS version uses Segment; this module satisfies all imports
 * without requiring any analytics dependency.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

export type TrackEventParams = {
  pageName?: string;
  eventName?: string;
  searchProperties?: Record<string, unknown>;
  additionalProperties?: Record<string, unknown>;
  [key: string]: unknown;
};

export function trackPageView(..._args: unknown[]) {}
export function trackPageEvent(..._args: unknown[]) {}
export function trackEvent(_params: TrackEventParams): void {}
export function identifyUser(..._args: unknown[]) {}
export function getSessionId() { return ""; }
export function getSessionOrigin() { return ""; }
export function refreshSessionActivity() {}
export function getAnonymousId() { return ""; }
export function setAnonymousId(_id: string) {}

// React components used in layouts
export function TrackPageView(_props: {
  page?: string;
  searchProperties?: unknown;
  additionalProperties?: Record<string, unknown>;
}) { return null; }
export function TrackPageEvent(_props: Record<string, unknown>) { return null; }
export function IdentifyUser() { return null; }
