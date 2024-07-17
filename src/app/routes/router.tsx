import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {CustomLayout} from "@/shared/ui/layout/layout.tsx";
import {VehiclesPage} from "@/pages/vehicles/vehicles.tsx";
import {Maps} from "@/pages/maps/maps.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <CustomLayout />,
        children: [
            {
                path: '/',
                element: <VehiclesPage />
            },
            {
                path: '/maps',
                element: <Maps />
            }
        ]
    }
])

export const Router = () => {
    return <RouterProvider router={router} />
}