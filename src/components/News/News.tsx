import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import React from 'react';

const data = Array.from({ length: 23 }).map((_, i) => ({
    title: `Topic part ${i}`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description:
        'Global IT spending forecast to rise 5.5%, fueled by software, services.',
    content:
        'Overall spending on IT products and services is expected to climb by about 5.5% this year, fueled mainly by software and services, according to a forecast from tech analyst firm Gartner Research. That level of growth would result in a total expenditure of $4.6 trillion. In the area of data center systems, which includes servers, internal controller-based systems and networking equipment among other things, the latter is likely to prove a robust engine of growth, with Gartner predicting 8.4% year-on-year growth in constant currency. According to the forecast’s author, John-David Lovelock, the data center category as a whole should rise by 3.7% in 2023.',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const News: React.FC = () => (
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
            onChange: (page) => {},
            pageSize: 3,
        }}
        dataSource={data}
        footer={
                <b>Don't miss our news 😉</b>
        }
        renderItem={(item) => (
            <List.Item
                key={item.title}
                actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
                extra={
                    <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                }
            >
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.title}
                    description={item.description}
                />
                {item.content}
            </List.Item>
        )}
    />
);

export default News;