//kode perintah / controller
import users from "./data.mjs";

const index = () => {
    console.log("Index - Get All Users");
    users.forEach(function(user) {
        console.log(user);
    });
};

const store = (user) => {
    users.push(user);
    console.log("Index - Store User");
};

export default {index, store}; //export data userws