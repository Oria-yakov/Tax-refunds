document.getElementById("submit-btn").addEventListener("click", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const year = document.getElementById("year-select");
    const agree = document.getElementById("agree");
    const errorDiv = document.getElementById("form-error");
  
    errorDiv.innerText = "";
  //בדיקה שכל השדות מולאו, אם לא תוצג הודעת שגיאה
    if (!name.value.trim() || !phone.value.trim() || !email.value.trim() || !year.value || !agree.checked) {
      errorDiv.innerText = "אנא מלא/י את כל השדות ואשר/י את תנאי השימוש.";
      return;
    }
  
    alert("הטופס נשלח בהצלחה");
  
    // ניקוי שדות
    name.value = "";
    phone.value = "";
    email.value = "";
    year.value = "";
    agree.checked = false;
  });
  