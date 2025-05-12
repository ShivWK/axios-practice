const showDiv = document.getElementById("showData");

const handleClick = async () => {
//   const config = {
//     method: "GET",
//     url: "./data.txt",
//   };

//   const promiseObj = await axios(config);
//   // in fetch we have one extra step which is parsing response data as json liek promiseObj.json(), but not with axios we directly use the returned promise
//   const res = promiseObj;
//   console.log(res.data);

    // const response = await axios.get('./data.txt');
    // console.log(response.data)

// get is by default so we can ignore .get()

    // const response = await axios('./data.txt', { "method" : "GET"});
    // console.log(response)

// Error handling

    // try {
    //     const response = await axios('./data.txt', { "method" : "GET"});
    //     console.log(response)
    //     showDiv.innerHTML = `<h2>${response.data}</h2>`;
    // } catch (err) {
    //     alert("Error ", err.message)
    // } finally {
    //     console.log("Done")
    // }

    try {
        const response = await axios('./data.json', { "method" : "GET"});
        console.log(response)
        showDiv.innerHTML = `<h2>${response.data.message}</h2>`;
    } catch (err) {
        alert("Error ", err.message)
    } finally {
        console.log("Done")
    }
};




