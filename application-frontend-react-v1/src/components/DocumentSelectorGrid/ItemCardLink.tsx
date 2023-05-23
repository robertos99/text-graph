import { Link } from 'react-router-dom';
import {Card} from "@mui/material";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";


const Item = styled(Paper)(({ theme }) => ({
    height: '200px',
    width: '200px',
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ItemCardLink({ to, children }) {
    return (
        <Link sx={{cursor: 'pointer'}} to={to}>
            <Item>
            <Card >
                {children}
            </Card>
            </Item>
        </Link>
    );
};