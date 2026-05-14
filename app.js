function order(item){

  let phone = "9647705150258";

  let message = `مرحبا، اريد طلب ${item}`;

  let url =
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}