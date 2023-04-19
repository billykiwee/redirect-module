export const errorHandler = (id: string) => {
  return {
    API_request: {
      notFound: `No data found for id: ${id}`,
    },
  };
};
