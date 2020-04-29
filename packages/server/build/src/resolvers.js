"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Query: {
        me: function () {
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
exports.default = resolvers;
