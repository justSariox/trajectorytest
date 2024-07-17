import { Card, Space } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import s from './card.module.scss'

type Props<T> = {
    data: T;
    onDelete: (id: string) => void;
    showModal: () => void
}

export function CustomCard<T>(props: Props<T>) {
    const { data, onDelete, showModal } = props;

    return (
        <Space direction="vertical" size="16">
            <Card className={s.card} title={data.name} actions={[<EditOutlined key={'edit'} onClick={showModal}/>, <DeleteOutlined key={'delete'} onClick={() => onDelete(data.id)}/>]}>
                <Card.Meta description={
                    <>
                        <p>{data.model}</p>
                        <p>{data.color}</p>
                        <p>{data.year}</p>
                        <p>{data.price}</p>
                    </>
                }></Card.Meta>
            </Card>
        </Space>
    );
}
