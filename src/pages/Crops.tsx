import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Static table data for vehicles (You can replace this with real data later)
const rows = [
    { name: 'Vehicle 1', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: 'Vehicle 2', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
    { name: 'Vehicle 3', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
    { name: 'Vehicle 4', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { name: 'Vehicle 5', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

const Crops = () => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: 8 }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="vehicle table">
                <TableHead>
                    <TableRow>
                        <TableCell>Vehicle Name</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Crops;
