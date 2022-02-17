const setPriceListItem = () => {
  const services = [
    {
      id: 1,
      serviceName: "Landing Page на Javascript",
      price: "от 18 000",
      installmentPrice: "5400 / 5400 / 7200",
    },
    {
      id: 2,
      serviceName: "Сайт-визитка",
      price: "от 24 000",
      installmentPrice: "7200 / 7200 / 9600",
    },
    {
      id: 3,
      serviceName: "Персональный блог",
      price: "от 34 000",
      installmentPrice: "10200 / 10200 / 13600",
    },
    {
      id: 4,
      serviceName: "Интернет-магазин",
      price: "от 48 000",
      installmentPrice: "14400 / 14400 / 19200",
    },
  ];

  let html = "<table style='margin: 0 auto;'>";

  setTimeout(() => {
    html += "<thead>";
    html += "<tr>";
    html += "<td>" + "#" + "</td>";
    html += "<td>" + "Тип заказа" + "</td>";
    html += "<td>" + "Минимальная стоимость (руб.)" + "</td>";
    html +=
      "<td>" +
      "Минимальная стоимость" +
      "<br>" +
      "несколькими платежами" +
      "</td>";
    html += "</tr>";
    html += "</thead>";

    for (let i = 0; i < services.length; i++) {
      html += "<tr>";
      html += "<td>" + services[i].id + "</id>";
      html += "<td>" + services[i].serviceName + "</id>";
      html += "<td>" + services[i].price + "</id>";
      html += "<td>" + services[i].installmentPrice + "</id>";
      html += "</tr>";
    }

    document.getElementById("table").innerHTML = html;
  }, 500);
};

const setMiniServicePriceList = () => {
  const miniServices = [
    {
      id: 1,
      serviceName: "Вёрстка формы HTML/CSS/JS",
      price: "от 3 600",
      pricePerHour: "1 200",
    },
    {
      id: 2,
      serviceName: "Дизайн-макет веб-приложения <br> + консультация в подарок",
      price: "от 2 400",
      pricePerHour: "1 200",
    },
    {
      id: 3,
      serviceName: "Динамичный слайдер для сайта",
      price: "от 4 000",
      pricePerHour: "1 200",
    },
  ];

  let miniServiceHTML = "<table style='margin: 0 auto;'>";

  setTimeout(() => {
    miniServiceHTML += "<tr>";
    miniServiceHTML += "<td>" + "#" + "</td>";
    miniServiceHTML += "<td>" + "Тип заказа" + "</td>";
    miniServiceHTML += "<td>" + "Минимальная стоимость (руб.)" + "</td>";
    miniServiceHTML += "<td>" + "Почасовая ставка (руб/час)" + "</td>";
    miniServiceHTML += "<thead>";
    miniServiceHTML += "</tr>";
    miniServiceHTML += "</thead>";

    for (let i = 0; i < miniServices.length; i++) {
      miniServiceHTML += "<tr>";
      miniServiceHTML += "<td>" + miniServices[i].id + "</id>";
      miniServiceHTML += "<td>" + miniServices[i].serviceName + "</id>";
      miniServiceHTML += "<td>" + miniServices[i].price + "</id>";
      miniServiceHTML += "<td>" + miniServices[i].pricePerHour + "</id>";
      miniServiceHTML += "</tr>";
    }

    document.getElementById("minitable").innerHTML = miniServiceHTML;
  }, 500);
};

setPriceListItem();
setMiniServicePriceList();
