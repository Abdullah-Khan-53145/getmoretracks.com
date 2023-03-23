import React from "react";

import "../styles/used_tracking_numbers.css";
import TrackingTable from "./TrackingTable";
function UsedTracking() {
  return (
    <div className="used__tracking__number__main">
      <div className="top__cards">
        <div className="used__tracking__number__mid">
          <h2>Count my tracking numbers for period</h2>
          <div className="count_tracking_form">
            <div className="date__input">
              <label htmlFor="startdate">
                <span>From</span>
              </label>
              <input
                type="date"
                name="startdate"
                id="startdate"
                placeholder="To"
              />
            </div>
            <div className="date__input">
              <label htmlFor="startdate">
                <span>To</span>
              </label>
              <input
                type="date"
                name="startdate"
                id="startdate"
                placeholder="To"
              />
            </div>
            <div className="date__input">
              <label htmlFor="startdate">
                <span>Total</span>
              </label>
              <input
                type="text"
                name="startdate"
                id="startdate"
                value={""}
                placeholder="00"
              />
            </div>
          </div>
          <button>Count</button>
        </div>
        <div className="used__tracking__number__mid">
          <h2>My used tracking numbers</h2>
          <div className="count_tracking_form_bottom">
            <div className="count_tracking_inputs">
              <div className="date__input">
                <label htmlFor="startdate">
                  <span>Shipped from, date</span>
                </label>
                <input
                  type="date"
                  name="startdate"
                  id="startdate"
                  placeholder="To"
                />
              </div>
              <div className="date__input">
                <label htmlFor="startdate">
                  <span>Shipped to, date</span>
                </label>
                <input
                  type="date"
                  name="startdate"
                  id="startdate"
                  placeholder="To"
                />
              </div>
              <div className="date__input">
                <label htmlFor="startdate">
                  <span>Track#</span>
                </label>
                <input
                  type="number"
                  name="startdate"
                  id="startdate"
                  placeholder="00"
                />
              </div>
            </div>
            <div className="filters__check__box">
              <div className="filter__input">
                <input
                  type="checkbox"
                  name="changed-traling"
                  id="changed-traling"
                  placeholder="00"
                />
                <label htmlFor="changed-traling">
                  <span>Show only changed tracking#</span>
                </label>
              </div>
              <div className="filter__input">
                <input
                  type="checkbox"
                  name="arriving-earlier"
                  id="arriving-earlier"
                  placeholder="00"
                />
                <label htmlFor="arriving-earlier">
                  <span>Arriving earlier</span>
                </label>
              </div>
              <div className="filter__input">
                <input
                  type="checkbox"
                  name="arriving-later"
                  id="arriving-later"
                  placeholder="00"
                />
                <label htmlFor="arriving-later">
                  <span>Arriving later</span>
                </label>
              </div>
              <div className="filter__input">
                <input
                  type="checkbox"
                  name="in-transit"
                  id="in-transit"
                  placeholder="00"
                />
                <label htmlFor="in-transit">
                  <span>In trasit</span>
                </label>
              </div>
            </div>
          </div>
          <button>Search</button>
        </div>
      </div>
      <div className="used__tracking__number__mid">
        <h2>Tracking details</h2>
        <TrackingTable />
      </div>
    </div>
  );
}

export default UsedTracking;
