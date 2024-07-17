import { Vehicle } from "@/entities";

export function getCoordinates(vehicle?: Vehicle) {
    return [vehicle?.latitude, vehicle?.longitude]
}