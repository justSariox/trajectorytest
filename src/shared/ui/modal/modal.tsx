import { ReactNode } from "react";
import { Modal } from "antd";

type Props = {
    title: string,
    children: ReactNode
    isModalOpen: boolean,
    handleOk: () => void
    handleCancel: () => void
}

export const CustomModal = ({title, children, isModalOpen, handleCancel, handleOk}: Props) => {
    return (
        <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {children}
        </Modal>

    )
}