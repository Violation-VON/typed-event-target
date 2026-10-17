# typed-event-target

[![Documentation](https://img.shields.io/badge/Documentation-blue)](https://violation-von.github.io/typed-event-target)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github)](https://github.com/Violation-VON/typed-event-target)
[![NPM](https://img.shields.io/npm/v/typed-events-target.svg)](https://www.npmjs.com/package/typed-events-target)
[![Downloads](https://img.shields.io/npm/d18m/typed-events-target.svg)](https://www.npmjs.com/package/typed-events-target)
[![Licence](https://img.shields.io/github/license/Violation-VON/typed-event-target)](https://github.com/Violation-VON/typed-event-target/blob/main/COPYING)
[![JSR Score](https://jsr.io/badges/@von/typed-event-target/score)](https://jsr.io/@von/typed-event-target)
[![CI](https://github.com/Violation-VON/typed-event-target/actions/workflows/ci.yaml/badge.svg)](https://github.com/Violation-VON/typed-event-target/actions/workflows/ci.yaml)

Strongly typed 0-dependency TypeScript `EventTarget` module.

[**Documentation — API Reference**](https://violation-von.github.io/typed-event-target)

## Get Started

### Node.js

```
npm i typed-events-target
```

```ts
import { TypedEvent, TypedEventTarget } from "typed-events-target";
```

### Deno

```
deno add jsr:@von/typed-event-target
```

```ts
import { TypedEvent, TypedEventTarget } from "@von/typed-event-target";
```

## Usage

```ts
type FooEvent = TypedEvent<"foo", string>;
type BarEvent = TypedEvent<"bar", number>;

class ExampleTarget extends TypedEventTarget<FooEvent | BarEvent> {
  public emit(): void {
    this.dispatchEvent("foo", "value");
    this.dispatchEvent("bar", 42);
  }
}

const target = new ExampleTarget();

target.addEventListener("foo", (evt) => console.log(evt.detail));
target.addEventListener("bar", (evt) => console.log(evt.detail));

target.emit();
```

## Licence

Copyright © 2026 Violation.

This project is licensed under the terms of the
[GPL-3.0](https://github.com/Violation-VON/typed-event-target/blob/main/COPYING)
licence.
