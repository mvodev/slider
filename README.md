# MetaLamp учебный проект слайдера
## Страница проекта
https://mvodev.github.io/FSDCourse4/
## Развертывание
Клонировать
git clone https://mvodev.github.io/FSDCourse4/
Установить
npm i
Запустить production build
npm run build
Результат сборки в папке slider
## Запуск тестов
npm run test
## Пример инициализации:
```
$sl1.fsdSlider({
 min: -15,
 max: -10,
 from: -14,
 step: 0,
 to: -11,
 isVertical: false,
 hideThumbLabel: false,
 isRange: true
}, 
{
 handleEvent: (message, result) => {
  let s = JSON.parse(result)
  if (s.isRange) {
   $sl1_input.val(`${s.from} - ${s.to}`);
  }
  else {
   $sl1_input.val(s.from);
  }
 }
});
```
min - обязательное поле,минимальное значение диапазона значений слайдера.

max - обязательное поле,максимальное значение диапазона значений слайдера.

from - обязательное поле,значение ползунка слайдера при одиночном значении слайдера
и значение диапазона "ОТ" при слайдере диапазона.

to - необязательное поле,значение диапазона "ДО" при слайдере диапазона.

step - параметр, которому будут кратны значения слайдера при изменении ползунка слайдера.

isVertical - булево значение данного параметра позволяет установить вертикальный или горизонтальный режим отображения слайдера.

isRange - булево значение true данного параметра позволяет установить слайдер в режиме диапазона значений "ОТ" - "ДО".


## Пример callback:
Передайте объект,содержащий функцию handleEvent.
Внутри handleEvent можно передавать значения необходимым input.
```
let $sl1_input = $('.input-result1');
{
 handleEvent: (message, result) => {
  let s = JSON.parse(result)
  if (s.isRange) {
   $sl1_input.val(`${s.from} - ${s.to}`);
  }
  else {
   $sl1_input.val(s.from);
  }
 }
}
```
## Настройки по умолчанию
```
 {
  min: 0,
  max: 10,
  from: 5,
  isRange: false,
  isVertical: false,
  hideThumbLabel: false,
 };
 ```
 ## API:
 ```
 let sl1_instance = $sl1.data('fsd-slider');
 sl1_instance.update(newSettings); - возможность передать новые настройки в слайдер
 ```
## Описание проекта:
### Основные классы:
 EventObservable -реализует интерфейс IObservable,позволяет наблюдателю подписываться на изменения класса.

 IObserver - интерфейс наблюдатель.

 Model - хранит такие свойства модели,как min,max,from,to,реализует интерфейс IObservable,позволяет слушателям подписываться на свои изменения.Осуществляет валидацию настроек слайдера при первоначальной инициализации или последующих изменениях настроек.

 View - отображение слайдера. Реализует интерфейс IObservable и IObserver,позволяет слушателям подписываться на свои изменения,а также подписан на изменения от класса Slider.Хранит такие настройки слайдера как ориентация и отображение значения ползунка.
 Содержит в себе ссылку на класс Slider, представляющий из себя реализацию слайдера,содержащий event listeners от компонентов слайдера и передающий сообщения об изменениях в View.Класс слайдер 
 реализует интерфейс IObservable.

 Presenter - реализует интерфейс IObserver , связующее звено между View и Model, подписан на обновления Model и View, при получении уведомлений об изменениях обновляет View и Model.

 ## UML диаграмма классов:
 https://mvodev.github.io/FSDCourse4/FSDCourse4UMLDiagram.png

 ## Изменения настроек слайдера на контрольной панели
 Введите значение в соответствующее поле на контрольной панели и нажмите ВВОД 
 Изменения настроек слайдера применяются после валидации. Если переданные настройки некорректны, в консоли появляется сообщение об ошибке.

 ## Использование
 Подключите библиотеку JQuery и файлы fsd-slider.js и fsd-slider.css из папки slider на свою страницу.Запуск слайдера согласно примера инициализации.