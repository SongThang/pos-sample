import Types from "../Types";

export const bannerAction = {
  fetchBanner: () => {
    return {
      type: Types.FETCH_BANNER,
    };
  },
};
