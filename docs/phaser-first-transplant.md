# Первая «трансплантация»: `effect_Massive_Bullet_125`

Стартовый миграционный объект выбран как leaf-класс из Flash timeline:

- Source AS3: `scripts/BTA_fla/effect_Massive_Bullet_125.as`
- Phaser target: `src/game/entities/effects/MassiveBulletEffect.ts`

## Почему именно он

1. Почти нет бизнес-логики.
2. Нет зависимостей от физики/AI.
3. В Flash-коде единственное runtime-действие — `stop()` на первом кадре.

## Что уже подготовлено

1. Каркас сцены-обертки: `BTAGameWorldScene`.
2. Переходный адаптер мира: `LegacyBTAGameWorldAdapter`.
3. Flash-совместимый базовый контейнер: `BaseEntity`.
4. Первый Phaser-класс эффекта: `MassiveBulletEffect`.

## Следующий шаг

Подключить `MassiveBulletEffect` в адаптер мира (или в тестовую сцену) и загрузить
его текстуру через `this.load.atlas(...)` / `this.load.spritesheet(...)`.
