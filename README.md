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
Запустить development build  
npm run dev  
Результат сборки в папке docs(тестовая страница со скриптами и стилями)  
## Запуск тестов
npm run test
## Пример инициализации:
Создайте div с классом slider(имя класса для примера,возможно любое имя класса).
```
const $sl = $('.slider');

const slSettings = {
  min: 5000,
  max: 25000,
  from: 8000,
  step: 1000,
  to: 18000,
  isVertical: false,
  hideThumbLabel: false,
  isRange: true,
};

$sl1.fsdSlider(slSettings);

```
min - обязательное поле,минимальное значение диапазона значений слайдера.

max - обязательное поле,максимальное значение диапазона значений слайдера.

from - обязательное поле,значение ползунка слайдера при одиночном значении слайдера
и значение диапазона "ОТ" при слайдере диапазона.

to - необязательное поле,значение диапазона "ДО" при слайдере диапазона.

step - параметр, которому будут кратны значения слайдера при изменении ползунка слайдера.

isVertical - булево значение данного параметра позволяет установить вертикальный или горизонтальный режим отображения слайдера.

isRange - булево значение true данного параметра позволяет установить слайдер в режиме диапазона значений "ОТ" - "ДО".

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
 const sl_instance = $sl.data('fsd-slider');
 sl_instance.update(newSettings); - возможность передать новые настройки в слайдер
 sl_instance.getSettings(); - возвращает настройки слайдера в виде строки
 sl_instance.addCallback(callback); - добавляет функцию обратного вызова 
 для получения данных из слайдера при изменениях
 Пример callback:
 const callback = {
  handleEvent: (result) => {
    console.log(result);
  }
 }
 Callback представляет из себя обьект с методом handleEvent внутри.
 Внутри handleEvent можно передавать значения необходимым input для отображения.

 sl_instance.removeCallback(callback); - отменяет подписку на изменения слайдера
 для данной функции обратного вызова

 sl_instance.destroy(); - удаляет слайдер из DOM дерева

 ```
## Описание проекта:
### Основные классы:
 EventObservable -реализует интерфейс IObservable,позволяет наблюдателю 
 подписываться на изменения класса.

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