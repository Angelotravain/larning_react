// 1 - instalação

// console.log(axios);

// requisição get

// const getData = async () => {

//     try {
//         const response = await axios.get("https://localhost:4441/api/v1/gerapp/Estado");//"https://jsonplaceholder.typicode.com/users");
//         console.log(response);

//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

const fetchData = async (response) => {
    const dado = await getData();



    const li = document.createElement('li');
    const ul = document.querySelector('ul');

    dado.forEach(element => {
        ul.innerHTML += `<li>${element.name}</li>`;
    });
}


const getData = async () => {

    try {
        const response = await postsFetch.get("users",
            {
                headers: {
                    "Content-Type": "applicatin/json",
                    custom: "Header",
                }
            }
        );//"https://jsonplaceholder.typicode.com/users");
        console.log(response);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

fetchData();
// headers


// 5 post

const form = document.querySelector('form');
const titleInput = document.querySelector('title');
const bodyInput = document.querySelector('body');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/posts", {
        body: {
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1
        }
    })
})