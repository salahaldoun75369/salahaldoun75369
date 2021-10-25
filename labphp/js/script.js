'use strict';
let multiItemSlider = (function () {
   return function (selector, config) {
      let
         _mainElement = document.querySelector(selector), // основный элемент блока
         _sliderWrapper = _mainElement.querySelector('.films__information '), // обертка для .slider-item
         _sliderElements = _mainElement.querySelectorAll('.information__element'), // элементы (.slider-item)
         _sliderControls = _mainElement.querySelectorAll('.films__next'), // элементы управления
         _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
         _itemWidth = parseFloat(getComputedStyle(_sliderElements[0]).width), // ширина одного элемента    
         _positionLeftItem = 0, // позиция левого активного элемента
         _transform = 0, // значение транфсофрмации .slider_wrapper
         _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
         _elements = [], // массив элементов
         _config = {};

      for (let key in config) {
         if (key in _config) {
            _config[key] = config[key];
         }
      }
      _sliderElements.forEach(function (item, index) {
         _elements.push({ item: item, position: index, transform: 0 });
      });
      let position = {
         getElementMin: function () {
            let indexItem = 0;
            _elements.forEach(function (item, index) {
               if (item.position < _elements[indexItem].position) {
                  indexItem = index;
               }
            });
            return indexItem;
         },
         getElementMax: function () {
            let indexItem = 0;
            _elements.forEach(function (item, index) {
               if (item.position > _elements[indexItem].position) {
                  indexItem = index;
               }
            });
            return indexItem;
         },
         getMin: function () {
            return _elements[position.getElementMin()].position;
         },
         getMax: function () {
            return _elements[position.getElementMax()].position;
         }
      }
      let _transformItem = function (direction) {
         let nextElement;
         if (direction === 'left') {
            _positionLeftItem--;
            if (_positionLeftItem < position.getMin()) {
               nextElement = position.getElementMax();
               _elements[nextElement].position = position.getMin() - 1;
               _elements[nextElement].transform -= _elements.length * 100;
               _elements[nextElement].item.style.transform = 'translateX(' + _elements[nextElement].transform + '%)';
            }
            _transform += _step;
         }
         if (direction === 'right') {
            _positionLeftItem++;
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
               nextElement = position.getElementMin();
               _elements[nextElement].position = position.getMax() + 1;
               _elements[nextElement].transform += _elements.length * 100;
               _elements[nextElement].item.style.transform = 'translateX(' + _elements[nextElement].transform + '%)';
            }
            _transform -= _step;
         }
         _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
      }
      let _controlClick = function (e) {
         if (e.target.classList.contains('films__next')) {
            e.preventDefault();
            let direction = e.target.classList.contains('films__nextright') ? 'right' : 'left';
            _transformItem(direction);
         }
      };
      let _setUpListeners = function () {
         _sliderControls.forEach(function (item) {
            item.addEventListener('click', _controlClick);
         });
      }
      _setUpListeners();
      return {
         right: function () {
            _transformItem('right');
         },
         left: function () {
            _transformItem('left');
         },
      }
   }
}());

let slider = multiItemSlider('.films-container', {
   isCycling: true,
})