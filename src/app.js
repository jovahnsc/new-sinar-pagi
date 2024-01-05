document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Paket 1",
        price: 20000,
      },
      { id: 2, name: "Paket 1", img: "1.jpg", price: 20000 },
      { id: 3, name: "Paket 1", img: "1.jpg", price: 20000 },
      { id: 4, name: "Paket 1", img: "1.jpg", price: 20000 },
      { id: 5, name: "Paket 1", img: "1.jpg", price: 20000 },
    ],
  }));

  Alpine.data("slides", () => ({
    items: [
      {
        id: 1,
        name: "UNIQUE JEWELRY, RARE GEMS, AND EXQUISITE PIECES!",
        body: "Witness stunning detail of this collection and we will be right back soon.",
        img: "1.png",
      },
      {
        id: 2,
        name: "UNIQUE JEWELRY, RARE GEMS, AND EXQUISITE PIECES!",
        body: "Witness stunning detail of this collection and we will be right back soon.",
        img: "2.png",
      },
      {
        id: 3,
        name: "UNIQUE JEWELRY, RARE GEMS, AND EXQUISITE PIECES!",
        body: "Witness stunning detail of this collection and we will be right back soon.",
        img: "3.png",
      },
      {
        id: 4,
        name: "UNIQUE JEWELRY, RARE GEMS, AND EXQUISITE PIECES!",
        body: "Witness stunning detail of this collection and we will be right back soon.",
        img: "1.png",
      },
      {
        id: 5,
        name: "UNIQUE JEWELRY, RARE GEMS, AND EXQUISITE PIECES!",
        body: "Witness stunning detail of this collection and we will be right back soon.",
        img: "2.png",
      },
    ],
    activeSlide: 1,
    loop() {
      setInterval(() => {
        this.activeSlide = this.activeSlide === 5 ? 1 : this.activeSlide + 1;
      }, 2000);
    },
  }));
});

// konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
