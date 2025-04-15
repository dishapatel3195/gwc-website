import React from 'react';
import './calendar.css';

const Calendar = () => {
  return (
    <div>
      
      <div className="image-header">
        <img src="assets/gwc_group.png" alt="Girls Who Code Big Group" />
      

      <div className="calendar-text-container">
          <h1 className="event-calendar-text">
            GWC Events Calendar
          </h1>
        
          <button type="button" className="find-event-button">Find event</button>
          </div>   

<div className="gwc-events-calendar-text">
  <h2>GWC Events Calendar</h2>
</div>
</div>
        <div className="calendar-container">
          <h2 className="month-text">Month</h2>
          <table>
          <thead> 
                <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
            </tr>
            <tr>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
            </tr>
            <tr>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
            </tr>
            <tr>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
            </tr>
            <tr>
                <td>31</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
            </table>
        </div>
      </div>

  );
};

export default Calendar;
