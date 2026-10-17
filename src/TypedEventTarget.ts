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
import { TypedEvent } from "./TypedEvent.ts";
import type { TypedEventListenerOrEventListenerObject } from "./TypedEventListenerOrEventListenerObject.ts";

/**
 * Event target for events of type `E`.
 * @typeParam E Supported events type.
 */
export class TypedEventTarget<
  E extends TypedEvent<string, unknown>,
> {
  private readonly target = new EventTarget();

  /**
   * Appends an event listener for events of the given type.
   * @param type Event type.
   * @param listener Listener to append.
   * @param options Listener options.
   */
  public addEventListener<K extends E["type"]>(
    type: K,
    listener:
      | TypedEventListenerOrEventListenerObject<Extract<E, { type: K }>>
      | null,
    options?: boolean | AddEventListenerOptions,
  ): void {
    if (!listener) return;

    this.target.addEventListener(
      type,
      listener as EventListenerOrEventListenerObject,
      options,
    );
  }

  /**
   * Removes an event listener for events of the given type.
   * @param type Event type.
   * @param listener Listener to remove.
   * @param options Listener options.
   */
  public removeEventListener<K extends E["type"]>(
    type: K,
    listener:
      | TypedEventListenerOrEventListenerObject<Extract<E, { type: K }>>
      | null,
    options?: boolean | EventListenerOptions,
  ): void {
    if (!listener) return;

    this.target.removeEventListener(
      type,
      listener as EventListenerOrEventListenerObject,
      options,
    );
  }

  /**
   * Dispatches a new event of the given type.
   * @param type Event type.
   * @param detail Event detail.
   * @param init Event init options.
   * @returns `false` if the event was cancelled, otherwise `true`.
   */
  protected dispatchEvent<T extends E["type"]>(
    type: T,
    detail: Extract<E, { type: T }>["detail"],
    init?: Omit<CustomEventInit<Extract<E, { type: T }>["detail"]>, "detail">,
  ): boolean;

  /**
   * Dispatches the given event.
   * @param event Event to dispatch.
   * @returns `false` if the event was cancelled, otherwise `true`.
   */
  protected dispatchEvent(event: E): boolean;

  protected dispatchEvent(
    typeOrEvent: E | E["type"],
    detail?: unknown,
    init?: CustomEventInit<unknown>,
  ): boolean {
    if (arguments.length === 1) {
      return this.target.dispatchEvent(typeOrEvent as E);
    }

    return this.target.dispatchEvent(
      new TypedEvent(typeOrEvent as E["type"], {
        ...init,
        detail,
      }),
    );
  }
}
