# Тестовое задание для [Hammer Systems](https://hammer.systems/)

Сделать админ панель, используя стартовый проект, основываясь на демо проекте

## 🎥 Демо
### 👉 [hammer-systems-test-ebon.vercel.app](https://hammer-systems-test-ebon.vercel.app/)

## 📸 Скриншоты
![customers table](https://github.com/comeall09/readme-storage/blob/main/images/hammer-systems/list.png)
![single customer page](https://github.com/comeall09/readme-storage/blob/main/images/hammer-systems/id.png)

## 💡 Требования:
- Реализовать боковое меню с разделами, аналогично предоставленному изображению ✅
- Раздел Клиенты -> Список клиентов перенести реализацию страницы Pages -> User list из демо проекта. Данные о пользователях получать по api https://jsonplaceholder.typicode.com . Столбцы из демо можно заменить на свои(на те поля которые приходят в апи) ✅
- Пока данные загружаются на экране должен крутиться лоадер ✅
- При нажатии на пользователя открывать страницу аналогичную странице в демо Pages -> Setting (только вкладка Edit Profile). Подставить данные выбранного пользователя. Поля также можно поменять на подходящие ✅
- При нажатии на Save Changes имитировать отправку данных на сервер, покрутить секунду лоадер и вернуться обратно на список пользователей ✅
- Задеплоить в сеть ✅

## ⚙️ Локальная установка приложения

Установить [<15 версию NodeJs](https://nodejs.org/en/download/releases), для совместимости с предустановленными пакетами:

```shell
nvm install 13.14.0
nvm use 13.14.0
```

Установить зависимости:

```shell
npm install
```

Запустить локально:

```
npm run dev
```
