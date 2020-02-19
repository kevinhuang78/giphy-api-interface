import React from "react";
import { connect } from "react-redux";
import withRandomGifData from "../helpers/withRandomGifData";
import { IGifData } from "../reducers";
import { Row, Col } from "antd";
import Gif from "../components/Gif";
import AppLayout from "../components/AppLayout";

interface IProps {
    randomGif: {
        id: string;
        image_url: string;
        title: string;
    };
}

const Homepage = (props: IProps) => {
    const { randomGif } = props;

    return (
        <AppLayout defaultSelectedKeys={["home"]}>
            <Row type="flex" justify="center">
                <Col span={8}>
                    <h1 className="text-center">Page d'accueil</h1>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={8}>
                    <Gif image_url={randomGif.image_url} title={randomGif.title} />
                </Col>
            </Row>
        </AppLayout>
    );
};

const mapStateToProps = (state: IGifData) => {
    return {
        randomGif: state.randomGif
    };
};

export default withRandomGifData(connect(mapStateToProps)(Homepage));
