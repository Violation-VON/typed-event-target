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
/**
 * Custom event with a typed type and detail.
 * @typeParam T Event type.
 * @typeParam D Event detail.
 */
export class TypedEvent<T extends string, D> extends CustomEvent<D> {
  declare public readonly type: T;

  /**
   * Creates a new event.
   * @param type Event type.
   * @param init Event init options.
   */
  public constructor(type: T, init?: CustomEventInit<D>) {
    super(type, init);
  }
}
