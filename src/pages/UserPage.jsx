import axios from "axios";
import { useEffect, useState } from "react";

function UserPage() {
  const [user, setUser] = useState([]);
  useEffect(() => {
     axios
      .get("http://localhost:8080/admin/user")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div>
      
      <h1 className="text-2xl mb-2 p-2 font-extrabold">All Users</h1>
      <table className="w-full ">
        <thead>
          <tr className="bg-gray-400 border-b-2 border border-white ">
            <th className="p-3 text-sm tracking-wide text-left border ">ID</th>
            <th className="p-3 text-sm tracking-wide text-lef border">Name</th>
            <th className="p-3 text-sm tracking-wide text-left border">E-mail</th>
            <th className="p-3 text-sm tracking-wide text-left border">Birth month</th>
            <th className="p-3 text-sm tracking-wide text-left border">Birth date</th>
            <th className="p-3 text-sm tracking-wide text-left border">Is Active</th>
            <th className="p-3 text-sm tracking-wide text-left border">Mobile</th>
            <th className="p-3 text-sm tracking-wide text-left border">
              Activated At
            </th>
            <th className="p-3 text-sm tracking-wide text-left border">
              Expired date
            </th>
            <th className="p-3 text-sm tracking-wide text-left border ">Profile</th>
          </tr>
        </thead>
        {user?.map((data,i) => {
          return (
            <tbody key={i}>
              <tr className="cursor-pointer hover:bg-gray-200 border-b-2">
                <td className="p-3 text-sm tracking-wide text-left border">{data.id}</td>
                <td className="p-3 text-sm tracking-wide text-left border">
                {data.firstname? data.firstname: "-"}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                 {data.email}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">{data.birthMonth ? data.birthMonth : "-"}</td>
                <td className="p-3 text-sm tracking-wide text-left border">{data.birthDate ? data.birthDate : "-"}</td>
                <td className="p-3 text-sm tracking-wide text-left border">{data.isActive ? "true" : "false"}</td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.mobile? data.mobile : "-"}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.activeAt? data.activeAt : "-"}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.expiredDate? data.expiredDate : "-"}
                </td>
                <td className="p-1 text-sm tracking-wide text-left bg-red-500 text-white absolute rounded-md hover:bg-red-700 translate-y-2 translate-x-3">
                  Show 
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  );
}

export default UserPage;
