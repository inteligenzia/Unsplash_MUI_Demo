import React from "react";
import Skeleton from "@mui/material/Skeleton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";

export default class MyImageList extends React.Component {
  handleEmtpyState() {
    return this.props.imageList.length === 0 ? (
      <div style={{ marginTop: "24px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            Image Results will appear here
          </Grid>
          <Grid item xs={4}>
            <Skeleton variant="rectangular" width="100%" height={150} />
          </Grid>
          <Grid item xs={4}>
            <Skeleton variant="rectangular" width="100%" height={150} />
          </Grid>
          <Grid item xs={4}>
            <Skeleton variant="rectangular" width="100%" height={150} />
          </Grid>
        </Grid>
      </div>
    ) : (
      <div>
        <ImageList
          variant="masonry"
          cols={4}
          gap={8}
          sx={{ width: "100%", height: "100%", overflowY: "scroll" }}
        >
          {this.props.imageList.map((item) => {
            return (
              <ImageListItem key={item.id}>
                <img
                  src={`${item.urls.regular}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.urls.regular}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.id}
                  loading="lazy"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>
    );
  }

  render() {
    return this.handleEmtpyState();
  }
}
