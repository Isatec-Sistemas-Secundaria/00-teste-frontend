const fakeApiCall = async () => {
  return new Promise<{ status: number }>((resolve) => {
    setTimeout(() => {
      resolve({ status: 200 });
    }, 1000);
  });
};
const LoginRequest = async () => {
  const response = await fakeApiCall();
  return response;
};

export { LoginRequest };
