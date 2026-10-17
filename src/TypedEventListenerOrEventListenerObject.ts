/*!
 * typed-event-target — Strongly typed 0-dependency TypeScript
 * EventTarget module.
 * Copyright (C) 2026  Violation
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import type { TypedEventListener } from "./TypedEventListener.ts";
import type { TypedEventListenerObject } from "./TypedEventListenerObject.ts";

/**
 * Event listener callback or event listener object.
 * @typeParam E Event.
 */
export type TypedEventListenerOrEventListenerObject<E extends Event> =
  | TypedEventListener<E>
  | TypedEventListenerObject<E>;
