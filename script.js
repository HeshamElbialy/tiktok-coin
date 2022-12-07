const translations = {
  en: {
    placeholder: "Search accounts and videos",
    upload: "Upload",
    login: "Log in",
    english: "English",
    arabic: "Arabic",
    getcoins: "Get Coins",
    login: "Log in",
    recharge: "Recharge",
    custom: "Custom",
    Largeamountsupported: "Large amount supported",
    total: "Total EGP 0",
    recharge: "Recharge",
  },
  ar: {
    placeholder: "البحث عن الحسابات والفيديوهات",
    upload: "تحميل",
    login: "تسجيل الدخول",
    english: "English",
    arabic: "عربي",
    getcoins: "احصل علي عملات",
    login: "تسجيل الدخول",
    recharge: "اعاده الشحن",
    custom: "مخصص",
    Largeamountsupported: "يتم دعم مبلغ كبير",
    total: " الاجمالي 0 EGP",
    recharge: "اعاده الشحن",
  },
};

const languageSelector = document.querySelector("select");

languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang");
  setLanguage(language);
});
const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  if (language === "ar") {
    document.dir = "rtl";
    document.getElementById("icon").style = "right: -20px"
    document.querySelector("select").style = "margin-right:10px"
    document.querySelector("select").style.outline = "outline: none"
    document.querySelector("select").style.borderColor = "transparent"

  } else {
    document.dir = "ltr";
  }
};

