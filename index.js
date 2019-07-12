let { RCTAppleHealthKit } = require('react-native').NativeModules;

import { Permissions } from './Constants/Permissions';
import { Units } from './Constants/Units';

let HealthKit = Object.assign({}, RCTAppleHealthKit, {
	Constants: {
		Permissions: Permissions,
		Units: Units
	}
});

export default HealthKit;
module.exports = HealthKit;
