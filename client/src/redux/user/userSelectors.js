const isShared = (state) => state.user.shared;
const isEmail = (state) => state.user.email;

// eslint-disable-next-line import/no-anonymous-default-export
export default { isShared, isEmail };
