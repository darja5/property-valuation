import PropertyInfo from './PropertyInfo';
import { location } from '../data/mockdata';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <PropertyInfo location={location} />
      PropertyEstimation <br />
      PropertyValue
      <br />
      ActionButtons
      <br />
    </div>
  );
}
