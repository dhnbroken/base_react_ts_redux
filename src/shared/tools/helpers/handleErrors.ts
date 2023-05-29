type GenericObject = { [key: string]: any };

export const handleCatchError = ({
  error,
  history,
  redirectUrl,
}: {
  error: any;
  history: GenericObject;
  redirectUrl: string;
}) => {
  console.log("error", error);
  if (
    (error?.statusCode > 399 && error?.statusCode < 500) ||
    (error?.status > 199 && error?.status < 300)
  ) {
    history.push(redirectUrl); // in future add path url here like /error/404
    return;
  }
  history.push("/error"); // in future add path url here like /error/404
};

export const throwError = (response: GenericObject | undefined) => {
  throw response;
};
