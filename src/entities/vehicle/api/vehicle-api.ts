import { instance } from "@/shared";
import { Vehicle } from "@/entities";

const vehicleApi = {
    getVehicles() {
        return instance.get<Vehicle[]>('vehicles')
    }
}

export const { getVehicles } = vehicleApi