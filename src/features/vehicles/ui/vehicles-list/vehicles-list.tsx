import { removeVehicle, Vehicle } from "@/entities";
import { CustomCard, useAppDispatch } from "@/shared";

import s from './vehicles-list.module.scss'

type Props = {
    vehicles: Vehicle[]
    showModal: () => void
}

export const VehiclesList = ({vehicles, showModal}: Props) => {
    const dispatch = useAppDispatch();

    const handleDelete = (id: string) => {
        dispatch(removeVehicle({id}));
    };

    return (
        <div className={s.vehicleList}>
            {vehicles?.map((vehicle) => (
                <CustomCard<Vehicle>
                    key={vehicle.id}
                    data={vehicle}
                    onDelete={() => handleDelete(vehicle.id)}
                    showModal={() => showModal(vehicle)}
                />

            ))}

        </div>
    );
}
