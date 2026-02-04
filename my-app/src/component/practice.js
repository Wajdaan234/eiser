import { useState } from "react";

function Practice() {

    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [usersData, setUserData] = useState([]);

    const saveUser = () => {

        const newUser = {
            name: name,
            email: email,
            password: password,
            age: age
        };

        if(name === "" || email === "" || password === "" || age === ""){
            setMsg("Please fill in all fields.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));
        alert("User saved successfully!");
    };

    const getUsers = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        console.log(users);
        setUserData(users);
        alert("Users retrieved successfully!");
    };

    const deleteUser = (index) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        setUserData(users);
        alert("User deleted successfully!");
    }


    return (
        <div className="cart_area section_padding">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br/><br/>

            <button onClick={saveUser}>save user</button>
            <button onClick={getUsers}>get users</button>

            <p>{msg}</p>

            {usersData.map((user, index) => (
                <div key={index}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.password}</p>
                    <p>{user.age}</p>
                    <button onClick={() => deleteUser(index)}>delete</button>
                </div>
            ))}

        {/* <div className="container">
        <div className="cart_inner">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className="media">
                      <div className="d-flex">
                        <img
                          src="assets/img/product/single-product/cart-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="media-body">
                        <p>Minimalistic shop for multipurpose use</p>
                      </div> 
                    </div>
                  </td>
                  <td> 
                    <h5>$360.00</h5>
                  </td>
                  <td>
                    <div className="product_count">
                      <input
                        type="number"
                        defaultValue="1"
                        className="input-text qty"
                      />
                      <button className="increase items-count" type="button">
                        <i className="lnr lnr-chevron-up"></i>
                      </button>
                      <button className="reduced items-count" type="button">
                        <i className="lnr lnr-chevron-down"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <h5>$360.00</h5>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="cart_total text-right">
              <h4>Grand Total: $1080.00</h4>
            </div>
          </div>
        </div>
        </div> */}

        </div>
    );
};

export default Practice;