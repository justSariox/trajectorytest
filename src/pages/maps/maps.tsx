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

    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    return (
        <div>
            <YMaps>
                    <Map width={'100%'} height={800} defaultState={{center: [59.753332, 30.621676], zoom: 7 }} >
                        {vehicles.map(v => (
                            <div title={v.name}>
                                <Tooltip title={v.name}>
                                    <Placemark key={v.id} geometry={getCoordinates(v)} />
                                </Tooltip>

                            </div>

                        ))}
                    </Map>
            </YMaps>
        </div>
    );
};
