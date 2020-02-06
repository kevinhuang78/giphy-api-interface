import React from "react";
import { connect } from "react-redux";
import withRandomGifData from "../helpers/withRandomGifData";
import { IGifData } from "../reducers";
import { Row, Col } from "antd";
import Gif from "../components/Gif";

interface IProps {
    randomGif?: {
        id: string;
        image_url: string;
        title: string;
    };
}

const Homepage = (props: IProps) => {
    const { randomGif } = props;

    return (
        <div>
            <Row type="flex" justify="center">
                <Col span={8}>
                    <h1 className="homepage__title">Page d'accueil</h1>
                </Col>
            </Row>
            {randomGif && (
                <Row type="flex" justify="center">
                    <Col span={8}>
                        <Gif image_url={randomGif.image_url} title={randomGif.title} />
                    </Col>
                </Row>
            )}
        </div>
    );
};

const mapStateToProps = (state: IGifData) => {
    return {
        randomGif: state.randomGif
    };
};

export default withRandomGifData(connect(mapStateToProps)(Homepage));
