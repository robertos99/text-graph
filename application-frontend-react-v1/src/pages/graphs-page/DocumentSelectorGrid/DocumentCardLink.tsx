import { Link } from 'react-router-dom';
import {Card} from "@mui/material";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";


const Item = styled(Paper)(({ theme }) => ({
    overflow: 'hidden',
    height: '200px',
    width: '200px',
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function DocumentCardLink({ to, children }) {
    return (
        <Link sx={{cursor: 'pointer'}} to={to}>
          <Card sx={{
              overflowWrap: 'break-word',
              textOverflow: 'ellipsis',
              padding: 1,
              textAlign: 'center',
              overflow: 'hidden',
              height: '200px',
              width: '200px'
          }}>
                {children}
          </Card>
        </Link>
    );
};