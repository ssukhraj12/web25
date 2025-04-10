import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Container>
        <div>ater u ok</div>
        <Typography variant={'h1'}>This is h1 Kartik</Typography>
        <Button color={'primary'} variant={'contained'} size={'medium'}>Lime Button</Button>
      </Container>

      <TableContainer component={'paper'}>
        <Table className="table" size={'small'}>
          {/* head */}
          <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Job</TableCell>
            <TableCell>Favorite Color</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {/* row 1 */}
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Cy Ganderton</TableCell>
            <TableCell>Quality Control Specialist</TableCell>
            <TableCell>Blue</TableCell>
          </TableRow>
          {/* row 2 */}
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Hart Hagerty</TableCell>
            <TableCell>Desktop Support Technician</TableCell>
            <TableCell>Purple</TableCell>
          </TableRow>
          {/* row 3 */}
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Brice Swyre</TableCell>
            <TableCell>Tax Accountant</TableCell>
            <TableCell>Red</TableCell>
          </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
