import controller from "./controller.mjs"; // Default import

const { index, store } = controller; // Ambil fungsi dari objek controller

//kode menampilkan
const main = () => {
const user = {name : "Royhan", age: 20};

    index();
    store(user);
    index();
};

main();