import { ChangeEvent, useEffect, useState } from "react";
import { Form } from "antd";
import { useSelector } from "react-redux";
import { fetchVehicles, updateVehicle, vehiclesSelector } from "@/entities";
import { CustomModal, useAppDispatch } from "@/shared";
import { VehiclesList } from "@/features";
import { SettingsForm } from "@/widgets";


export const VehiclesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVehicle, setCurrentVehicle] = useState(null);
    const [form] = Form.useForm();

    const vehicles = useSelector(vehiclesSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchVehicles());
    }, [dispatch]);

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        form.setFieldsValue({
            [name]: value
        });
    };

    const handleUpdate = () => {
        const vehicle = { ...currentVehicle, ...form.getFieldsValue() };
        dispatch(updateVehicle(vehicle));
    };

    const showModal = (vehicle) => {
        setCurrentVehicle(vehicle);
        form.setFieldsValue(vehicle);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        handleUpdate();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div>
            <VehiclesList vehicles={vehicles} showModal={showModal} />
            <CustomModal title="Car settings" isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}>
                <SettingsForm form={form} onChange={handleChangeInput} />
            </CustomModal>
        </div>
    );
};