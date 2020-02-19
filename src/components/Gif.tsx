import React from "react";
import { Tooltip } from "antd";

interface IGifData {
    image_url: string;
    title: string;
}

const Gif: React.FC<IGifData> = ({ image_url, title }) => (
    <Tooltip title={title}>
        <img className="gif" src={image_url} alt={title} />
    </Tooltip>
);

export default Gif;
