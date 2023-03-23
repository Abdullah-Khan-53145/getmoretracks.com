import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../styles/findtracks.css";
function FindTrack() {
  const [trackings, setTrackings] = useState([]);
  return (
    <div className="find__tracks__main">
      <div className="find__tracks__top">
        <div className="find__tracks__card">
          <h2>USPS</h2>
          <div className="row">
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
              <label htmlFor="enddate">
                <span>Shipped to, date</span>
              </label>
              <input type="date" name="enddate" id="enddate" placeholder="To" />
            </div>
            <div className="date__input">
              <label htmlFor="delivery">
                <span>Delivery by</span>
              </label>
              <input
                type="date"
                name="delivery"
                id="delivery"
                placeholder="To"
              />
            </div>
          </div>
          <div className="row">
            <div className="date__input">
              <label htmlFor="Destination ZIP">
                <span>Destination ZIP</span>
              </label>
              <input
                type="text"
                name="Destination ZIP"
                id="Destination ZIP"
                placeholder=""
              />
            </div>
            <div className="date__input">
              <label htmlFor="Shipped from city">
                <span>Shipped from city</span>
              </label>
              <input
                type="text"
                name="Shipped from city"
                id="Shipped from city"
                placeholder=""
              />
            </div>
            <div className="date__input">
              <label htmlFor="Sender's ZIP (*beta)">
                <span>Sender's ZIP (*beta)</span>
              </label>
              <input
                type="text"
                name="Sender's ZIP (*beta)"
                id="Sender's ZIP (*beta)"
                placeholder=""
              />
            </div>
          </div>
          <div className="row more__filters">
            <div className="left__column">
              <div className="checkbox__filters">
                <input type="checkbox" name="amazon/fb" id="amazon/fb" />
                <label htmlFor="amazon/fb">For Amazon/FB marketplace</label>
              </div>
              <div className="checkbox__filters">
                <input
                  type="checkbox"
                  name="eBay/Paypal/Walmart"
                  id="eBay/Paypal/Walmart"
                />
                <label htmlFor="eBay/Paypal/Walmart">
                  For eBay/Paypal/Walmart
                </label>
              </div>
              <div className="checkbox__filters">
                <input type="checkbox" name="Etsy" id="Etsy" />
                <label htmlFor="Etsy">For Etsy</label>
              </div>
              <div className="checkbox__filters">
                <input type="checkbox" name="2-3 days" id="2-3 days" />
                <label htmlFor="2-3 days">USPS Priority mail 2-3 days</label>
              </div>
            </div>
            <div className="right__column">
              <div className="checkbox__filters">
                <input type="checkbox" name="4-5 days" id="4-5 days" />
                <label htmlFor="4-5 days">USPS First class 4-5 days</label>
              </div>
              <div className="checkbox__filters">
                <input
                  type="checkbox"
                  name="only delivered"
                  id="only delivered"
                />
                <label htmlFor="only delivered">Show only delivered</label>
              </div>
              <div className="checkbox__filters">
                <input
                  type="checkbox"
                  name="not show delivered"
                  id="not show delivered"
                />
                <label htmlFor="not show delivered">
                  Do not show delivered
                </label>
              </div>
              <div className="checkbox__filters">
                <input
                  type="checkbox"
                  name="nearby zip codes"
                  id="nearby zip codes"
                />
                <label htmlFor="nearby zip codes">Show nearby zip codes</label>
              </div>
            </div>
          </div>
          <div className="card__footer">
            <button className="submit">Search Tracks</button>
            <a
              href="https://chrome.google.com/webstore/detail/getmoretracks-extension/honkmidaimppeonkobeoegomglfbnlhm?hl=en"
              target={"_blank"}
            >
              Try chrome app for Amazon sellers
            </a>
          </div>
        </div>
        <div className="find__tracks__card">
          <h2>FEDEX</h2>
          <div className="row">
            <div className="date__input">
              <label htmlFor="fedexstartdate">
                <span>Shipped from, date</span>
              </label>
              <input
                type="date"
                name="fedexstartdate"
                id="fedexstartdate"
                placeholder="To"
              />
            </div>
            <div className="date__input">
              <label htmlFor="fedexenddate">
                <span>Shipped to, date</span>
              </label>
              <input
                type="date"
                name="fedexenddate"
                id="fedexenddate"
                placeholder="To"
              />
            </div>
            <div className="date__input">
              <label htmlFor="fedexdelivery">
                <span>Delivery by</span>
              </label>
              <input
                type="date"
                name="fedexdelivery"
                id="fedexdelivery"
                placeholder="To"
              />
            </div>
          </div>
          <div className="row">
            <div className="date__input">
              <label htmlFor="Country">
                <span>Country</span>
              </label>
              <div>
                <select name="Country" id="Country">
                  <option value="all">Country</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="ca">CANADA</option>
                </select>
              </div>
            </div>
            <div className="date__input">
              <label htmlFor="fedexcity">
                <span>City</span>
              </label>
              <input
                type="text"
                name="fedexcity"
                id="fedexcity"
                placeholder=""
              />
            </div>
            <div className="date__input">
              <label htmlFor="from city">
                <span>Shipped from city</span>
              </label>
              <input
                type="text"
                name="from city"
                id="from city"
                placeholder=""
              />
            </div>
          </div>
          <div className="card__footer">
            <button className="submit">Search Tracks</button>
            <a
              href="https://chrome.google.com/webstore/detail/getmoretracks-extension/honkmidaimppeonkobeoegomglfbnlhm?hl=en"
              target={"_blank"}
            >
              Try chrome app for Amazon sellers
            </a>
          </div>
        </div>
      </div>
      <div className="find__tracks__table">
        <div className="table__header__find__tracks">
          <div className="show__entries">
            <label htmlFor="show_entries">Show</label>
            <select name="show_entries" id="show_entries">
              <option value="">10</option>
              <option value="">25</option>
              <option value="">50</option>
              <option value="">100</option>
            </select>
            <label htmlFor="show_entries">entries</label>
          </div>
          <div className="Search">
            <input type="text" placeholder="Search" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="table">
          <Table>
            <Thead>
              <Tr>
                <Th>Copy</Th>
                <Th>Tracking number</Th>
                <Th>Service</Th>
                <Th>Label created</Th>
                <Th>Shipped</Th>
                <Th>Delivery</Th>
                <Th>Expected delivery date</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            {trackings.length !== 0 && (
              <>
                <Tbody>
                  <Tr></Tr>
                </Tbody>
              </>
            )}
          </Table>
          {trackings.length == 0 && (
            <>
              <div className="result__of__search">
                If you couldn't find tracking numbers please read &nbsp;
                <a
                  href="https://getmoretracks.tawk.help/article/i-cannot-find-a-tracking-number-why"
                  target="_blank"
                >
                  this article
                </a>
              </div>
            </>
          )}
        </div>
        <div className="table__footer">
          <p>Showing 0 to 0 of 0 entries</p>
          <div className="table__footer_buttons">
            <button>Pervious</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindTrack;
