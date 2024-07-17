import { Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import s from './header.module.scss'
import { NavItems } from "@/shared";
const { Header } = Layout


export const CustomHeader = () => {
    return (
        <Header className={s.header}>

            <Link to='/'>
                <Typography.Paragraph className={s.title}>Trajectory test app</Typography.Paragraph>
            </Link>

            <Menu mode="horizontal" items={NavItems} />

        </Header>
    )
}