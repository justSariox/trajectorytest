import { Outlet } from "react-router-dom";
import { Flex, Layout } from "antd";
import s from './layout.module.scss'
import { CustomHeader } from "@/shared";
const { Content } = Layout

export const CustomLayout = () => {
    return (
        <Flex gap='middle' wrap>
            <Layout className={s.layout}>
                <CustomHeader/>
                <Content className={s.content}>
                    <Outlet />
                </Content>
            </Layout>
        </Flex>
    )
}