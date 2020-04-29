const devConfig = {
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: process.env.JWT_EXPIRY,
  },
  dbUrl: process.env.MONGODB_URL,
};

export default devConfig;
