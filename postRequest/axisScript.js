const showDiv = document.getElementById("showData");

axios.default.headers.comman['Authorization'] = "sssssss";

const handleClick = async () => {
  try {
    const response = await axios.post(
      "https://reqres.in/api/users",
      {
        name: "morpheus",
        job: "leader",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  } catch (err) {
    alert(err.message);
  } finally {
    console.log("Done");
  }

  axios({
    method: "POST",
    url: "https://reqres.in/api/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      name: "Shivendra",
      job: "Software Engineer",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert(err.message);
    });
};

//  https://reqres.in/api/users
