const resolvers = {
  Query: {
    me: () => {
      return {
        id: 1,
        email: 'test@test.com',
        name: 'Test Testerton',
        createdAt: '12345',
        verified: false,
        accountType: 'BASIC',
        role: 'FAN',
        alias: 'Testic',
        country: 'GBP',
        settings: {
          id: 'SettingID',
          userId: '1',
          emailNotifications: false,
          pushNotifications: false,
        },
      };
    },
  },
};

export default resolvers;
