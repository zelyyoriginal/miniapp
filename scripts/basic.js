
 // Проверим, доступен ли Telegram.WebApp
  let username = 'guest_user'; // значение по умолчанию

  if (window.Telegram && window.Telegram.WebApp) {
    Telegram.WebApp.ready(); // сообщаем Telegram, что мы готовы
    if (Telegram.WebApp.initDataUnsafe && Telegram.WebApp.initDataUnsafe.user.username) {
      username = Telegram.WebApp.initDataUnsafe.user.username;
    } else {
      console.log('username не получен из initDataUnsafe');
    }
  } else {
    console.log('Telegram.WebApp недоступен — страница открыта не через Mini App');
  }

  console.log('username:', username); // для отладки, потом можешь убрать    
   
   // Делаем ссылку на профиль
   const profileLink = `https://t.me/${username}`;
   
   // ID поля в Google Form, которое нужно предзаполнить
   const entryId = 'entry.1771687770';  // <-- твой настоящий ID
   
   // Ссылка на форму
   const formBaseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeL_VnqJZPlmI6Xb9wYUvAx9Ytz5nm6P6GNG6yaaPDi5uplfA/viewform';
   
   // Ссылка на форму с подставленным профилем
   const formUrl = `${formBaseUrl}?usp=pp_url&${entryId}=${encodeURIComponent(profileLink)}`;
   
   function goToForm(){
    openNewPage(formUrl)
     
    }
    function openNewPage(url){
         window.open(url,'_blank');
    }

    function showPage(pageId) {
  const pages = ['mainPage', 'rewiewsPage','syntaxPage'];
  pages.forEach(id => {
    document.getElementById(id).style.display = (id === pageId) ? 'block' : 'none';
  });
  Telegram.WebApp.BackButton.show();
}

Telegram.WebApp.BackButton.onClick(() => {
  // вернись на предыдущую "страницу" SPA
  showPage('mainPage');
  Telegram.WebApp.BackButton.hide(); // и спрячь кнопку обратно
});


// Пример переключения
document.getElementById('someButton').addEventListener('click', () => {
  showPage('formPage');
});

    
    