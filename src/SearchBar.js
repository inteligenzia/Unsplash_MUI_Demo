import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import MyStyles from "./MyStyles";
import { getImageList } from "./api/unsplashConnector";

export default class SearchBar extends React.Component {
  state = { searchTerm: "" };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      getImageList(this.state.searchTerm).then((res) => {
        this.props.imageListGetter(res);
      });
    }
  };

  render() {
    return (
      <Paper
        elevation="0"
        sx={{ p: 2, backgroundColor: MyStyles.secondaryPaperColor }}
        className="search-bar"
      >
        <TextField
          label="Search Images"
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            )
          }}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
          helperText="Input your search term and hit enter"
        />
      </Paper>
    );
  }
}
