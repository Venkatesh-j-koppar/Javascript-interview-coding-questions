// React Check Box
import axios from "axios";
import { useState, useEffect } from "react";
export default function App() {
  const [users, setUsers] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => JSON.stringify(res))
      .then((res) => JSON.parse(res))
      .then((data) => setUsers(data.data));
  }, []);

  useEffect(() => {
    users.length > 0
      ? setCheckAll(users.every((user) => user?.checked === true))
      : "";
  }, [users]);

  function handleClick(index) {
    setUsers((prev) =>
      prev.map((user, i) => {
        if (i === index) {
          return {
            ...user,
            checked: user.hasOwnProperty("checked") ? !user.checked : true,
          };
        }
        return user;
      }),
    );
  }
  function handleCheckBox() {
    if(checkAll){
    setCheckAll(() => !checkAll);
      setUsers((prev) => prev.map((user)=>({...user,checked:false})))
    }else{
      setCheckAll(() => !checkAll);
      setUsers((prev) => prev.map((user)=>({...user,checked:true})))
    }
    
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          onClick={() => handleCheckBox()}
          checked={checkAll}
        />
        Check All
      </label>
      <br />
      <br />
      {users.length > 0 ? (
        users.map((user, i) => (
          <>
            <label>
              <input
                type="checkbox"
                onClick={() => handleClick(i)}
                checked={user?.checked ? true : false}
              />
            </label>
            <span>{user?.name}</span>
            <br />
          </>
        ))
      ) : (
        <h1>No Data</h1>
      )}
    </>
  );
}
