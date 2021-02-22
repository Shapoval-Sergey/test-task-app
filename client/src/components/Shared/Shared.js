import React, { Component } from "react";
import { connect } from "react-redux";
import userOperations from "../../redux/user/userOperations";

import s from "./Shared.module.css";

class Shared extends Component {
  state = {
    shared: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.shared !== this.state.shared) {
      this.props.onUpdateShared(this.props.userId, this.state.shared);
    }
  }

  handleChange = () => {
    document.getElementById("vk").onclick = function () {
      window.open("https://www.vk.com", "a", "width=800,height=400");
    };

    document.getElementById("facebook").onclick = function () {
      window.open("https://www.facebook.com", "a", "width=800,height=400");
    };

    document.getElementById("twitter").onclick = function () {
      window.open("https://twitter.com", "a", "width=800,height=400");
    };

    document.getElementById("ok").onclick = function () {
      window.open("https://www.ok.ru", "a", "width=800,height=400");
    };

    setTimeout(() => this.setState({ shared: true }), 500);
  };

  render() {
    return (
      <div className={!this.state.shared ? s.box : s.boxDisabled}>
        <h2>Поделиться с друзьями:</h2>
        <ul className={s.about__list}>
          <li className={s.about__item}>
            {
              // eslint-disable-next-line
              <a id="vk" title="все ок">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 112.196 112.196"
                  className={s.icon}
                  onClick={this.handleChange}
                >
                  <circle cx="56.098" cy="56.098" r="56.098" fill="#4d76a1" />
                  <path
                    d="M53.979 80.702h4.403s1.33-.146 2.009-.878c.625-.672.605-1.934.605-1.934s-.086-5.908 2.656-6.778c2.703-.857 6.174 5.71 9.853 8.235 2.782 1.911 4.896 1.492 4.896 1.492l9.837-.137s5.146-.317 2.706-4.363c-.2-.331-1.421-2.993-7.314-8.463-6.168-5.725-5.342-4.799 2.088-14.702 4.525-6.031 6.334-9.713 5.769-11.29-.539-1.502-3.867-1.105-3.867-1.105l-11.076.069s-.821-.112-1.43.252c-.595.357-.978 1.189-.978 1.189s-1.753 4.667-4.091 8.636c-4.932 8.375-6.904 8.817-7.71 8.297-1.875-1.212-1.407-4.869-1.407-7.467 0-8.116 1.231-11.5-2.397-12.376-1.204-.291-2.09-.483-5.169-.514-3.952-.041-7.297.012-9.191.94-1.26.617-2.232 1.992-1.64 2.071.732.098 2.39.447 3.269 1.644 1.135 1.544 1.095 5.012 1.095 5.012s.652 9.554-1.523 10.741c-1.493.814-3.541-.848-7.938-8.446-2.253-3.892-3.954-8.194-3.954-8.194s-.328-.804-.913-1.234c-.71-.521-1.702-.687-1.702-.687l-10.525.069s-1.58.044-2.16.731c-.516.611-.041 1.875-.041 1.875s8.24 19.278 17.57 28.993c8.555 8.907 18.27 8.322 18.27 8.322z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#fff"
                  />
                </svg>
              </a>
            }
          </li>
          <li className={s.about__item}>
            {
              // eslint-disable-next-line
              <a id="facebook" title="все ок">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 112.196 112.196"
                  className={s.icon}
                  onClick={this.handleChange}
                >
                  <circle cx="56.098" cy="56.098" r="56.098" fill="#3b5998" />
                  <path
                    d="M70.201 58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34c0-5.964 2.833-15.303 15.301-15.303l11.234.047v12.51h-8.151c-1.337 0-3.217.668-3.217 3.513v7.585h11.334l-1.325 12.876z"
                    fill="#fff"
                  />
                </svg>
              </a>
            }
          </li>
          <li className={s.about__item}>
            {
              // eslint-disable-next-line
              <a id="twitter" title="все ок">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 112.197 112.197"
                  className={s.icon}
                  onClick={this.handleChange}
                >
                  <circle cx="56.099" cy="56.098" r="56.098" fill="#55acee" />
                  <path
                    d="M90.461 40.316a26.753 26.753 0 01-7.702 2.109 13.445 13.445 0 005.897-7.417 26.843 26.843 0 01-8.515 3.253 13.396 13.396 0 00-9.79-4.233c-7.404 0-13.409 6.005-13.409 13.409 0 1.051.119 2.074.349 3.056-11.144-.559-21.025-5.897-27.639-14.012a13.351 13.351 0 00-1.816 6.742c0 4.651 2.369 8.757 5.965 11.161a13.314 13.314 0 01-6.073-1.679l-.001.17c0 6.497 4.624 11.916 10.757 13.147a13.362 13.362 0 01-3.532.471c-.866 0-1.705-.083-2.523-.239 1.706 5.326 6.657 9.203 12.526 9.312a26.904 26.904 0 01-16.655 5.74c-1.08 0-2.15-.063-3.197-.188a37.929 37.929 0 0020.553 6.025c24.664 0 38.152-20.432 38.152-38.153 0-.581-.013-1.16-.039-1.734a27.192 27.192 0 006.692-6.94z"
                    fill="#f1f2f2"
                  />
                </svg>
              </a>
            }
          </li>
          <li className="about__item">
            {
              // eslint-disable-next-line
              <a id="ok" title="все ок">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 112.197 112.197"
                  className={s.icon}
                  onClick={this.handleChange}
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M48.921 40.507a8.367 8.367 0 008.367-8.443c-.017-4.679-3.742-8.402-8.411-8.406a8.398 8.398 0 00-8.432 8.508c.035 4.66 3.794 8.358 8.476 8.341z"
                      fill="#f5a408"
                      data-original="#000000"
                    />
                    <path
                      d="M48.875 0C21.882 0 0 21.883 0 48.875S21.882 97.75 48.875 97.75 97.75 75.867 97.75 48.875 75.868 0 48.875 0zm.07 14.863c9.52.026 17.161 7.813 17.112 17.438-.048 9.403-7.814 17.024-17.318 16.992-9.407-.032-17.122-7.831-17.066-17.253.053-9.525 7.772-17.203 17.272-17.177zm19.282 41.194c-2.105 2.161-4.639 3.725-7.453 4.816-2.66 1.031-5.575 1.55-8.461 1.896.437.474.642.707.914.979 3.916 3.937 7.851 7.854 11.754 11.802 1.33 1.346 1.607 3.014.875 4.577-.799 1.71-2.592 2.834-4.351 2.713-1.114-.077-1.983-.63-2.754-1.407-2.956-2.974-5.968-5.895-8.862-8.925-.845-.882-1.249-.714-1.994.052a589.856 589.856 0 01-9.034 9.072c-1.365 1.346-2.989 1.59-4.573.82-1.683-.814-2.753-2.533-2.671-4.262.058-1.166.632-2.06 1.434-2.858 3.877-3.869 7.742-7.75 11.608-11.628.257-.257.495-.53.868-.93-5.273-.551-10.028-1.849-14.099-5.032-.506-.396-1.027-.778-1.487-1.222-1.783-1.711-1.962-3.672-.553-5.69 1.207-1.728 3.231-2.19 5.336-1.197.408.191.796.433 1.168.689 7.586 5.213 18.008 5.356 25.624.233.754-.576 1.561-1.05 2.496-1.289 1.816-.468 3.512.201 4.486 1.791 1.115 1.817 1.102 3.589-.271 5z"
                      fill="#f5a408"
                      data-original="#000000"
                    />
                  </g>
                </svg>
              </a>
            }
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.user.createNewUser._id,
});

const mapDispatchToProps = {
  onUpdateShared: userOperations.updateUserShared,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shared);
