import React from "react";
import "../styles/account__setting.css";
function AccountSetting() {
  return (
    <div className="account__setting__main">
      <div className="account__setting__child">
        <h2>Account Settings</h2>
        <div className="input__card">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="input__card">
          <label htmlFor="password">New password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="input__card">
          <label htmlFor="again_password">New password(again)</label>
          <input type="password" name="again_password" id="again_password" />
        </div>
        <button>Save</button>
      </div>
    </div>
  );
}

export default AccountSetting;
