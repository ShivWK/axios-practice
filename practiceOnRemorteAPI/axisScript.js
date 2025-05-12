const showDiv = document.getElementById("showData");

const handleClick = async () => {


    try {
        const response = await axios('https://jsonplaceholder.typicode.com/posts', { method : "GET",
            params : {
                id: 2
            }
        });
        console.log(response.data)
        showDiv.innerHTML = `<h2>${response.data?.[0].body}</h2>`;
    } catch (err) {
        alert("Error ", err.message)
    } finally {
        console.log("Done")
    }
};




