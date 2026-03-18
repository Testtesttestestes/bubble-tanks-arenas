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

## Конвертация AGI decomp (без SWF `loadBytes`)

AGI теперь можно конвертировать напрямую из декомпилированного дерева
`binaryData/AGI decomp/scripts` в отдельный TS-модуль внутри `migrated-ts/agi`:

```bash
npm run convert:agi
```

После этого `class_79.ts` инициализирует AGI как обычный TS-класс (`new AGI()`),
без загрузки старого SWF-бинарника через `loadBytes(new AgiClass())`.

## Pipeline для ручного "лечения" конвертированных TS-файлов

Для итеративного восстановления автоконверта (ошибки сигнатур, потерянные поля,
неверные `this`, скобки, и т.д.) добавлен единый пайплайн:

```bash
npm run pipeline:heal
```

Он запускает конвертацию + автофиксы, собирает статистику tsc-ошибок, перестраивает
runtime-манифест и проверяет браузерную сборку. Детальный workflow:
`docs/manual-ts-healing-pipeline.md`.

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


## Pipeline запуска migrated-ts в Phaser

Добавлен генератор runtime-манифеста: `tools/phaser-pipeline/build-migrated-manifest.js`.

Он:
- сканирует `migrated-ts/**/*.ts`;
- строит карту классов, зависимостей и кандидатов ассетов из `images/`, `sprites/`, `frames/`;
- пишет результат в `src/game/runtime/generated/migrated-manifest.json`.

Дальше `BTAGameWorldScene` использует `MigratedPhaserPipeline`, чтобы preload-ить ассеты для ключевых классов (`class_113`, `class_90`, `class_89`) с оригинальными ссылками на файлы.

Команды:

```bash
npm run build:migrated-manifest
npm run dev
```

## Локальный запуск Phaser-сцены

Добавлен минимальный bootstrap для запуска `BTAGameWorldScene` в браузере через Vite:

```bash
npm install
npm run dev
```

Точка входа: `src/main.ts`, HTML-контейнер: `index.html`.
