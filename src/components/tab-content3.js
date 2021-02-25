import React from "react";
import { Link } from "react-router-dom";

const TabContent3 = () => {
  return (
    <div className="tab-3-content tab-content-item">
      <div className="text-center">
        <p className="text-lg">
          Choose one plan and watch everything on Netflix.
        </p>
        <Link to="#" className="btn btn-lg">
          Watch Free For 30 Days
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly price after free month ends on 6/19/19</td>
            <td>$8.99</td>
            <td>$12.99</td>
            <td>$15.99</td>
          </tr>
          <tr>
            <td>HD Available</td>
            <td>
              <i className="fas fa-times"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
          </tr>
          <tr>
            <td>Ultra HD Available</td>
            <td>
              <i className="fas fa-times"></i>
            </td>
            <td>
              <i className="fas fa-times"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
          </tr>
          <tr>
            <td>Screens you can watch on at the same time</td>
            <td>1</td>
            <td>2</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Watch on your laptop, TV, phone and tablet</td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
          </tr>
          <tr>
            <td>Unlimited movies and TV shows</td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
          </tr>
          <tr>
            <td>Cancel anytime</td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
          </tr>
          <tr>
            <td>First month free</td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabContent3;
