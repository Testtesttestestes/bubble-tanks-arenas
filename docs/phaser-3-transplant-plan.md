# Phaser 3 migration plan ("Большая трансплантация")

Этот документ фиксирует практический план перехода от временных Flash-шимов к рабочему Phaser 3 runtime.

## Цель

1. Убрать зависимость runtime-кода от `flash-shims.d.ts`.
2. Превратить `BTAGameWorld` в реальную `Phaser.Scene`.
3. Перенести цикл `ENTER_FRAME` в `update(time, delta)`.
4. Перевести визуальные ассеты из Flash-таймлайна в форматы, совместимые с Phaser.

## Этап 1: Базовые классы и иерархия объектов

### 1.1 Карта соответствий Flash -> Phaser

- `MovieClip` -> `Phaser.GameObjects.Container` (логический контейнер) или `Phaser.GameObjects.Sprite` (если это один визуальный объект).
- `Sprite` (Flash) -> чаще всего `Phaser.GameObjects.Container` (для составных объектов) либо `Phaser.GameObjects.Sprite`.
- `addChild/removeChild` -> `container.add/remove` или `scene.add.existing`.
- `x/y/rotation/scaleX/scaleY/alpha/visible` -> одноимённые свойства Phaser-объектов.

### 1.2 Технический паттерн миграции классов

Для каждого migrated TS-класса, который сегодня `extends MovieClip|Sprite`:

1. Вводим промежуточный runtime-класс на Phaser.
2. Переносим конструктор так, чтобы принимать `scene: Phaser.Scene`.
3. Заменяем Flash API-вызовы на Phaser API (минимально-необходимый слой).
4. Удаляем зависимости от `flash-shims.d.ts` в migrated runtime-пути.

> Практика: начинать с leaf-классов (эффекты/мелкие виджеты), затем поднимать в более крупные классы.

## Этап 2: Адаптация `BTAGameWorld` в `Phaser.Scene`

### 2.1 Новая структура класса

- Было: `export class BTAGameWorld extends MovieClip`
- Станет: `export class BTAGameWorldScene extends Phaser.Scene`

Рекомендуемые lifecycle-методы:

- `init(data)` — входные параметры арены/игрока.
- `preload()` — загрузка атласов/анимаций/аудио.
- `create()` — инициализация мира, UI, событий.
- `update(time, delta)` — игровой тик.

### 2.2 Замена `ENTER_FRAME`

Flash-подписка:

- `addEventListener(Event.ENTER_FRAME, handler)`

Phaser-подход:

- Логика `handler` переносится в `update(time, delta)`.
- Используем `delta` для time-based логики (вместо frame-based).

Рекомендация по декомпозиции:

- `updatePlayer(delta)`
- `updateEffects(delta)`
- `updateAI(delta)`
- `updateUI(delta)`

## Этап 3: Графика и анимации

Phaser не исполняет Flash timeline напрямую, поэтому используем один из путей:

1. **Sprite Atlases**
   - экспорт кадров в PNG + JSON (TexturePacker или аналог);
   - регистрация в `preload()`;
   - создание `this.anims.create(...)`.

2. **Скелетные анимации**
   - Spine/DragonBones pipeline, если исходные ассеты и лицензии позволяют.

3. **Смешанный подход**
   - статические/простые эффекты через атласы;
   - сложные персонажи/боссы — через скелетный рантайм.

## Этап 4: Переходный слой совместимости

Чтобы не ломать всё одномоментно:

- оставляем `flash-shims.d.ts` только для legacy migrated-кода;
- новые/перенесённые runtime-модули складываем в отдельный Phaser-ориентированный путь;
- на каждом шаге уменьшаем поверхность, где требуется Flash API.

## Definition of Done (по этапам)

### DoD-1 (базовые классы)

- Не менее N ключевых runtime-классов больше не наследуются от `MovieClip|Sprite`.
- Для них отсутствуют прямые вызовы Flash display-list API.

### DoD-2 (`BTAGameWorld`)

- Основная игровая сцена запускается как `Phaser.Scene`.
- Основной игровой цикл работает в `update(time, delta)` без `ENTER_FRAME`.

### DoD-3 (графика)

- Минимум один полноценный gameplay-flow использует реальные Phaser ассеты/анимации.

## Ближайшие практические шаги

1. Создать `src/game/scenes/BTAGameWorldScene.ts` как каркас `Phaser.Scene`.
2. Перенести в него инициализацию состояния из конструктора `BTAGameWorld`.
3. Выделить старый frame-handler в набор `update*`-методов.
4. Выбрать первый мигрируемый ассет-пак (танк игрока + базовые эффекты).
5. Добавить smoke-test запуска сцены в dev-стенде.
