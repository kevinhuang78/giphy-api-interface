import React, { useState } from "react";
import { connect } from "react-redux";
import { IGifData } from "../reducers";
import { Row, Col } from "antd";
import Gif from "../components/Gif";
import AppLayout from "../components/AppLayout";
import withSearchedGifsData from "../helpers/withSearchedGifsData";
import { withRouter } from "react-router";
import Input from "antd/lib/input";
import { History, LocationState } from "history";
import queryString from "query-string";

interface IProps {
    searchedGifs: [
        {
            id: string;
            image_url: string;
            title: string;
        }
    ];
    history: History<LocationState>;
}

const SearchScreen = (props: IProps) => {
    const { searchedGifs } = props;
    const parsedQuery: any = queryString.parse(props.history.location.search);

    const [searchValue, setSearchValue] = useState();

    const handleSearch = () => {
        props.history.push({
            pathname: "/giphy-api-interface/search",
            search: `?search=${searchValue}`
        });
    };

    return (
        <AppLayout defaultSelectedKeys={["search"]}>
            <Row type="flex" justify="center">
                <Col span={8}>
                    <h1 className="text-center">Page de recherche</h1>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={8}>
                    <Input.Search
                        defaultValue={parsedQuery?.search}
                        onChange={e => setSearchValue(e.target.value)}
                        onSearch={() => handleSearch()}
                        placeholder="Veuillez taper votre recherche ici"
                        enterButton={true}
                    />
                </Col>
            </Row>
            <Row type="flex" justify="center">
                {searchedGifs && searchedGifs.length > 0 ? (
                    searchedGifs.map(gif => (
                        <Col key={gif.id} span={8}>
                            <Gif image_url={gif.image_url} title={gif.title} />
                        </Col>
                    ))
                ) : (
                    <Col span={8}>
                        <Gif
                            image_url={
                                "https://media3.giphy.com/media/14uQ3cOFteDaU/giphy.gif?cid=790b76116575967dd37c55dc00021cb4d3c30ea11bb1c6f2&rid=giphy.gif"
                            }
                            title="Aucun GIF trouvé - Erreur 404"
                        />
                    </Col>
                )}
            </Row>
        </AppLayout>
    );
};

const mapStateToProps = (state: IGifData) => {
    return {
        searchedGifs: state.searchedGifs
    };
};

export default withSearchedGifsData(withRouter(connect(mapStateToProps)(SearchScreen)));
