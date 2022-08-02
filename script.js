let date;
function formatDate(date){
  const nowDate = new Date();
  let diffDate = nowDate - date;
  
  if (diffDate <= 1000){
    alert("Прямо сейчас");
  } else if(diffDate < 60000){
    alert(`${Math.round(diffDate / 1000)} сек. назад`);
  }  else if (diffDate < 3600 * 1000){
    alert(`${Math.round(diffDate / 60000)} мин. назад`);

  } else {
    alert(`${nowDate.getDate()}.${nowDate.getMonth()+1}.${nowDate.getFullYear()} ${nowDate.getHours()}:${nowDate.getMinutes()}`)
  }

}
  


