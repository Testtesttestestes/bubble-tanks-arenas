# Bubble Tanks Arenas migration bootstrap

Этот репозиторий содержит декомпилированные исходники ActionScript (`scripts/**/*.as`).

Чтобы начать миграцию на TypeScript/Phaser 3, добавлен автоматический конвертер ActionScript -> TypeScript и типовые flash-заглушки:

- Скрипт: `tools/as3-to-ts/convert-as3-to-ts.js`
- Заглушки API: `flash-shims.d.ts`
- Тесты: `test/as3-to-ts-converter.test.js`

## Быстрый запуск

```bash
npm test
node tools/as3-to-ts/convert-as3-to-ts.js --input scripts --output migrated-ts
cp flash-shims.d.ts migrated-ts/flash-shims.d.ts
```

## Что делает конвертер

- Удаляет `package`, `import`, метаданные и `use namespace`.
- Конвертирует `class` / `interface` в `export class` / `export interface`.
- Переносит поля `var/const` и сигнатуры методов в TS-стиль с типами.
- Конвертирует `trace(...)` в `console.log(...)`.
- Поддерживает `Vector.<T>`, `for each`, `is`, `as` и локальные `var` -> `let`.
- Добавляет заголовок с исходным `package`.

## Что делает `flash-shims.d.ts`

`flash-shims.d.ts` объявляет базовые классы Flash API (`MovieClip`, `Sprite`, `Event`, `ByteArray` и др.), чтобы сгенерированные `.ts` файлы корректно линковались TypeScript-компилятором до фактического переноса runtime-логики на Phaser 3.

## План следующего этапа (Phaser 3)

Подробный план «Большой трансплантации» вынесен в `docs/phaser-3-transplant-plan.md` (базовые классы, перенос `BTAGameWorld` в `Phaser.Scene`, миграция `ENTER_FRAME` -> `update`, стратегия по ассетам).
