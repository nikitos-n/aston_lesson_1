const orders = [
  { id: 1, item: "Laptop", paid: true },
  { id: 2, item: "Phone", paid: false },
  { id: 3, item: "Tablet", paid: true },
];

const deliveryData = {
  1: "Delivered in 3 days",
  3: "Delivered in 5 days",
};

function fetchDeliveryInfo(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId, deliveryTime: deliveryData[orderId] || "Unknown" });
    }, 1000);
  });
}

const processOrders = async () => {
  const serverResponse = await new Promise((resolve) =>
    setTimeout(() => resolve(orders), 2000)
  );

  const paidOrdersList = serverResponse.filter(({ paid }) => paid);
  const deliveryRequests = paidOrdersList.map(({ id }) =>
    fetchDeliveryInfo(id)
  );

  const deliveryResults = await Promise.all(deliveryRequests);
  const finalOrders = paidOrdersList.map((order, index) => {
    return {
      id: order.id,
      item: order.item,
      paid: order.paid,
      deliveryTime: deliveryResults[index].deliveryTime,
    };
  });

  console.log("Результат обработки:", finalOrders);
  return finalOrders;
};

processOrders().catch((e) => console.error("Произошла ошибка:", e));
