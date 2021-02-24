const user = (state) => state.users.user;

const isShared = (state) => state.users.user.shared;

const isEmail = (state) => state.users.user.email;

// eslint-disable-next-line import/no-anonymous-default-export
export default { isShared, isEmail, user };
