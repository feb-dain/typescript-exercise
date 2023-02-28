interface Restaurants {
  add: Function;
  filterByCategory: Function;
}

interface Category {
  category: "한식" | "중식" | "양식" | "일식" | "아시안";
}

const filterByCategory = (category: Category): string => {
  return "";
};
