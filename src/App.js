import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import SearchBar from "./SearchBar";
import MyImageList from "./MyImageList";

export default class App extends React.Component {
  state = { imageList: [] };

  getImageList = (imageList) => {
    this.setState({ imageList });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <div className="App" style={{ marginTop: "16px" }}>
            <SearchBar imageListGetter={this.getImageList} />
            <MyImageList imageList={this.state.imageList} />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
