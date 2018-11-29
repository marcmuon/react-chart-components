import React, { Component } from 'react';
import './Splash.css';

class Splash extends Component {
  render() {
    return (
        <div className="Container-Text">
            <div >"The percentage of children who have received no vaccines has increased, reaching 1.3% for children born in 2015, compared with 0.3% among those 19–35 months when surveyed in 2001. <br/><br/>Some children might be unvaccinated because of choices made by parents, whereas for others, lack of access to health care or health insurance might be factors. <br/><br/><br/>Unvaccinated children in the 2017 NIS-Child were disproportionately uninsured: 17.2% of unvaccinated children were uninsured, compared with 2.8% of all children."<br/><br/><span style="font-size:18px"><em>-Vaccination Coverage Among Children Aged 19–35 Months — United States, <a href="https://www.cdc.gov/mmwr/volumes/67/wr/mm6740a4.htm?s_cid=mm6740a4_w" target='_blank' >2017.</a></em></span></div>
        </div>
    );
  }
}

export default Splash;