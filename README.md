# Bubble Tanks Arenas migration bootstrap

Этот репозиторий содержит декомпилированные исходники ActionScript (`scripts/**/*.as`).

Чтобы начать миграцию на TypeScript/Phaser 3, добавлен стартовый автоматический конвертер ActionScript -> TypeScript:

- Скрипт: `tools/as3-to-ts/convert-as3-to-ts.js`
- Тесты: `test/as3-to-ts-converter.test.js`

## Быстрый запуск

```bash
npm test
node tools/as3-to-ts/convert-as3-to-ts.js --input scripts --output migrated-ts
```

Dry-run (без записи файлов):

```bash
node tools/as3-to-ts/convert-as3-to-ts.js --input scripts --dry-run
```

## Что делает конвертер

- Конвертирует `class` в `export class`.
- Переносит поля `var/const` в TS-стиль с типами.
- Переносит сигнатуры методов/конструкторов и типы параметров.
- Преобразует локальные `var` в `let`.
- Добавляет в заголовок файла исходный `package` и список `import` для дальнейшей ручной доработки.

## Ограничения текущей версии

Это intentionally MVP-конвертер для ускоренного старта:

- не генерирует корректные ES `import` автоматически;
- не обрабатывает все edge-cases AS3 синтаксиса;
- не решает различия runtime Flash vs Phaser.

Следующий шаг: наращивать трансформации по результатам прогонов по `scripts/` и фиксировать регрессии тестами.
