// TODO (Task 2): import { useState, useEffect } from 'react';

/*
 * TODO (Task 2): Implement a custom `useDebounce` hook.
 *
 * Signature:
 *   const debouncedValue = useDebounce(value, delay);
 *
 * Behavior:
 *   - Returns `value` only after it has stopped changing for `delay` milliseconds.
 *   - Must clean up the previous timer on every change (use the cleanup function
 *     returned from useEffect with clearTimeout).
 *
 * Hint:
 *   - useState to hold the debounced value
 *   - useEffect with [value, delay] as deps
 *   - setTimeout + cleanup with clearTimeout
 *
 * Until you implement it, this stub simply returns the value unchanged so the
 * app still boots without errors.
 */
export default function useDebounce(value /* , delay */) {
  // TODO (Task 2): replace this stub with the real debounce implementation.
  return value;
}
