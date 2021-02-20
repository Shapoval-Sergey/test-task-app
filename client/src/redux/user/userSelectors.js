const user = (state) => state.user.createNewUser;

const isShared = (state) => state.user.createNewUser.shared;

const isEmail = (state) => state.user.createNewUser.email;

// eslint-disable-next-line import/no-anonymous-default-export
export default { isShared, isEmail, user };
