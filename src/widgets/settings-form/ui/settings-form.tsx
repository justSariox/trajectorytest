import { Form, Input, FormInstance } from "antd";
import { ChangeEvent } from "react";

type Props = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    form: FormInstance;
};

export const SettingsForm = ({ form, onChange }: Props) => {
    return (
        <Form form={form}>
            <Form.Item label="Name" name="name">
                <Input onChange={onChange} />
            </Form.Item>
            <Form.Item label="Model" name="model">
                <Input onChange={onChange} />
            </Form.Item>
            <Form.Item label="Year" name="year">
                <Input onChange={onChange} />
            </Form.Item>
            <Form.Item label="Color" name="color">
                <Input onChange={onChange} />
            </Form.Item>
            <Form.Item label="Price" name="price">
                <Input onChange={onChange} />
            </Form.Item>
        </Form>
    );
};