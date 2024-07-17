import { useAppDispatch } from "@/shared";
import { useEffect } from "react";
import {fetchVehicles, vehiclesSelector} from "@/entities";
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import { useSelector } from "react-redux";
import { getCoordinates } from "@/shared/utils";
import {Popover, Tooltip} from "antd";


export const Maps = () => {
    const dispatch = useAppDispatch();
    const vehicles = useSelector(vehiclesSelector);

    useEffect(() => {
        dispatch(fetchVehicles());
    }, []);


    return (
        <div>
            <YMaps>
                    <Map width={'100%'} height={800} defaultState={{center: [59.753332, 30.621676], zoom: 7 }} >
                        {vehicles.map(v => <Placemark key={v.id} geometry={getCoordinates(v)} />)}
                    </Map>
            </YMaps>
        </div>
    );
};
