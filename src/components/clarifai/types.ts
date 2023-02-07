interface Api {
  outputs: [
    {
      data: {
        regions: [
          {
            region_info: {
              bounding_box: {
                top_row: number;
                bottom_row: number;
                left_col: number;
                right_col: number;
              };
            };
          }
        ];
      };
    }
  ];
}

interface Box {
  leftCol: number;
  topRow: number;
  rightCol: number;
  bottomRow: number;
}
