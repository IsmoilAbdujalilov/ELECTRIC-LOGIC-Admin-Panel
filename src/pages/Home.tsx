import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { Avatar } from "@mui/material";

export default function BasicTable() {
  const [data, setData] = React.useState<any>([]);

  const dbRef = collection(db, "admin");
  const getData = async () => {
    const users = await getDocs(dbRef);
    const data: any = [];
    users.forEach((el) => {
      data.push(el.data());
    });

    return data;
  };

  React.useEffect(() => {
    getData().then((res: any) => {
      setData(res);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el: any, index: number) => {
            console.log(el);
            const user = JSON.parse(el.data);
            console.log(user);
            return user.map((row: any) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Avatar alt={row.name} src={row.image} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{el.email}</TableCell>
                </TableRow>
              );
            });
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
