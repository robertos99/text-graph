import { Tab, TabProps } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface CustomTabLinkProps extends TabProps {
    to: string;
}

const CustomTabLink: React.FC<CustomTabLinkProps> = ({ to, label}) => {
    const location = useLocation();
    //const isActive = location.pathname === '/'+to;
    const isActive = location.pathname.includes(to);

    return (
        <Tab
            component={RouterLink}
            to={to}
            label={label}
            sx={{
                color: isActive ? 'blue' : undefined,
            }}
        />
    );
};

export default CustomTabLink;
