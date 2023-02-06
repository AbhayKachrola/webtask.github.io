function validate(event) {
    event.preventDefault();

    // birthdate calculation
    let dob = document.getElementById("dob").value;
    const name = document.forms["myForm"]["name"].value;
    const email = document.forms["myForm"]["email"].value;
    const password = document.forms["myForm"]["password"].value;
    const errorMessage = document.getElementById("errorMessage");
    const table = document.querySelector('#registrationTable tbody');
    const checkbox = document.getElementById("checkbox");
    
    
    const calculateAge = (dob) => {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age;
    };
    
    const age = calculateAge(dob);
    console.log(age);

    const validateEmail = (email) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };
    if (validateEmail(email)) {
      emailis = "valid";
    } else {
      emailis = "wrong";
    }

    errorMessage.innerHTML = "";

    let isValid = true;

    if (!name) {
     alert("Name is required.")
      isValid = false;
    }

    if (isNaN(age)|| age < 18 || age > 55) {
      alert("age must between 18 to 55")
      isValid = false;
      } 

    if (emailis === "wrong") {
      alert("please enter valid email")
      isValid = false;
    } 

    if (!password) {
      alert("Password is required. <br>")
      isValid = false;
    } 
    
    if (checkbox.checked){
      //pass on next line
    }else{
      alert("accept all terms and condition first ")
      isValid = false;
    }


    if (isValid) {
      console.log("yes");
      // create an object to store the values
      let user = {
        name: name,
        dob: dob,
        email: email,
        password: password,
      };

      // store the object in local storage as a string
      localStorage.setItem("user", JSON.stringify(user));

      let table = document.getElementById("registrationTable");
      for (var i = 1; i < table.rows.length; i++) {
       var currentRow = table.rows[i];
      for (var j = 0; j < currentRow.cells.length; j++) {
       currentRow.cells[j].innerHTML = "";
        }
        }
      

      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${name}</td>
      <td>${dob}</td>
      <td>${email}</td>
      <td>${password}</td>
      `;
      table.appendChild(row);


    document.getElementById("dob").value=""
    document.forms["myForm"]["name"].value=""
    document.forms["myForm"]["email"].value=""
    document.forms["myForm"]["password"].value=""
    }
  }