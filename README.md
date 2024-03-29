# ir1
Методи інформаційного пошуку

## Практичне 1. Словник

https://distedu.ukma.edu.ua/mod/assign/view.php?id=6234

Написати програму, що по заданій колекції текстових файлів будує словник термінів.

1. Текстові файли подаються на вхід в будь-якому форматі. +
1. Розмір текстових файлів не менше 150 К. +
1. Кількість текстових файлів не менше 10. +
1. Словник термінів зберегти на диск. +
1. Оцінити розмір колекції, загальну кількість слів в колекції та розмір словника.
- кількість неунікальних термінів 793 663
- кількість унікальних термінів   28 274
- кількість унікальних термінів після стемінгу  17 005
- терміни займають 214 486 байт
- терміни у файлі займають 242 759 байт
1. Обгрунтувати структуру даних
- текстовий файл, у якому всі слова записані у алфавітному порядку, через кому.
    Займає мінімум дискового просторору, але незручно для подальшого вдосконалення. 
1. Зробити оцінку складності алгоритму. Складність алгоритму найбільше залежить від кількості слів.
- Викорситовується дві прості регулярки, які відкидають зайві символи, будемо вважати, що складність кожної O(n)
- Розділення по пробілу, також проста операція O(n)
- Фільтрація по довжині слова також O(n)
- Приведення до нижнього регістру O(n)
- Знаходження унікальних термінів O(n log n)
- Сортування термінів O(n log n)
- Загальна оцінка: 5 * O(n) + 2 * O(n log n)
- На великих масивах данних можна значно покращити швидкість, якщо об'єднати операції знаходження унікальних термінів і сортування в алфавітному порядку.
1. Випробувати декілька форматів збереження словника (серіалізація словника, збереження в текстовий файл і т.д.) і порівняти результати.
- при збереженні термінів у файл через кому, вони займають 242 759 байт
- Серіалізація в js досить ефективана, але буде додавати до кожного терміну ще "", для 28 274
 термінів це 56 548 байт, що збільщить розмір файлу на 23%.
 Проте серіалізація дозволяє записувати більш складні структури і простіша у подальшому читанні інформації з диску.

## Практичне 2. Булевий пошук

https://distedu.ukma.edu.ua/mod/assign/view.php?id=6235

По заданій колекції (10 документів по 150К) документів побудувати:
- матрицю інцидентності "термін-документ"
  - ```yarn make-incidence-matrix ```
- інвертований індекс
  - ``` yarn make-inverted-index ``` 
- Обгрунтуйте обрані структури збереження даних в розрізі їх ефективності при збільшенні об'ємів даних.
  - json досить мінімалістичний і компактний формат, крім того з ним дуже легко працювати, його
   підтримують практично всі мови програмування і дуже велика кількість баз данних.
- Порівняти розмір структур, що вийшли.
  - Матриця інцидентності займає 800 КБ, тоді як інвертований індекс займає майже 9 МБ.
- Зробити булевий пошук по цим структурам (по обом). Оператори: AND, OR, NOT
. Формат в запиті на власний розсуд.
  - ``` yarn test ```

## Практичне зайняття 3. Двословний індекс і координатний інвертований індекс

https://distedu.ukma.edu.ua/mod/assign/view.php?id=6237

- Побудувати двословний індекс і координатний інвертований індекс по колекції документів.
  - ``` yarn make-coordinate-index ```
  - ``` yarn make-inverted-index ``` 
- Реалізувати фразовий пошук та пошук з урахуванням відстані для кожного з них.
  - ``` yarn test ```
