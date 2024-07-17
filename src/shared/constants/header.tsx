import { Link } from "react-router-dom";

export const NavItems  = [
    {
        title: 'vehicles',
        label: (
            <Link to='/'>Vehicles</Link>
        ),
        key: 1
    },
    {
        title: 'Map',
        label: (
            <Link to='/maps'>Maps</Link>
        ),
        key: 2
    },
]